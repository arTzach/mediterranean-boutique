import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
