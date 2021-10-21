import React from "react";
import styled from "styled-components";
import { Text, Grid, Image, Button } from "../elements/index";
import novelImage from "../novelImage.png";

const Test = (props) => {
    return (
        <>
            <ScrollX>
                <ScrollXChild>
                    <Image src={novelImage}></Image>
                    <Image src={novelImage}></Image>
                    <Image src={novelImage}></Image>
                    <Image src={novelImage}></Image>
                </ScrollXChild>
            </ScrollX>
        </>
    );
};

const ScrollX = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    scroll-padding: 0px 24px;
    display: grid;
    --column-count: 4;
    scroll-snap-type: x mandatory;
    grid-auto-flow: column;
    overflow-x: auto;
    -ms-overflow-style: none;
    height: 500px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const ScrollXChild = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 2rem;
    &:last-child {
        margin-right: 0;
    }
`;

export default Test;
