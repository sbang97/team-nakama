import React, { Component } from "react";
import classnames from "classnames";

import "./style.css";

export default class Footer extends Component {
	render() {
		return(
			<footer className="d-flex align-items-center mt-5 py-0">
				<img src="https://ischool.uw.edu/fb-300x300.png" alt="ischool" id="ischool-logo" height="65px" width="65px"/>
				<div className="nakama">Created by Team Nakama</div>
				<div>Informatics Capstone 2019</div>
			</footer>
		);
	}
}
