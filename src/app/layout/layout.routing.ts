import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home/home.component";
import { LoginComponent } from "../pages/admin/login/login.component";
import { TraCuuBaoHanh } from "../pages/tra-cuu-bao-hanh/tra-cuu-bao-hanh.component";
import { GioiThieuComponent } from "../pages/gioi-thieu/gioi-thieu.component";
import { SanPhamComponent } from "../pages/san-pham/san-pham.component";

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'tra-cuu-bao-hanh',
    component: TraCuuBaoHanh,
  },
  {
    path: 'gioi-thieu',
    component: GioiThieuComponent,
  },
  {
    path: 'san-pham',
    component: SanPhamComponent,
  },
];