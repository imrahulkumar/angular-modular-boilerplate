import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AboutUsComponent } from './about-us.component';
@NgModule({
    declarations: [AboutUsComponent],
    exports: [AboutUsComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: AboutUsComponent }]),
    ]

})
export class AboutUsModule { }