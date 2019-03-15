import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import characters1 from '../Home/img/characters1.png';
import characters2 from '../Home/img/characters2.png';
import edward from '../Home/img/edward.jpg';
import room from '../Home/img/room.jpg';
import "./style.css";

export default class Screenshots extends Component {
	render() {
		return (
			<div className="screenshots-div">
                <Container>
                    <h1 className="screenshots-title">Initial Sketches</h1>
                    <Row>
                        <Col>
                            <Image src={edward} rounded/>
                        </Col>
                        <Col>
                            <Image src={room} rounded className="characters"/> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={characters1} rounded/>
                        </Col>
                        <Col>
                            <Image src={characters2} rounded/> 
                        </Col>
                    </Row>
                </Container>
			</div>
		);
	}
}
