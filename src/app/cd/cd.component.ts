import { Component, Input } from '@angular/core';
import { Cd } from '../../model/cd';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() Cd!: Cd;

  addCd() {
    this.Cd.quantity++;
  }
}
