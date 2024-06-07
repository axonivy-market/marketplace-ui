import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-comment',
  standalone: true,
  imports: [],
  templateUrl: './product-comment.component.html',
  styleUrl: './product-comment.component.scss'
})
export class ProductCommentComponent {
  @Input() comment!: any;
}
