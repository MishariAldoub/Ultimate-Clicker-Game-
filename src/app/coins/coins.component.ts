import { Component, Input, Output } from '@angular/core';
import { ClickButtonComponent } from '../click-button/click-button.component';

@Component({
  selector: 'app-coins',
  standalone: true,
  imports: [],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.css',
})
export class CoinsComponent {

  @Input() clickCountCoins?: number

}
