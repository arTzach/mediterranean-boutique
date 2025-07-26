import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  imports: [
    DatePipe
  ],
  templateUrl: './contact-us.component.html',
  styles: ``
})
export class ContactUsComponent {

  protected readonly Date = Date;
}
