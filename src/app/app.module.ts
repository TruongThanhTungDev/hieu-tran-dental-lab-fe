import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LayoutComponent } from "./layout/layout.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule, registerLocaleData } from "@angular/common";
import { LoginComponent } from "./pages/admin/login/login.component";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { NZ_I18N, vi_VN } from "ng-zorro-antd/i18n";
import vi from '@angular/common/locales/vi';
registerLocaleData(vi);
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
})
export class AppModule {}