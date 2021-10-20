import React from "react";
import CoverImage from "../elements/CoverImage";
import Muffin from "./Muffin";
import styled from "styled-components";

const DetailNav = (props)=>{
    return(
        <Wrap>
            <Image>
                <CoverImage/>
            </Image>
            <Muffin/>
        </Wrap>
    )
}
const Wrap= styled.div`
width : 185px; 
height : 1929px;
`
const Image = styled.div`
width : 173px;
height: 271px;
margin : 4px 0 8px;
`
export default DetailNav;