function chooseTitle(variant) {
  switch (variant) {
    case 'warning':
      return 'Warning';
    case 'danger':
      return 'Danger';
    case 'info':
      return 'Info';
    case 'success':
    default:
      return 'Success';
  }
}

export default chooseTitle;
