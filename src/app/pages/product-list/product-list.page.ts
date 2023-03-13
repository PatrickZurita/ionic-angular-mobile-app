import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Camisa de algodón',
      price: 25.99,
      image:
        'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C81mYIxmZLrL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
    },
    {
      id: 2,
      name: 'Pantalón de mezclilla',
      price: 45.99,
      image: 'assets/420clothe.png',
    },
    {
      id: 3,
      name: 'Chamarra de cuero',
      price: 99.99,
      image:
        'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91MS16cP0bL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX425_.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
