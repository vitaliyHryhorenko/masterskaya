import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'mst-card-item',
  templateUrl: './card-item.component.html',
})
export class CardItemComponent {
  @Input() card: {name: string; items: string[]};
}
