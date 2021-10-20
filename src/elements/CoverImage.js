import React from 'react';
import styled from "styled-components";


const CoverImage = (props)=>{
    const {src} = props;
    const style = { src : src }
return(
    <Image {...style}></Image>
)
}
CoverImage.defaultProps = {
    src : "https://comicthumb-phinf.pstatic.net/20210917_299/pocket_1631867055704bVj56_JPEG/____1.jpg?type=m260" }

const Image = styled.div`
overflow: hidden;
background-image:url("${(props)=>props.src}");
background-size: cover;
width : 173px;
height : 260px;

`

export default CoverImage;