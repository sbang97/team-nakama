import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div className={classnames("App", this.props.className)}>
			</div>
		);
	}
}
