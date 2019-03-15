import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import background from './img/background.jpg';
import simon from '../About/img/simon.jpg';
import joe from '../About/img/joe.jpg';
import sunny from '../About/img/sunny.jpg';
import Contact from '../Contact';
import Screenshots from '../Screenshots';
import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div>
			<h1 className="landing-title">Nevermind</h1>
				<Carousel>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src={simon}
						alt="First slide"
						/>
						<Carousel.Caption>
							<p>with a full week ahead of him. Edward is determined to do everything that he can to complete everything he needs to. As the week continues blah blah blah blah blah blah blajh blah blah blah blah</p>
						</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src={joe}
							alt="Second slide"
							/>

							<Carousel.Caption>
								<p>with a full week ahead of him. Edward is determined to do everything that he can to complete everything he needs to. As the week continues blah blah blah blah blah blah blajh blah blah blah blah</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src={sunny}
							alt="Third slide"
							/>

							<Carousel.Caption>
								<p>with a full week ahead of him. Edward is determined to do everything that he can to complete everything he needs to. As the week continues blah blah blah blah blah blah blajh blah blah blah blah</p>
							</Carousel.Caption>
						</Carousel.Item>
				</Carousel>
				<Screenshots/>
				<Contact/>
			</div>
		);
	}
}
