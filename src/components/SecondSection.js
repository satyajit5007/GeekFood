import './SecondSection.css'
import Button from './Button.js'
import imageOfHouse from "../assets/images/imageOfHouse.avif"

function SecondSection(){
    return(
        <div id='second-section'>
            <div></div>
            <div id='second-section-gray-div'></div>
            <div id='second-section-content'>
                <img src={imageOfHouse} alt = "image of a house"/>
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <Button padding = "0.625rem 1rem" borderRadius = "0.3rem" backgroundColor = "blue" color = "#ffffff" hoverBackgroundColor = "#ffffff" hoverColor = "blue">Get In Touch</Button>
                </div>
            </div>
        </div>
    )
};

export default SecondSection;