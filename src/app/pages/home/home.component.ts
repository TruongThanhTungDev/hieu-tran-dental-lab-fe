import { Component } from "@angular/core";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
  listHeaderCarousel: any[] = [
    '../../../assets/images/carousel/header-1.jpg',
    '../../../assets/images/carousel/58534.jpg',
    '../../../assets/images/carousel/58534.jpg',
    '../../../assets/images/carousel/58534.jpg',
  ];
}