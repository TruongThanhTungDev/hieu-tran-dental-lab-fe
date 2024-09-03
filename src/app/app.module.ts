import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
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
import { AddProductPopup } from "./shared/popup/add-product/add-product.component";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { HeadersInterceptor } from "./headers-intercepter";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { AddTopicPopupComponent } from "./shared/popup/add-topic/add-topic.component";
import { AddArticlePopup } from "./shared/popup/add-article/add-article.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
registerLocaleData(vi);
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminLayoutComponent,
    LoginComponent,
    AddProductPopup,
    AddTopicPopupComponent,
    AddArticlePopup,
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
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    NzCarouselModule,
    NzSpinModule,
    NzDrawerModule,
    AngularEditorModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}