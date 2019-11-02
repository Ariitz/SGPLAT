import { Component, OnInit } from "@angular/core";

import * as dialogs from "tns-core-modules/ui/dialogs";

import { RouterExtensions } from "nativescript-angular/router";

import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

import {correo} from "~/app/item/items.component"

@Component({
    selector: "Pruebas",
    moduleId: module.id,
    styleUrls: ["./pruebas.component.css"],
    templateUrl: "./pruebas.component.html"
})
export class PruebasComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ravengo(){
        getString("http://10.0.0.10:8080/rest/intento/"+correo+"/raven").then((r: string) => {

            if (r=="existe"){
                this.routerExtensions.navigate(['/raven'])
                dialogs.alert('A continuación se mostrarán imágenes.'+
                ' \nUsted seleccionara la imagen que considere complementa la imagen principal.'+
                'Seleccionara la imagen con solo tocarla, solo toque una vez, en caso de tardar más de 10 segundos, presione de nuevo'
                );
            }
            else{
                dialogs.alert('Esta prueba no le ha sido asignada');
            }
        }, (e) => {
        });
    }

    palabrasgo(){

        getString("http://10.0.0.10:8080/rest/intento/"+correo+"/palabras").then((r: string) => {

            if (r=="existe"){
                this.routerExtensions.navigate(['/palabras'])
                dialogs.alert('Precione el ícono de play para escuchar 10 palabras, '
        );
            }
            else{
                dialogs.alert('Esta prueba no le ha sido asignada');
            }
        }, (e) => {
        });
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
