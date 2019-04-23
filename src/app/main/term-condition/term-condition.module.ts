import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TermConditionComponent } from './term-condition.component';
@NgModule({
    declarations: [TermConditionComponent],
    exports: [TermConditionComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: TermConditionComponent }]),
    ]

})
export class TermConditionModule { }
