const changePosition = (position) => {
	switch (position) {
		case "top-right":
			return { top: "0px", right: "0px" };
		case "top-left":
			return { top: "0px", left: "0px" };
		case "top-center":
			return { top: "0px", left: "calc(50% - 175px)" }; // calc(центр экрана - половина тоста), чтобы было в центре
		case "bottom-right":
			return { bottom: "0px", right: "0px" };
		case "bottom-left":
			return { bottom: "0px", left: "0px" };
		case "bottom-center":
			return { bottom: "0px", left: "calc(50% - 175px)" }; // центр экрана - половина тоста, чтобы было в центре
		default:
			return;
	}
};

export default changePosition;
