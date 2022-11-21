import React, { useEffect } from "react";
import chooseIcon from "../../utils/chooseIcon";
import {
	ToastWrapper,
	Text,
	Icon,
	Title,
	TextContainer,
	CloseButton,
} from "./style";
import { CgClose } from "react-icons/cg";
import ToastPortal from "../ToastPortal/ToastPortal";

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
			case "warning":
				title = "Warning";
				break;
			case "danger":
				title = "Danger";
				break;
			case "info":
				title = "Info";
				break;
			case "success":
			default:
				title = "Success";
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

Toast.defaultProps = {
	variant: "success",
	text: null,
	title: null,
	color: null,
	iconAndTextColor: null,
	position: "bottom-right",
	spacing: "10",
	timer: null,
	animation: "slideRight",
};

export default React.memo(Toast);
