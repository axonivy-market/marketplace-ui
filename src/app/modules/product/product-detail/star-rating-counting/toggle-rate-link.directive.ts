import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggleRateLink]'
})
export class ToggleRateLinkDirective {
  @Input() modalTarget!: string;
  @Input() clickHandler!: () => void;
  @Input() useModal!: boolean;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    if (this.useModal) {
      const modalElement = document.querySelector(this.modalTarget) as HTMLElement;
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    } else {
      if (this.clickHandler) {
        this.clickHandler();
      }
    }
  }
}
