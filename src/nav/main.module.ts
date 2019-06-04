import { APP_BASE_HREF } from "@angular/common";
import NavApp from "./components/index.component.ts";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { AppRoutes } from "./app.routes.ts";
import AdminApp from "./components/admin.component.ts";

enableProdMode()

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/nav/' }],
  declarations: [
    NavApp,
    AdminApp
  ],
  bootstrap: [NavApp]
})
export default class MainModule {
}