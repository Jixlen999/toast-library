import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return (
				<div>
					<h1>Oops, somebody stole your notification :o</h1>
				</div>
			);
		}

		return children;
	}
}

ErrorBoundary.propTypes = PropTypes.node.isRequired;

export default ErrorBoundary;
