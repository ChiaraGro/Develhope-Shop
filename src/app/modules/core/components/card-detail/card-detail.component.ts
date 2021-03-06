import { IProduct } from './../../../../shared/models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  @Input() product?: IProduct;

  @Output() addToCart = new EventEmitter<IProduct>();
  @Output() closedDetail = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeDetail() {
    this.closedDetail.emit();
  }
}
