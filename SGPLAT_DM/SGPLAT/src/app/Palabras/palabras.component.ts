
import { Component, OnInit } from "@angular/core";
import { AudioPlayerOptions, AudioRecorderOptions, TNSPlayer, TNSRecorder } from 'nativescript-audio';
import * as app from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';
import { File, knownFolders } from 'tns-core-modules/file-system';
import * as platform from 'tns-core-modules/platform';
import * as timer from 'tns-core-modules/timer';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Page } from 'tns-core-modules/ui/page';
import { Slider } from 'tns-core-modules/ui/slider';
import './async-await';
import {playRemoteFile} from "~/app/Palabras/palabrasg.component"





@Component({
    selector: "Palabras",
    moduleId: module.id,
    templateUrl: "./palabras.component.html",
    styleUrls: ["./palabras.component.css"]
})



export class PalabrasComponent extends Observable  {

  @ObservableProperty() public isPlaying: boolean;
  @ObservableProperty() public isRecording: boolean;
  @ObservableProperty() public audioMeter = '0';
  @ObservableProperty() public recordedAudioFile: string;
  @ObservableProperty() public currentVolume;
  @ObservableProperty() public audioTrackDuration;
  @ObservableProperty() public remainingDuration; 

  private _recorder;
  private _player: TNSPlayer;
  private _audioSessionId;
  private _page;
  private _meterInterval: any;
  private _slider: Slider;
  private audio: number;



    constructor(page: Page) {
      super();
      this._player = new TNSPlayer();
      this._player.debug = true; // set true for tns_player logs
  
      this._recorder = new TNSRecorder();
      this._recorder.debug = true; // set true for tns_recorder logs
  
      this.currentVolume = 1;
      this._slider = page.getViewById('volumeSlider') as Slider;
  
      // Set player volume
      if (this._slider) {
        this._slider.on('valueChange', (data: any) => {
          this._player.volume = this._slider.value / 100;
        });
      }
    }
  
    public async startRecord(args) {
      try {
        if (!TNSRecorder.CAN_RECORD()) {
          dialogs.alert('This device cannot record audio.');
          return;
        }
        const audioFolder = knownFolders.currentApp().getFolder('audio');
        console.log(JSON.stringify(audioFolder));
  
        let androidFormat;
        let androidEncoder;
        if (platform.isAndroid) {
          // m4a
          // static constants are not available, using raw values here
          // androidFormat = android.media.MediaRecorder.OutputFormat.MPEG_4;
          androidFormat = 2;
          // androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
          androidEncoder = 3;
        }
  
        const recordingPath = `${audioFolder.path}/recording.${this.platformExtension()}`;
  
        const recorderOptions: AudioRecorderOptions = {
          filename: recordingPath,
  
          format: androidFormat,
  
          encoder: androidEncoder,
  
          metering: true,
  
          infoCallback: infoObject => {
            console.log(JSON.stringify(infoObject));
          },
  
          errorCallback: errorObject => {
            console.log(JSON.stringify(errorObject));
          }
        };
  
        await this._recorder.start(recorderOptions);
        this.isRecording = true;
        if (recorderOptions.metering) {
          this._initMeter();
        }
      } catch (err) {
        this.isRecording = false;
        this._resetMeter();
        dialogs.alert(err);
      }
    }
  
    public async stopRecord(args) {
      this._resetMeter();
      await this._recorder.stop().catch(ex => {
        console.log(ex);
        this.isRecording = false;
        this._resetMeter();
      });
  
      this.isRecording = false;
      alert('Recorder stopped.');
      this._resetMeter();
    }
  
    private _initMeter() {
      this._resetMeter();
      this._meterInterval = setInterval(() => {
        this.audioMeter = this._recorder.getMeters();
        console.log(this.audioMeter);
      }, 300);
    }
  
    private _resetMeter() {
      if (this._meterInterval) {
        this.audioMeter = '0';
        clearInterval(this._meterInterval);
        this._meterInterval = undefined;
      }
    }
  
    public getFile(args) {
      try {
        const audioFolder = knownFolders.currentApp().getFolder('audio');
        const recordedFile = audioFolder.getFile(`recording.${this.platformExtension()}`);
        console.log(JSON.stringify(recordedFile));
        console.log('recording exists: ' + File.exists(recordedFile.path));
        this.recordedAudioFile = recordedFile.path;
      } catch (ex) {
        console.log(ex);
      }
    }
  
    public async playRecordedFile(args) {
      const audioFolder = knownFolders.currentApp().getFolder('audio');
      const recordedFile = audioFolder.getFile(`recording.${this.platformExtension()}`);
      console.log('RECORDED FILE : ' + JSON.stringify(recordedFile));
  
      const playerOptions: AudioPlayerOptions = {
        audioFile: `~/audio/recording.${this.platformExtension()}`,
        loop: false,
        completeCallback: async () => {
          alert('Audio finalizado, presione el botón de siguiente para grabar las palabras que recuerde.');
          this.isPlaying = false;
          if (!playerOptions.loop) {
            await this._player.dispose();
            console.log('player disposed');
          }
        },
  
        errorCallback: errorObject => {
          console.log(JSON.stringify(errorObject));
          this.isPlaying = false;
        },
  
        infoCallback: infoObject => {
          console.log(JSON.stringify(infoObject));
          dialogs.alert('Info callback');
        }
      };
  
      await this._player.playFromFile(playerOptions).catch(err => {
        console.log('error playFromFile');
        this.isPlaying = false;
      });
  
      this.isPlaying = true;
    }
  





    public sig(){
      dialogs.alert("Presione una vez grabar para comenzar a grabar"+
      "\nPresione parar para dejar de grabar"+
      "\nEn play puede volver a escuchar su audio, o vaya a fin para finalizar la prueba");
    }







    /***** AUDIO PLAYER *****/
  
    public async playAudio(filepath: string, fileType: string) {
      try {
        const playerOptions: AudioPlayerOptions = {
          audioFile: filepath,
          loop: false,
          completeCallback: async () => {
            
          alert('Audio finalizado, presione el botón de siguiente para grabar las palabras que recuerde.');
            await this._player.dispose();
            this.isPlaying = false;
            console.log('player disposed');
          },
          errorCallback: errorObject => {
            console.log(JSON.stringify(errorObject));
            this.isPlaying = false;
          },
          infoCallback: args => {
            console.log(JSON.stringify(args));
          }
        };
  
        this.isPlaying = true;
  
        if (fileType === 'localFile') {
          await this._player.playFromFile(playerOptions).catch(() => {
            this.isPlaying = false;
          });
          this.isPlaying = true;
          this.audioTrackDuration = await this._player.getAudioTrackDuration();
          // start audio duration tracking
          this._startDurationTracking(this.audioTrackDuration);
          this._startVolumeTracking();
        } else if (fileType === 'remoteFile') {
          await this._player.playFromUrl(playerOptions).catch(() => {
            this.isPlaying = false;
          });
          this.isPlaying = true;
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  
    /**
     * PLAY REMOTE AUDIO FILE
     */
    public playRemoteFile(args) {
      /*console.log('playRemoteFile');
      this.audio = Math.floor(Math.random()*(8-1)+1);

      
      const filepath = 'http://nanodevelopment.com.mx/Palabras/'+this.audio+'.mp3';
  
      this.playAudio(filepath, 'remoteFile');*/
      playRemoteFile(args);
    }
  
    public resumePlayer() {
      console.log(JSON.stringify(this._player));
      this._player.resume();
    }
  
    /**
     * PLAY LOCAL AUDIO FILE from app folder
     */
    public playLocalFile(args) {
      let filepath = '~/audio/angel.mp3';
      this.playAudio(filepath, 'localFile');
    }
  
    /**
     * PAUSE PLAYING
     */
    public async pauseAudio(args) {
      try {
        await this._player.pause();
        this.isPlaying = false;
      } catch (error) {
        console.log(error);
        this.isPlaying = true;
      }
    }
  
    public async stopPlaying(args) {
      await this._player.dispose();
      alert('Media Player Disposed.');
    }
  
    /**
     * RESUME PLAYING
     */
    public resumePlaying(args) {
      console.log('START');
      this._player.play();
    }
  
    public muteTap() {
      this._player.volume = 0;
    }
  
    public unmuteTap() {
      this._player.volume = 1;
    }
  
    public skipTo8() {
      this._player.seekTo(8);
    }
  
    public playSpeed1() {
      this._player.changePlayerSpeed(1);
    }
  
    public playSpeed15() {
      this._player.changePlayerSpeed(1.5);
    }
  
    public playSpeed2() {
      this._player.changePlayerSpeed(2);
    }
  
    private platformExtension() {
      // 'mp3'
      return `${app.android ? 'm4a' : 'caf'}`;
    }
  
    private async _startDurationTracking(duration) {
      if (this._player && this._player.isAudioPlaying()) {
        const timerId = timer.setInterval(() => {
          this.remainingDuration = duration - this._player.currentTime;
          // console.log(`this.remainingDuration = ${this.remainingDuration}`);
        }, 1000);
      }
    }
  
    private _startVolumeTracking() {
      if (this._player) {
        const timerId = timer.setInterval(() => {
          console.log('volume tracking', this._player.volume);
          this.currentVolume = this._player.volume;
        }, 2000);
      }
    }
  }
  
  export function ObservableProperty() {
    return (obj: Observable, key: string) => {
      let storedValue = obj[key];
  
      Object.defineProperty(obj, key, {
        get: function() {
          return storedValue;
        },
        set: function(value) {
          if (storedValue === value) {
            return;
          }
          storedValue = value;
          this.notify({
            eventName: Observable.propertyChangeEvent,
            propertyName: key,
            object: this,
            value
          });
        },
        enumerable: true,
        configurable: true
      });
    };
  }

  