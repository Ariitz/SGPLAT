
import { Component, OnInit } from "@angular/core";
@Component({
    selector: "Ravenci",
    moduleId: module.id,
    templateUrl: "./ravenci.component.html",
    styleUrls: ["./ravenci.component.css"]
})
export class RavenciComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub(){
        score5 =1;
    }
}

export var score5;