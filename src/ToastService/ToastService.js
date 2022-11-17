class ToastService {
  constructor() {
    if (typeof ToastService.toastService === 'object') {
      return ToastService.toastService;
    }
    this.toasts = [];
    ToastService.toastService = this;
    return this;
  }

  getToasts() {
    return this.toasts;
  }

  createToast(toast) {
    if (this.toasts.length < 3) {
      this.toasts = [...this.toasts, { id: this.toasts.length, ...toast }];
      return { id: this.toasts.length, ...toast };
    }
    return null;
  }
}

let toastService = new ToastService();

export default toastService;
