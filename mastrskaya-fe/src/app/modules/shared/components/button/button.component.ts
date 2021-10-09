import {
  Component,
  Input
} from '@angular/core';
import {
  ButtonKind,
  buttonKinds,
  ButtonType
} from './button-type.constant';

@Component({
  selector: 'mst-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() kind: ButtonKind = 'link';
  @Input() type: ButtonType = 'button';
  @Input() classList: string;

  _kinds = buttonKinds;

  test(): void {
    console.log('tets');
  }
}
