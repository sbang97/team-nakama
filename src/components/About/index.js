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
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class About extends Component {
	render() {
		return (
			<div className={classnames("About", this.props.className)}>
				<div className='about-section text-white'>
					<h1 className='about-header'>
						About
					</h1>
					<p className='about-paragraph'>
					The progression of mental health awareness has pushed the topic in a space of public interest. We now understand that everybody deals with mental issues time to time and that nobody is alone in this struggle. Despite the increase of advocacy for mental health conditions, we feel that there are still very limited resources available in our day-to-day lives. Employee benefits in the workforce often don’t cover mental health related issues, and school curriculums don’t prepare children personally navigating mental health crises.   We feel that helping younger audiences build their moral identity with mental health in mind can prepare children for later obstacles of adulthood. We want to build an interactive, online resource, aimed at younger children, that both educates children on mental health and encourages children to navigate mental health issues in a way that is positive and informing.

					</p>
				</div>
				<div className='mission-section text-white'>
					<h1 className='about-header'>
						Our Mission
					</h1>
					<p className='about-paragraph'>
					Nevermind is a game that aims to be much more than just a game with gripping narrative and engaging gameplay. Our mission as a development team is to promote the importance of self care and to spread awareness of how poor mental health can affect a person. In a society where mental health issues are continuing to worsen due to all the focus on optimizing one’s life, 

					We want to make it completely clear that our story of Edward is not a representation of anyone else’s story with mental health. 

					</p>
				</div>
				<div className='bio-section'>
					<h2 className='bio-header'>Who we are</h2>
					<Container>
						<Row>
							<Col>
								<Image src={sunny} roundedCircle />
								<p className="bio-description">
								I am a senior in the Informatics program studying Human Computer Interaction. I am an aspiring project manager that hopes to bring together design and technology in a way that can impact the lives of other people. I want to use these skills and passions of mine to start making changes on the issue of mental health.
								</p>
							</Col>
							<Col>
								<Image src={joe} roundedCircle />
								<p className="bio-description">
								Hi, my name is Joseph and I’m currently a senior in the Informatics program pursuing a career in software development. I’m passionate about using my skills to bring real value to society. Mental health is something that means a lot to me personally, and I’m excited to explore how my technical skills can be used to help tackle this problem.
								</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<Image src={kevin} roundedCircle />
								<p className="bio-description">
								Hi, my name is Kevin and I am a senior student in the Informatics program at the University of Washington. I am currently studying Human-Computer Interaction and Web Development. In my spare time, I am an instructor in digital audio production and a competitive Super Smash Bros. player.
								</p>
							</Col>
							<Col>
								<Image src={simon} roundedCircle />
								<p className="bio-description">
									Hello! My name is Simon Bang. I am a senior in Informatics. I love problem solving on all scales but especially real world problems that hinder people. The issue of mental health is one that strikes close to home through experiences with friends and family.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}
