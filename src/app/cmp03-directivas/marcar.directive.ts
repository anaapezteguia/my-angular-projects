import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMarcar]',
})
export class MarcarDirective implements OnInit {
  @HostBinding('style.backgroundColor') colorFondo: string = '';
  @Input('appMarcar') color: string = 'yellow';

  constructor() {
    console.log('Constructor: ', this.color);
  }

  ngOnInit() {
    console.log('ngOnInit 1: ', this.color);
    if (!this.color) {
      this.color = '#b0e090';
    }
    console.log('ngOnInit 2: ', this.color);
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = '';
  }
}
