import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const chooseIcon = (variant) => {
	switch (variant) {
		case "warning":
			return <BiError />;
		case "danger":
			return <IoMdCloseCircleOutline />;
		case "info":
			return <BiInfoCircle />;
		case "success":
		default:
			return <BiCheckCircle />;
	}
};

export default chooseIcon;
