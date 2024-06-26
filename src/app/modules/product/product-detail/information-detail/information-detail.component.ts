import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-information-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './information-detail.component.html',
  styleUrl: './information-detail.component.scss'
})
export class InformationDetailComponent {
  @Input()
  productDetail: any;
}
