import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import toastService from '@src/ToastService';
import ErrorBoundary from '@components/ErrorBoundary';
import Toast from '@components/Toast';
import { ToastsWrapper } from './style';

const Toasts = ({ toasts }) => {
  const [toastsArr, setToastsArr] = useState([]);

  useEffect(() => {
    setToastsArr(toasts);
  }, [toasts]);

  const deleteToastById = (id) => {
    setToastsArr(toastService.deleteToastById(id));
  };

  const toastsArray = useMemo(
    () =>
      toastsArr.map((t) => (
        <Toast key={t.id} {...t} deleteToastById={deleteToastById} />
      )),
    [toastsArr],
  );

  return (
    <ToastsWrapper>
      <ErrorBoundary>{toastsArray}</ErrorBoundary>
    </ToastsWrapper>
  );
};

Toasts.propTypes = {
  toasts: PropTypes.array,
};

Toasts.defaultProps = {
  toasts: [],
};

export default React.memo(Toasts);
