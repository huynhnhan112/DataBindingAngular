import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BTDataBindingModule } from './BaiTapDataBinding/BaiTapDataBinding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BTDataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
