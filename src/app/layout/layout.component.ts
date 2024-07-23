import { Component } from "@angular/core";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  listMenu = [
    {
      name: 'Trang chủ',
      path: '',
    },
    {
      name: 'Giới thiệu',
      path: 'gioi-thieu'
    },
    {
      name: 'Sản phẩm',
      path: 'san-pham'
    },
    {
      name: 'Bảo hành',
      path: 'bao-hanh',
    },
    {
      name: 'Liên hệ',
      path: 'lien-he'
    }
  ]
  constructor() {}
}