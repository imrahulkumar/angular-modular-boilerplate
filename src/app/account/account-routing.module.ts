import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  // { path: "register", loadChildren: "./register/register.module#RegisterModule" },
  // { path: "forgotpassword", loadChildren: "./forgot-password/forgot-password.module#ForgotPasswordModule" },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
