import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-installation-count-action',
  standalone: true,
  imports: [],
  templateUrl: './product-installation-count-action.component.html',
  styleUrl: './product-installation-count-action.component.scss'
})
export class ProductInstallationCountActionComponent {
  @Input()
  currentInstallationCount!: number;
}
