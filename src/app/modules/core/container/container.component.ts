import { IProduct } from './../../../shared/models/product';
import { PRODUCTS } from './../../../shared/models/mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  products = PRODUCTS;
  product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
