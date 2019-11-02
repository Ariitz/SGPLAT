import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
 
 
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/item/item.module#HomeModule" },
    { path: "pruebas", loadChildren: "~/app/pruebas/pruebas.module#PruebasModule" },
    { path: "palabras", loadChildren: "~/app/Palabras/palabras.module#PalabrasModule" },
    { path: "palabrasg", loadChildren: "~/app/Palabras/palabrasg.module#PalabrasgModule" },
    { path: "raven", loadChildren: "~/app/Raven/raven.module#RavenModule" },
    { path: "ravend", loadChildren: "~/app/Raven/ravend.module#RavendModule" },
    { path: "ravent", loadChildren: "~/app/Raven/ravent.module#RaventModule" },
    { path: "ravenc", loadChildren: "~/app/Raven/ravenc.module#RavencModule" },
    { path: "ravenci", loadChildren: "~/app/Raven/ravenci.module#RavenciModule" },
    { path: "ravens", loadChildren: "~/app/Raven/ravens.module#RavensModule" },
    { path: "ravensi", loadChildren: "~/app/Raven/ravensi.module#RavensiModule" },
    { path: "raveno", loadChildren: "~/app/Raven/raveno.module#RavenoModule" },
    { path: "ravenn", loadChildren: "~/app/Raven/ravenn.module#RavennModule" },
    { path: "ravendi", loadChildren: "~/app/Raven/ravendi.module#RavendiModule" }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
