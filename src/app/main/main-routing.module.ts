import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "faq", loadChildren: "./faq/faq.module#FaqModule" },
    { path: "about", loadChildren: "./about-us/about-us.module#AboutUsModule" },
    { path: "return-policy", loadChildren: "./return-policy/return-policy.module#ReturnPolicyModule" },
    { path: "term-conditions", loadChildren: "./term-condition/term-condition.module#TermConditionModule" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }