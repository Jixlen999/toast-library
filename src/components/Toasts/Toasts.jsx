import React, { useEffect, useMemo, useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ToastPortal from '../ToastPortal/ToastPortal';
import ToastItem from '../ToastItem/ToastItem';

const Toasts = ({ toasts }) => {
  const [toastsArr, setToastsArr] = useState([]);
  useEffect(() => {
    if (toasts.length <= 3) {
      setToastsArr(toasts);
    }
  }, [toasts]);
  const toastsArray = useMemo(
    () => toastsArr.map((t) => <ToastItem key={t.id} {...t} />),
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
