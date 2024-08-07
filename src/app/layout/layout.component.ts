import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isShowCarousel = true
  listMenu = [
    {
      name: 'Trang chủ',
      path: '',
    },
    {
      name: 'Giới thiệu',
      path: 'gioi-thieu',
    },
    {
      name: 'Sản phẩm',
      path: 'san-pham',
    },
    {
      name: 'Bảo hành',
      path: 'bao-hanh',
    },
    {
      name: 'Liên hệ',
      path: 'lien-he',
    },
  ];
  constructor(private router: Router) {}
  traCuu() {
    this.router.navigate(['/tra-cuu-bao-hanh']);
  }
  hideCarousel() {
    this.isShowCarousel = false
  }
}