import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavendiRoutingModule } from "./ravendi-routing.module";
import { RavendiComponent } from "./ravendi.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavendiRoutingModule
    ],
    declarations: [
        RavendiComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavendiModule { }
