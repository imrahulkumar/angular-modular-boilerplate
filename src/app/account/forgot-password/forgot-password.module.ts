import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ForgotPasswordComponent } from './forgot-password.component';
@NgModule({
    declarations: [ForgotPasswordComponent],
    exports: [ForgotPasswordComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ForgotPasswordComponent }]),
    ]

})
export class ForgotPasswordModule { }