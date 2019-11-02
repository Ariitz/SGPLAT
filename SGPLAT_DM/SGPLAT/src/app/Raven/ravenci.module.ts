import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavenciRoutingModule } from "./ravenci-routing.module";
import { RavenciComponent } from "./ravenci.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavenciRoutingModule
    ],
    declarations: [
        RavenciComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavenciModule { }
