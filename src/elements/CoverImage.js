import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as productActions } from '../redux/modules/product';


const CoverImage = (props) => {

  // 리덕스 데이터 가지고 오기
  const novel_detail = useSelector((state) => state.product.detail);

  console.log(novel_detail);
  const imgUrl = novel_detail?.product?.imgURL;

  return (
    <Image src={imgUrl}></Image>
  )
}

const Image = styled.div`
overflow: hidden;
background-image:url("${(props) => props.src}");
background-size: cover;
width : 173px;
height : 260px;

`

export default CoverImage;