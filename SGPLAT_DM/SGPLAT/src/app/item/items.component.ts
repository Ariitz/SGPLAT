import { Component, OnInit, Input } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClientModule, HttpRequest } from "@angular/common/http";




@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./home.component.css"]
})



export class HomeComponent implements OnInit {

    email;
    pw;


    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        
    }


    submit() {
        /*if (this.email=='ariitzherrera03@gmail.com') {
            if (this.pw=='ariitz45') {
                this.routerExtensions.navigate(['/pruebas'])
            
             
                
                
            }
            else{
                dialogs.alert('contraseña invalida');
            }
        }
        else{
            dialogs.alert("correo no valido");
        }*/
        
        getString("http://192.168.100.3:8080/rest/LogPaciente/"+this.email+"/"+this.pw).then((r: string) => {

            if (r=="entra"){
                this.routerExtensions.navigate(['/pruebas'])
                dialogs.alert('Bienvenido a SGPLAT');
            }
            else{
                dialogs.alert('revise sus datos');
            }
        }, (e) => {
        });

        
        correo = this.email;
        
        
      }

      

    ngOnInit(): void {
        // Init your component properties here.
    }

    
}

export var correo;