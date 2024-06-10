import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Feedback } from '../../../../shared/models/feedback.model';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-product-feedback',
  standalone: true,
  imports: [CommonModule],
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
    // Check if the content overflows after view initialization
    this.showToggle = this.contentElement.nativeElement.scrollHeight > this.contentElement.nativeElement.clientHeight;
    // Mark for change detection after setting the showToggle value
    this.cdr.detectChanges();
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
