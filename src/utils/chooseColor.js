const chooseColor = (variant) => {
  switch (variant) {
    case 'warning':
      return '#f0ad4e';
    case 'danger':
      return '#d9534f';
    case 'info':
      return '#5bc0de';
    case 'success':
    default:
      return '#5cb85c';
  }
};

export default chooseColor;
