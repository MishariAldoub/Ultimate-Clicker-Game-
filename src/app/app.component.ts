import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickButtonComponent } from './click-button/click-button.component';
import { ClickPtsComponent } from './click-pts/click-pts.component';
import { CoinsComponent } from "./coins/coins.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClickButtonComponent, ClickPtsComponent, CoinsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clicker-game';
}
