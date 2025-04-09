import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameData } from '../../data/game-data';
@Component({
  selector: 'app-click-pts',
  standalone: true,
  imports: [],
  templateUrl: './click-pts.component.html',
  styleUrl: './click-pts.component.css',
})
export class ClickPtsComponent {
  // @Input() click!: GameData;
  @Output() clickButton = new EventEmitter<GameData>();
  // clickCount = 0;

  onClick() {
    // this.clickCount++;
    // this.click.number = this.clickCount;
    // this.clickButton.emit(this.click);
    // console.log(this.clickCount);
  }
}
