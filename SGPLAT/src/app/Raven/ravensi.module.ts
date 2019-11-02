import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavensiRoutingModule } from "./ravensi-routing.module";
import { RavensiComponent } from "./ravensi.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavensiRoutingModule
    ],
    declarations: [
        RavensiComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavensiModule { }
