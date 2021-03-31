import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './excomponent/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RegisterComponent]
})
export class ExModule { }
