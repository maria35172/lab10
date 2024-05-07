import React from "react";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";

function Section(props) {
    const images = [f3, f4, f5]

    return (
        <div className="Section__wrapper">
            <img className="Section__image" src={images[props.imageNumber - 1]} alt="Картинка" />
            <h2 className="Section__title">{props.title}</h2>
            <p className="Section__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit{props.ending}</p>
        </div>
    )
}

export default Section;