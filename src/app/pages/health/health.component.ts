import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {HealthCardComponent, HealthCardItem} from '../../health-card/health-card.component';

@Component({
  selector: 'app-health',
  imports: [TranslatePipe, HealthCardComponent],
  templateUrl: './health.component.html',
  styles: ``
})
export class HealthComponent {
  healthCardItems: HealthCardItem[] = [
    {
      icon: "icon1",
      title: "Heart Health",
      description: "Rich in monounsaturated fats that support cardiovascular health and help reduce bad cholesterol levels."
    },
    {
      icon: "icon2",
      title: "Antioxidant Power",
      description: "Packed with vitamin E and polyphenols that fight inflammation and protect cells from oxidative stress."
    },
    {
      icon: "icon3",
      title: "Brain Function",
      description: "Studies suggest olive oil consumption may support cognitive function and reduce age-related mental decline."
    },
    {
      icon: "icon4",
      title: "Skin Health",
      description: "Natural moisturizing properties and vitamins help maintain healthy, radiant skin from the inside out."
    }
  ];
}
