import { createPortal } from 'react-dom';

const ToastPortal = ({ children }) => {
  let portal = document.getElementById('toastPortal');
  if (!portal) {
    portal = document.createElement('div');
    portal.id = 'toastPortal';
    document.body.prepend(portal);
  }

  return createPortal(children, portal);
};

export default ToastPortal;
