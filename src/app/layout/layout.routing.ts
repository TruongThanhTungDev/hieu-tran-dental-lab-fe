import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home/home.component";
import { LoginComponent } from "../pages/admin/login/login.component";
import { TraCuuBaoHanh } from "../pages/tra-cuu-bao-hanh/tra-cuu-bao-hanh.component";

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'tra-cuu-bao-hanh',
    component: TraCuuBaoHanh,
  },
];