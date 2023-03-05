import { Component } from 'react';
import Headshot from "../assets/1.jpg";
import "./AboutStyles.css";

class AboutItem extends Component {
    render(){
        return (
        <div className="about-section">
            <div className="myImage">
                <img alt="img"src={this.props.img1}/>
            </div>
            <div className="about-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
        </div>
        )
    };
};
export default AboutItem;