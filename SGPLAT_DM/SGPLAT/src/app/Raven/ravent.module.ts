import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RaventRoutingModule } from "./ravent-routing.module";
import { RaventComponent } from "./ravent.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RaventRoutingModule
    ],
    declarations: [
        RaventComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RaventModule { }
