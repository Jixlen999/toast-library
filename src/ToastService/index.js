class ToastService {
  constructor() {
    if (typeof ToastService.toastService === 'object') {
      return ToastService.toastService;
    }
    this.toasts = [];
    this.lastId = 0;
    ToastService.toastService = this;
    return this;
  }

  getToasts() {
    return this.toasts;
  }
  deleteToastById(id) {
    this.toasts = this.toasts.filter((el) => el.id !== id);
    return this.toasts;
  }

  createToast(toast) {
    if (this.toasts.length < 3) {
      this.toasts = [...this.toasts, { id: this.lastId, ...toast }];
      this.lastId++;
      return { ...this.toasts[this.toasts.length - 1] };
    }
    return null;
  }
}

let toastService = new ToastService();

export default toastService;
