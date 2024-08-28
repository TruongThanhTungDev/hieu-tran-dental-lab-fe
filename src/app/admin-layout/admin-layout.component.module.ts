import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from "../pages/admin/home/home.component";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NZ_I18N, vi_VN } from "ng-zorro-antd/i18n";
import en from '@angular/common/locales/en';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from "ng-zorro-antd/spin";
registerLocaleData(en);
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzCollapseModule,
    NzPaginationModule,
    NzSpinModule
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class AdminLayoutModule {}
