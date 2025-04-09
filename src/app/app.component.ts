import { NgClass, NgOptimizedImage } from '@angular/common';
import {Component, signal} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  standalone: true,
  styles: [
    `
      .header-nav-bar {
        background-color: #0e2b1e;
        color: black;
      }
    `,
  ],
})
export class AppComponent {
  isOpen = signal(false);

  constructor(private router: Router) {}

  isActivePage(route: string): boolean {
    return this.router.url == route;
  }

  toggleMenu(){
    this.isOpen.update(state => !state);
  }
}
