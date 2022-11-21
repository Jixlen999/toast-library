import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CgClose } from 'react-icons/cg';
import chooseIcon from '@utils/chooseIcon';
import chooseTitle from '@utils/chooseTitle';
import ToastPortal from '@components/ToastPortal';
import {
  ToastWrapper,
  Text,
  Icon,
  Title,
  TextContainer,
  CloseButton,
} from './style';

const Toast = ({
  id,
  text,
  variant,
  title,
  bgColor,
  iconAndTextColor,
  spacing,
  animation,
  deleteToastById,
  position,
  timer,
}) => {
  if (text === null && title === null) {
    title = chooseTitle(variant);
  }
  const deleteToast = () => {
    deleteToastById(id);
  };

  useEffect(() => {
    if (timer) {
      const timeout = setTimeout(() => deleteToastById(id), timer * 1000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <ToastPortal position={position}>
      <ToastWrapper
        iconAndTextColor={iconAndTextColor}
        variant={variant}
        bgColor={bgColor}
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
