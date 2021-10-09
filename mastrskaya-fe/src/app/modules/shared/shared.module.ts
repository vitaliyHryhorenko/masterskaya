import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { RangeComponent } from './components/range/range.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    RangeComponent
  ],
  exports: [
    ButtonComponent,
    RangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
