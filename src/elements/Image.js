// ! kyuung
import React from "react";
import styled from "styled-components";
import novelImage from "../novelImage.png";

const Image = (props) => {
    const { width, height, bradius, others, src, children } = props;
    const styles = { width, height, bradius, others, src };

    return (
        <>
            <ElImage {...styles}>{children}</ElImage>
        </>
    );
};

Image.defaultProps = {
    width: "15rem",
    height: "15rem",
    bradius: "0px",
    src: { novelImage },
    others: "",
    children: "",
};

const ElImage = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.bradius};
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${(props) => props.others};
`;

export default Image;
