import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';
@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'abc', pathMatch: 'full' },
            { path: 'abc', component: LoginComponent }
        ])

        // { path: "", redirectTo: 'main', pathMatch: 'full' },
        // { path: "main", loadChildren: "./main/main.module#MainModule" },
    ]

})
export class LoginModule { }