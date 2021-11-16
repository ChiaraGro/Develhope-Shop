import { IProduct } from './../../../../shared/models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Output() closedDetail = new EventEmitter();
  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  closeDetail(){
    this.closedDetail.emit();
  }

}
