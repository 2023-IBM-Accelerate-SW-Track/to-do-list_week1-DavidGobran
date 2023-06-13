import React, { Component } from 'react';
import "./About.css";
import "../assets/profile_pic.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              src={require("../assets/profile_pic.JPG")}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">David Gobran</div>
            <div className="brief_description">
              Hi there, welcome to my page! I'm a Computer Science Junior at Worcester Polytechnic Institute.
            </div>
          </div>
        </div>
      </div>
    )
  }
}