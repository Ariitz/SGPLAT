
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Raveno",
    moduleId: module.id,
    templateUrl: "./raveno.component.html",
    styleUrls: ["./raveno.component.css"]
})
export class RavenoComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    sub (){
        score8 = 1;
    }
}
export var score8;
