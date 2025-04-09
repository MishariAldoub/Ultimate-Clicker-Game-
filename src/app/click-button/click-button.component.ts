import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameData } from '../../data/game-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.css',
})
export class ClickButtonComponent {
  // @Input() click!: GameData;
  // @Output() clickButton = new EventEmitter<GameData>();
  // @Input() message?: string
  // message = "yert"
  @Output() clickCount = 0;
  @Output() Coins = 0
  // isButtonDisabled = false
  onClick() {
    this.clickCount++;
    this.Coins++
    // this.click.number = this.clickCount;
    // this.clickButton.emit(this.click);
    if (this.clickCount > 10 ){
      this.clickCount+=2
    }
    // console.log(this.clickCount)
  }


useUpgrade(){
this.Coins -=10
//   if (this.Coins > 5)
//   {
//     // this.Coins - 
//     console.log("new coins: ", this.Coins)
//     // this.isButtonDisabled = true
//   }
//   else {
//     // this.isButtonDisabled = false
//   }
// }

}
}
