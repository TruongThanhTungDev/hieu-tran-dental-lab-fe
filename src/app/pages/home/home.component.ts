import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
  listHeaderCarousel: any[] = [
    '../../../assets/images/carousel/header-1.jpg',
    '../../../assets/images/carousel/header-2.jpg',
    '../../../assets/images/carousel/58534.jpg',
    '../../../assets/images/carousel/58534.jpg',
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 16,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  isShowCarousel = true;
  code: any;
  constructor(private router: Router) {}
  traCuu() {
    this.router.navigate(['/tra-cuu-bao-hanh'], {
      queryParams: {
        code: this.code
      }
    });
  }
}