import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PalabrasgComponent } from "./palabrasg.component";
const routes: Routes = [
    { path: "", component: PalabrasgComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PalabrasgRoutingModule { }

