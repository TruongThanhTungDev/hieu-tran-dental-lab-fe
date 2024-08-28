import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { LayoutRoutes } from "./layout.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePageComponent } from "../pages/home/home.component";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { TraCuuBaoHanh } from "../pages/tra-cuu-bao-hanh/tra-cuu-bao-hanh.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCarouselModule,
    NzInputModule,
    CarouselModule,
    NzIconModule,
    NzCollapseModule,
  ],
  declarations: [HomePageComponent, TraCuuBaoHanh],
  providers: [],
})
export class LayoutModule {}