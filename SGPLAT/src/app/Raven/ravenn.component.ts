
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Ravenn",
    moduleId: module.id,
    templateUrl: "./ravenn.component.html",
    styleUrls: ["./ravenn.component.css"]
})
export class RavennComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub (){
        score9 = 1;
    }
}

export var score9;