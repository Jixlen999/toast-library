import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '@src/theme';
import Toasts from '@components/Toasts';
import toastService from '@src/ToastService';
import { Button } from './styles';

const Main = (args) => {
  const [toasts, setToasts] = useState([]);

  const clickHandler = (args) => () => {
    toastService.createToast({ ...args });
    setToasts(toastService.getToasts());
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={clickHandler(args)}>Create Toast</Button>
        <Toasts toasts={toasts} />
      </ThemeProvider>
    </div>
  );
};

Main.propTypes = {
  args: PropTypes.object.isRequired,
};

export default React.memo(Main);
