
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Ravend",
    moduleId: module.id,
    templateUrl: "./ravend.component.html",
    styleUrls: ["./ravend.component.css"]
})
export class RavendComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    sub(){
        score2 = 1;
    }
}

export var score2;