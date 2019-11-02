import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavencRoutingModule } from "./ravenc-routing.module";
import { RavencComponent } from "./ravenc.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavencRoutingModule
    ],
    declarations: [
        RavencComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavencModule { }
