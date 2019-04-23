import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FaqComponent } from './faq.component';
@NgModule({
    declarations: [FaqComponent],
    exports: [FaqComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: FaqComponent }]),
    ]

})
export class FaqModule { }
