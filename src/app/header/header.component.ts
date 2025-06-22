import {Component, inject, input, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  private translate = inject(TranslateService)
  isOpen = signal(false);
  activeComponent = input<string>();
  scrollToElement = output<string>();
  menuItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Olive Oil', href: '#olive-oil', id: 'olive-oil' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: 'Contact Us', href: '#contact-us', id: 'contact-us' },
  ];

  toggleMenu(){
    this.isOpen.update(state => !state);
  }
  isActivePage(id: string): boolean {
    return this.activeComponent() === id;
  }

  changeLang() {
    this.translate.use(this.translate.currentLang === 'en' ? 'dk' : 'en');
  }

  navigateTo(id: string) {
    this.isOpen.set(false);
    this.scrollToElement.emit(id);
  }
}
