import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PalabrasRoutingModule } from "./palabras-routing.module";
import { PalabrasComponent } from "./palabras.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PalabrasRoutingModule
    ],
    declarations: [
        PalabrasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PalabrasModule { }
