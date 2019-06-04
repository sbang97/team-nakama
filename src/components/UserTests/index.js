import React, { Component } from "react";
import "typeface-barlow";
import trees from './img/trees.png';
import "./style.css";


export default class UserTests extends Component {
  render() {
    return (
      <div>
        <div className="page">

          <h1 className="huge my-3">Professional Feedback</h1>
          <br/>
          <div className="d-flex mb-4 pt-5 justify-content-center opaque">

            <div><img src="https://tinyurl.com/y5tsld72" alt="dr. barr jeffrey" className="profile-picture" /></div>
            <div>
              <p className="quote"> Dr. Anthony Barr-Jeffrey</p>
              <p id="job-title"> Licensed Mental Health Professional</p>
              <br/>
            </div>
          </div>
          <blockquote className="opaque py-5" id="barr-jeffrey">"You guys have put a lot of work into this project for sure and you should be proud. I am <strong className="positive"  >fascinated</strong> with you guys and what you are doing. Trust your vision!"</blockquote>
          <br/>
          <div className="opaque">
            <ul>
              <li>Worked closely to create the script</li>
              <li>Contributed feedback on scenarios and decisions</li>
              <li>Educated developers on mental health intricacies</li>
            </ul>
          </div>
          <br/>
        </div>
        <div className="feedback-page">
          <h1 className="huge my-3">User Tests and Feedback</h1>
          <br/>
          <div className="user-feedback p-3 opaque">
            <h2>High schoolers across Seattle and Bellevue say...</h2>
            <ul>
              <li><h2>Over <span className="positive">90%</span> of users say they or someone they know resonate <span className="emphasis">strongly</span> with Edward</h2></li>
              <li><h2>Script is <span className="emphasis magenta">realistic, novel, understandable, comprehensive, relatable</span></h2></li>
              <li><h2>Gameplay is <span className="emphasis blue">intuitive, fun, simple, easy to learn</span></h2></li>
            </ul>
          </div>
          <img
          src={trees}
          alt="trees"
          className="ml-5 mt-5"
          />
        </div>
      </div>
    );

  }
}
