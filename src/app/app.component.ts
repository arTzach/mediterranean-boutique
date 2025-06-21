import {AfterViewInit, Component} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {OliveOilComponent} from './pages/olive-oil/olive-oil.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {TranslateService} from '@ngx-translate/core';
import {ConfigService} from './config/config.service';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, OliveOilComponent, AboutUsComponent, ContactUsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styles: '',
})
export class AppComponent implements AfterViewInit {
  protected activeComponent: string = 'home';

  constructor(private translate: TranslateService, private configService: ConfigService) {
    const defaultLang = this.configService.get("defaultLanguage")
    this.translate.addLangs(
      this.configService.get("languages")
    );
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
  ngAfterViewInit(): void {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeComponent = entry.target.id;
          }
        }, {threshold: 1});
      })
      document.querySelectorAll("section").forEach((el) => {
        observer.observe(el);
      })

    }

  isActivePage(route: string): boolean {
    return this.activeComponent === route;
  }

  scrollToElement(id: string){
    const element = document.getElementById(id);
    this.activeComponent = id;
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
  }
}
