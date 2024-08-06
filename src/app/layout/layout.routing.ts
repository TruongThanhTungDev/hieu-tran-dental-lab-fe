import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home/home.component";
import { LoginComponent } from "../pages/admin/login/login.component";

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
];