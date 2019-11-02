
import { Component, OnInit } from "@angular/core";
@Component({
    selector: "Ravensi",
    moduleId: module.id,
    templateUrl: "./ravensi.component.html",
    styleUrls: ["./ravensi.component.css"]
})
export class RavensiComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub (){
        score7 = 1;
    }
}

export var score7;
