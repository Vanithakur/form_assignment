import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { Method1Component } from "./reactive/method1/method1.component";
import { Method2Component } from "./reactive/method2/method2.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

const appRoutes : Routes = [
   //  {path: 'step1', component: Step1Component},
   //  {path: 'step2', component: Step2Component},
   //  {path: 'step3', component: Step3Component},

    {path: 'reactive_form', component: ReactiveFormComponent},
    {path: 'template_driven', component: TemplateDrivenComponent},
   //  {path: 'method2', component: Method2Component},

]

@NgModule({
    imports : [
       // RouterModule.forRoot(appRoutes, { useHash:true }) 
       RouterModule.forRoot(appRoutes) 
    ],
    exports : [
       RouterModule
    ]
   })
export class LinkRoutingModule {

}