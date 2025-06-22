import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  bgImage = 'url("img/home-olives.webp")';
}
