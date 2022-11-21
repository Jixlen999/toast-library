import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import chooseIcon from '../../utils/chooseIcon';
import {
  ToastWrapper,
  Text,
  Icon,
  Title,
  TextContainer,
  CloseButton,
} from './style';
import { CgClose } from 'react-icons/cg';
import ToastPortal from '../ToastPortal';

const Toast = ({
  id,
  text,
  variant,
  title,
  color,
  iconAndTextColor,
  spacing,
  animation,
  deleteToastById,
  position,
  timer,
}) => {
  if (text === null && title === null) {
    switch (variant) {
      case 'warning':
        title = 'Warning';
        break;
      case 'danger':
        title = 'Danger';
        break;
      case 'info':
        title = 'Info';
        break;
      case 'success':
      default:
        title = 'Success';
        break;
    }
  }
  const deleteToast = () => {
    deleteToastById(id);
  };

  useEffect(() => {
    if (timer) {
      const timeout = setTimeout(() => deleteToastById(id), timer * 1000);
      return () => clearTimeout(timeout);
    }
  }, [timer, deleteToastById, id]);

  return (
    <ToastPortal position={position}>
      <ToastWrapper
        iconAndTextColor={iconAndTextColor}
        variant={variant}
        color={color}
        spacing={spacing}
        animation={animation}
      >
        <Icon>{chooseIcon(variant)}</Icon>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>

        <CloseButton onClick={deleteToast}>
          <CgClose />
        </CloseButton>
      </ToastWrapper>
    </ToastPortal>
  );
};

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  iconAndTextColor: PropTypes.string,
  spacing: PropTypes.string,
  animation: PropTypes.string,
  deleteToastById: PropTypes.func.isRequired,
  position: PropTypes.string,
  timer: PropTypes.number,
};

Toast.defaultProps = {
  text: null,
  variant: 'success',
  title: null,
  color: null,
  iconAndTextColor: null,
  spacing: '10',
  animation: 'slideRight',
  position: 'bottom-right',
  timer: null,
};

export default React.memo(Toast);
