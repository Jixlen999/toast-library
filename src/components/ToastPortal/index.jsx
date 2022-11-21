import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import changePosition from '../../utils/changePosition';

const ToastPortal = ({ children, position }) => {
  let portal = document.getElementById(`toastPortal-${position}`);

  if (!portal) {
    portal = document.createElement('div');
    portal.id = `toastPortal-${position}`;
    position = changePosition(position);
    portal.style.width = 'auto';
    portal.style.height = 'auto';
    document.body.prepend(portal);
    portal.style.position = 'fixed';
    portal.style.right = position.right ? position.right : null;
    portal.style.left = position.left ? position.left : null;
    portal.style.bottom = position.bottom ? position.bottom : null;
    portal.style.top = position.top ? position.top : null;
  }
  return createPortal(children, portal);
};

ToastPortal.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
};

export default ToastPortal;
