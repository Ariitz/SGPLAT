
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Ravenc",
    moduleId: module.id,
    templateUrl: "./ravenc.component.html",
    styleUrls: ["./ravenc.component.css"]
})
export class RavencComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    sub(){
        score4 =1;
    }
}

export var score4;
