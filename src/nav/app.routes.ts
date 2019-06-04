import AdminApp from "./components/admin.component.ts";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
    { path: 'admin', component: AdminApp }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {});