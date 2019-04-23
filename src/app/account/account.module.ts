import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    AccountRoutingModule
  ],
  exports: [AccountRoutingModule],
  providers: [],
  bootstrap: []
})

export class AccountModule { }
