import { IProduct } from './../../../../shared/models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() selectedProduct = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product: IProduct){
    this.selectedProduct.emit(product);
  }
}
