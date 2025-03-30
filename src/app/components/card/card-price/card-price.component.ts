import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  standalone: false,
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss']
})
export class CardPriceComponent {
  @Input() gamePrice: string = "";
}
