import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReturnPolicyComponent } from './return-policy.component';
@NgModule({
    declarations: [ReturnPolicyComponent],
    exports: [ReturnPolicyComponent, RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ReturnPolicyComponent }]),
    ]

})
export class ReturnPolicyModule { }
