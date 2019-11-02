import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavenoRoutingModule } from "./raveno-routing.module";
import { RavenoComponent } from "./raveno.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavenoRoutingModule
    ],
    declarations: [
        RavenoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavenoModule { }
