import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule} from "@angular/router";
import { AlertComponent } from './alert/alert.component';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './secondary-header/secondary-header.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule
    
    
  ],
  exports: [LoaderComponent,AlertComponent,PrimaryHeaderComponent,SecondaryHeaderComponent],
  declarations: [LoaderComponent, AlertComponent, PrimaryHeaderComponent, SecondaryHeaderComponent],
  providers: [],
})
export class SharedModule { }
