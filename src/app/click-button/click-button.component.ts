import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameData } from '../../data/game-data';

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.css',
})
export class ClickButtonComponent {
  @Input() click!: GameData;
  @Output() clickButton = new EventEmitter<GameData>();
  clickCount = 0;
  onClick() {
    this.clickCount++;
    // this.click.number = this.clickCount;
    this.clickButton.emit(this.click);
    console.log('clicked!');
  }
}
