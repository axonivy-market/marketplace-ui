import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { ProductService } from '../../../modules/product/product.service';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgbRating],
  providers: [ProductService],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() isReadOnly: boolean = false;
  @Input() starClass: string = '';
  @Input() filledStarClass: string = '';
}
