
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Ravent",
    moduleId: module.id,
    templateUrl: "./ravent.component.html",
    styleUrls: ["./ravent.component.css"]
})
export class RaventComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub(){
        score3 =1;
    }
}

export var score3;