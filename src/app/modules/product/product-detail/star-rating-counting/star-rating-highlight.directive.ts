import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[starRatingHighlight]',
  standalone: true
})
export class StarRatingHighlightDirective {

  @Input() percent: string = "";

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.width(this.percent);
  }

  private width(percent: string) {
    this.el.nativeElement.style.width = percent + "%";
  }

}
