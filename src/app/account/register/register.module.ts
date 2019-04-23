import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [RegisterComponent],
    exports: [RegisterComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    ]

})
export class RegisterModule { }