import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavenRoutingModule } from "./raven-routing.module";
import { RavenComponent } from "./raven.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavenRoutingModule
    ],
    declarations: [
        RavenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavenModule { }
