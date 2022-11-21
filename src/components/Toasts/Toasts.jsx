import React, { useEffect, useMemo, useState } from "react";
import toastService from "../../ToastService/ToastService";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Toast from "../Toast/Toast";
import { ToastsWrapper } from "./style";

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
		[toastsArr]
	);

	return (
		<ToastsWrapper>
			<ErrorBoundary>{toastsArray}</ErrorBoundary>
		</ToastsWrapper>
	);
};

Toasts.defaultProps = {
	toasts: [],
};

export default React.memo(Toasts);
