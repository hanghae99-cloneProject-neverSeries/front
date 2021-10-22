import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as productActions } from '../redux/modules/product';


const CoverImage = (props) => {
  const dispatch = useDispatch();
  React.useEffect((params) => {
    dispatch(productActions.getProductsFB(params))
  }, []
  );

  // 리덕스 데이터 가지고 오기
  const products = useSelector((store) => store.product.detail);


  return (
    <Image src={products?.imgURL}></Image>
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