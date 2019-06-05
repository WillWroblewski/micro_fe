import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import App from './index.component.ts';
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
  ],  
  providers: [{ provide: APP_BASE_HREF, useValue: '/home/' }],
  declarations: [
    App
  ],
  bootstrap: [App]
})

export default class MainModule {
}