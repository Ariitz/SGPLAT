
import { Component } from "@angular/core";
import {score1} from "~/app/Raven/raven.component";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent {
     scoreg = score1;
 }

 export var scoreg;

 

 