import { APP_BASE_HREF } from "@angular/common";
import NavApp from "./components/index.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";

enableProdMode()

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/nav/' }],
  declarations: [
    NavApp
  ],
  bootstrap: [NavApp]
})
export default class MainModule {
}