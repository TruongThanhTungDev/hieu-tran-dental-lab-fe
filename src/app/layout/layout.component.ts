import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  placement: NzDrawerPlacement = 'left';
  visible = false;
  isShowCarousel = true;
  code: any;
  listMenu = [
    {
      name: 'Trang chủ',
      path: '/',
    },
    {
      name: 'Giới thiệu',
      path: '/gioi-thieu',
    },
    {
      name: 'Sản phẩm',
      path: '/san-pham',
    },
    {
      name: 'Bảo hành',
      path: '/tra-cuu-bao-hanh',
    },
    {
      name: 'Liên hệ',
      path: '/lien-he',
    },
  ];
  constructor(private router: Router) {}
  traCuu() {
    this.router.navigate(['/tra-cuu-bao-hanh'], {
      queryParams: {
        code: this.code,
      },
    });
  }
  hideCarousel() {
    this.isShowCarousel = false;
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  pushToRouter(path: any) {
    this.router.navigate([path]);
    this.close();
  }
}