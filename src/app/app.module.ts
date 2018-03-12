import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomHeaderModule } from './custom-header/custom-header.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
