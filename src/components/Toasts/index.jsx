import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import toastService from '@src/ToastService';
import ErrorBoundary from '@components/ErrorBoundary';
import Toast from '@components/Toast';

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
      toastsArr.map((t) => {
        const { id } = t;
        return <Toast key={id} {...t} deleteToastById={deleteToastById} />;
      }),
    [toastsArr],
  );

  return (
    <div>
      <ErrorBoundary>{toastsArray}</ErrorBoundary>
    </div>
  );
};

Toasts.propTypes = {
  toasts: PropTypes.array,
};

Toasts.defaultProps = {
  toasts: [],
};

export default React.memo(Toasts);
