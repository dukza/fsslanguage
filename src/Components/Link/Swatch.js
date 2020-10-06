import React,{useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
const Swatch = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    text-align:center;
    transition:all .4s;
    &:before{
        content: "";
        display: block;
        height: 0;
        padding-bottom: 100%;
    }
    &:hover{
        transform:scale(1.2);
    }
`

const useStyle = () => {
    const elem = useRef();
    const [color, setColor] =  useState();
    const rgbHex = require('rgb-hex');
    const onStyle = (bgColor) => {
        const hex =  rgbHex(bgColor);
        setColor(`#`+hex)
    }
    
    useEffect(()=>{
        const bgColor = window.getComputedStyle(elem.current).getPropertyValue("background-color");
        document.addEventListener('load',onStyle(bgColor))
    },[])
    
    return {elem , color};
}

export default ({className}) =>{
    const {elem,color} = useStyle();
    return(
        <Swatch className={className} ref={elem} en="lang">{color}</Swatch>
    )
} 