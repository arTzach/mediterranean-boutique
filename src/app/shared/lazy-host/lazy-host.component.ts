import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-lazy-host',
  imports: [
    NgComponentOutlet
  ],
  template: `
    <div #triggerElement></div>
    @if(isVisible) {
      <ng-container *ngComponentOutlet="component">
      </ng-container>
    }
  `,
  styles: ``
})
export class LazyHostComponent implements AfterViewInit {
  @Input() component!: any;
  @ViewChild('triggerElement') triggerElement!: ElementRef;
  isVisible = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(( [entry]) => {
      if(entry.isIntersecting) {
        this.isVisible = true;
        observer.unobserve(this.triggerElement.nativeElement);
      }
    })
    observer.observe(this.triggerElement.nativeElement);
  }
}
