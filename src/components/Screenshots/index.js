import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import kevin from '../About/img/kevin.jpg'
import "./style.css";

export default class Screenshots extends Component {
	render() {
		return (
			<div className="screenshots-div">
                <Container>
                    <h1 className="screenshots-title">Screenshots</h1>
                    <Row>
                        <Col>
                            <Image src={kevin} rounded/>
                        </Col>
                        <Col>
                            <Image src={kevin} rounded/> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={kevin} rounded/>
                        </Col>
                        <Col>
                            <Image src={kevin} rounded/> 
                        </Col>
                    </Row>
                </Container>
			</div>
		);
	}
}
