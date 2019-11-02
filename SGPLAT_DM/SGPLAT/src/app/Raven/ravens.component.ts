
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Ravens",
    moduleId: module.id,
    templateUrl: "./ravens.component.html",
    styleUrls: ["./ravens.component.css"]
})
export class RavensComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub(){
        score6 =1;
    }
}

export var score6;