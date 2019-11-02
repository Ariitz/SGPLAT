import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RavensRoutingModule } from "./ravens-routing.module";
import { RavensComponent } from "./ravens.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RavensRoutingModule
    ],
    declarations: [
        RavensComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RavensModule { }
