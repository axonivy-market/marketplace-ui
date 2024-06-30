import { AfterViewInit, Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../../../auth/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [TranslateModule],
  providers: [AuthService],
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent {

  activeModal = inject(NgbActiveModal);

  private authService = inject(AuthService);
  
  displayName: string = '';

  ngOnInit() {
    const displayName = this.authService.getDisplayName();
    if (displayName) {
      this.displayName = displayName;
    }
  }
}