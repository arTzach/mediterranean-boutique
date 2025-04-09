import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  standalone: true,
  styles: ``
})
export class AboutUsComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update((state) => !state);
  }
}
