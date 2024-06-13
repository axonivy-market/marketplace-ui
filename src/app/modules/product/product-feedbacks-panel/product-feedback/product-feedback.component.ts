import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Feedback } from '../../../../shared/models/feedback.model';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-product-feedback',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './product-feedback.component.html',
  styleUrl: './product-feedback.component.scss'
})
export class ProductFeedbackComponent {
  @Input() feedback!: Feedback;
  @ViewChild('content') contentElement!: ElementRef;

  isExpanded: boolean = false;
  maxLines: number = 6;
  showToggle = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.showToggle = this.contentElement.nativeElement.scrollHeight > this.contentElement.nativeElement.clientHeight;
    console.log("scrollHeight: " + this.contentElement.nativeElement.scrollHeight);
    console.log("clientHeight: " + this.contentElement.nativeElement.clientHeight);
    this.cdr.detectChanges();
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
