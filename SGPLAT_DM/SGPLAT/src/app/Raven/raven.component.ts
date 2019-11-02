
import { Component, OnInit, Input} from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    selector: "Raven",
    moduleId: module.id,
    templateUrl: "./raven.component.html",
    styleUrls: ["./raven.component.css"]
})


export class RavenComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    sub(){
        score1 =1;
    }
}

export var score1;

