import React, { useEffect, useMemo, useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ToastPortal from '../ToastPortal/ToastPortal';

const Toasts = ({ toasts }) => {
  const [toastsArr, setToastsArr] = useState([]);
  useEffect(() => {
    if (toasts.length <= 3) {
      setToastsArr(toasts);
    }
  }, [toasts]);
  const toastsArray = useMemo(
    () => toastsArr.map((el) => el && <div key={el.id}>{el.toast}</div>),
    [toastsArr],
  );

  return (
    <>
      <ErrorBoundary>
        <ToastPortal>{toastsArray}</ToastPortal>
      </ErrorBoundary>
    </>
  );
};

export default React.memo(Toasts);
