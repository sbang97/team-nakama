import React, { Component } from "react";
import classnames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import joe from './img/joe.png';
import simon from './img/simon.png';
import sunny from './img/sunny.png';
import kevin from './img/kevin.png';
import owl from './img/owl.png';
import maze from './img/maze.png';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class About extends Component {
	render() {
		return (
			<div className={classnames("About", this.props.className)}>
				<div className="d-flex flex-column about-page">
					<div className='about-section text-white'>
						<h1 className='about-header'>
							About
						</h1>
						<p className='about-paragraph'>
							Everyone has mental health, so why don't we talk about it? <br/>
							Nevermind is trying to change that.	Nevermind is a game that aims to be much more than just a game with gripping narrative and engaging gameplay.
						Our mission is to promote self-care and spreading awareness of how mental health can affect you. <br/>
						*DISCLAIMER* In a society with complex mental health issues,
						we recognize that Edward's story is not representative of everyone's journey with mental health.
						</p>
					</div>
					<img
          src={maze}
          alt="maze"
          className="ml-5 mt-5"
          />
				</div>
				<div className='bio-section'>
					<h2 className='bio-header'>Meet the Team</h2>
					<Container>
						<Row>
							<Col>
								<Image src={sunny} roundedCircle />
								<p className="bio-description">
								<span className="name">Sunwoo Kang</span> <br/>
								<i>Senior // Human Computer Interaction</i> <br/>
								I'm an aspiring project manager that hopes to bring together design and technology in a way that can impact the lives of other people. I want to use these skills and passions of mine to tackle mental health.
								</p>
							</Col>
							<Col>
								<Image src={joe} roundedCircle />
								<p className="bio-description">
								<span className="name">Joseph Zhang</span> <br/>
								<i>Senior // Software Development</i> <br/>
								I am passionate about tackling social problems. Mental health is something that means a lot to me personally, and I’m excited to explore how my technical skills can be used to help tackle this problem.
								</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<Image src={kevin} roundedCircle />
								<p className="bio-description">
								<span className="name">Kevin Xu</span> <br/>
								<i>Senior // HCI, Web Development</i> <br/>
								In my spare time, I am an instructor in digital audio production and a competitive Super Smash Bros. player. I main Falco.
								</p>
							</Col>
							<Col>
								<Image src={simon} roundedCircle />
								<p className="bio-description">
								<span className="name">Simon Bang</span> <br/>
								<i>Senior // Software Development</i><br/>
								I love problem solving, especially real-world social problems. Mental health is one that is personal to me, through experiences with friends and family.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}
