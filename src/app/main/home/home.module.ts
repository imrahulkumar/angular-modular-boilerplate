import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
    ]

})
export class HomeModule { }
