import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './about-us.component.html',
  standalone: true,
  styles: ``
})
export class AboutUsComponent {

}
