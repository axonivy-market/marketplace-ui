import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowFeedbacksDialogComponent } from '../../modules/product/product-detail/show-feedbacks-dialog/show-feedbacks-dialog.component';
import { AddFeedbackDialogComponent } from '../../modules/product/product-detail/product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';
import { Feedback } from '../models/feedback.model';
import { SuccessDialogComponent } from '../../modules/product/product-detail/product-feedbacks-panel/add-feedback-dialog/success-dialog/success-dialog.component';

@Injectable()
export class AppModalService {

  private modalService = inject(NgbModal);

  openShowFeedbacksDialog(productId: string, productName: string) {
    const showFeedbackDialog = this.modalService.open(ShowFeedbacksDialogComponent, { centered: true, modalDialogClass: 'show-feedbacks-modal-dialog' });
    showFeedbackDialog.componentInstance.productId = productId;
    showFeedbackDialog.componentInstance.productName = productName;
  }

  openAddFeedbackDialog(feedback: Feedback, productId: string, productName: string) {
    const addFeedbackModal = this.modalService.open(
      AddFeedbackDialogComponent,
      {
        fullscreen: 'md',
        centered: true,
        modalDialogClass: 'add-feedback-modal-dialog'
      }
    );
    addFeedbackModal.componentInstance.feedback = feedback;
    addFeedbackModal.componentInstance.productId = productId;
    addFeedbackModal.componentInstance.productName = productName;
    return addFeedbackModal.result;
  }

  openSuccessDialog() {
    this.modalService.open(
      SuccessDialogComponent,
      {
        fullscreen: 'md',
        centered: true,
        modalDialogClass: 'add-feedback-modal-dialog'
      }
    );
  }
}
