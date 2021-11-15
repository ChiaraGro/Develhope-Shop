import { IProduct } from './../../../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
