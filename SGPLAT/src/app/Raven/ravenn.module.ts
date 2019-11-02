import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavennRoutingModule } from "./ravenn-routing.module";
import { RavennComponent } from "./ravenn.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavennRoutingModule
    ],
    declarations: [
        RavennComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavennModule { }
