import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { LayoutRoutes } from "./layout.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePageComponent } from "../pages/home/home.component";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCarouselModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
})
export class LayoutModule {}