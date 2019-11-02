import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PalabrasgRoutingModule } from "./palabrasg-routing.module";
import { PalabrasgComponent } from "./palabrasg.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        PalabrasgRoutingModule
    ],
    declarations: [
        PalabrasgComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PalabrasgModule { }
