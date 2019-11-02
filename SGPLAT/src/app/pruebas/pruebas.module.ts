import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PruebasRoutingModule } from "./pruebas-routing.module";
import { PruebasComponent } from "./pruebas.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PruebasRoutingModule
    ],
    declarations: [
        PruebasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PruebasModule { }
