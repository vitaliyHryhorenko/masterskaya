import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'mst-main-title',
  templateUrl: './main-title.component.html',
})
export class MainTitleComponent {
    @Input() title: string;
}
