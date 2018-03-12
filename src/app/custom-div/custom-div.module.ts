import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDivComponent } from './custom-div.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomDivComponent],
  exports: [ CustomDivComponent ]
})
export class CustomDivModule { }
