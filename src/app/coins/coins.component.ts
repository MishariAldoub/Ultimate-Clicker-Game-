import { Component } from '@angular/core';
import { ClickButtonComponent } from '../click-button/click-button.component';

@Component({
  selector: 'app-coins',
  standalone: true,
  imports: [ClickButtonComponent],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.css',
})
export class CoinsComponent {
  points() {
    console.log(ClickButtonComponent);
  }
}
