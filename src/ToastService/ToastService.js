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
    console.log(this.toasts);
  }
  setNewToast(toast) {
    this.toasts.push(toast);
  }
}

let toastService = new ToastService();

export default toastService;
