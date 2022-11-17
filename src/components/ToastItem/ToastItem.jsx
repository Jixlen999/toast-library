import React from 'react';
import { ToastWrapper } from './style';

//Отступы??
const ToastItem = ({
  text,
  variant, //default = success
  // title,
  // text,
  // position, //default = rightBottom
  // timer,
  // color, //default = green
  // padding,
  // animation, //default ..
}) => {
  return (
    <ToastWrapper>
      <h1>{variant}</h1>
      <p>{text}</p>
    </ToastWrapper>
  );
};

export default ToastItem;
