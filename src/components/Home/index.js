import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div className={classnames("App", this.props.className)}>
				<div className="project">
					Movie Shopper
				</div>
				<div className="project">
					Web Crawler
				</div>
				<div className="project">
					Bibimbap King
				</div>
				<div className="project">
					Project #4
				</div>
			</div>
		);
	}
}
