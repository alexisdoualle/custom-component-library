import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomHeaderComponent],
  exports: [CustomHeaderComponent]
})
export class CustomHeaderModule { }
