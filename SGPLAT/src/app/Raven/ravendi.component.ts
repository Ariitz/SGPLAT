
import { Component, OnInit } from "@angular/core";
import {score1} from "~/app/Raven/raven.component";
import {score2} from "~/app/Raven/ravend.component";
import {score3} from "~/app/Raven/ravent.component";
import {score4} from "~/app/Raven/ravenc.component";
import {score5} from "~/app/Raven/ravenci.component";
import {score6} from "~/app/Raven/ravens.component";
import {score7} from "~/app/Raven/ravensi.component";
import {score8} from "~/app/Raven/raveno.component";
import {score9} from "~/app/Raven/ravenn.component";
import {correo} from "~/app/item/items.component"
import * as dialogs from "tns-core-modules/ui/dialogs";
import { getString } from "tns-core-modules/http/http";
import { formattedTextProperty } from "tns-core-modules/ui/text-base/text-base";



@Component({
    selector: "Ravendi",
    moduleId: module.id,
    templateUrl: "./ravendi.component.html",
    styleUrls: ["./ravendi.component.css"]
})
export class RavendiComponent implements OnInit {

    score =0;

    date = new Date;

    fecha = this.date.getTime();
    formato = new String;



    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    
   public sub(){
        this.score=0;

        if (score1==1) {
            this.score++;
        }
        if (score2==1) {
            this.score++;
        }
        if (score3==1) {
            this.score++;
        }
        if (score4==1) {
            this.score++;
        }
        if (score5==1) {
            this.score++;
        }
        if (score6==1) {
            this.score++;
        }
        if (score7==1) {
            this.score++;
        }
        if (score8==1) {
            this.score++;
        }
        if (score9==1) {
            this.score++;
        }
        //dialogs.alert("score: "+ this.score);
        
        
       // this.formato = this.date.getDay+"/"+this.date.getMonth+"/"+this.date.getFullYear;

        //dialogs.alert("Fecha: "+this.date);
        //dialogs.alert("dia"+this.date.getDay);

        getString("http://10.0.0.10:8080/rest/intento/up?edo=no%20realizada&corPac="+correo+"&nomPru=raven&aciertos="+this.score+"&fechaI=2/11/2019").then((r: String) =>{
            dialogs.alert("Prueba finalizada");
        });
    }
    public subm(){
        this.score=1;
        if (score1==1) {
            this.score++;
        }
        if (score2==1) {
            this.score++;
        }
        if (score3==1) {
            this.score++;
        }
        if (score4==1) {
            this.score++;
        }
        if (score5==1) {
            this.score++;
        }
        if (score6==1) {
            this.score++;
        }
        if (score7==1) {
            this.score++;
        }
        if (score8==1) {
            this.score++;
        }
        if (score9==1) {
            this.score++;
        }
        getString("http://10.0.0.10:8080/rest/intento/up?edo=no%20realizada&corPac="+correo+"&nomPru=raven&aciertos="+this.score+"&fechaI=2/11/2019").then((r: String) =>{
            dialogs.alert("Prueba finalizada");
        });

    }



}
