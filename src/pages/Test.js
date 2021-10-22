import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Text, Grid, Image, Button } from "../elements/index";
import novelImage from "../novelImage.png";

const Test = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
};

const Nemo = styled.div`
    width: 50px;
    height: 50px;
    background-color: blue;
`;

export default Test;
