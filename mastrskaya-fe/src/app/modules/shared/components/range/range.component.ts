import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'mst-range',
  templateUrl: './range.component.html',
})
export class RangeComponent implements OnChanges{

  @ViewChild('rangeInput')
  rangeInput: ElementRef;
  @Input() min: number;
  @Input() max: number;
  @Input() value: number;
  @Input() step: number;
  _valueLeft: string;

  _change(): void {
    let newValue = (this.value - this.min) * 100 / (this.max - this.min),
        newPosition = -10 - newValue * 0.15;
    this._valueLeft = `calc(${newValue}% + (${newPosition}px))`;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
