import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavendRoutingModule } from "./ravend-routing.module";
import { RavendComponent } from "./ravend.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavendRoutingModule
    ],
    declarations: [
        RavendComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavendModule { }
