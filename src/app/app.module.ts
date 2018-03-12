import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomHeaderModule } from './custom-header/custom-header.module'
import { CustomDivModule } from './custom-div/custom-div.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomHeaderModule,
    CustomDivModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
