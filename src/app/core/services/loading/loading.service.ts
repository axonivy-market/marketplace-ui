import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isShow = signal(false);
  isLoading = computed(() => this.isShow());

  constructor() {}

  show() {
    this.isShow.set(true);
  }

  hide() {
    this.isShow.set(false);
  }
}
