import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    padding-top:3rem;
`;

export default ({text, name, style}) => {
    return(
    <Title className="col-12 h4 text-dark mb-4" name={name} style={style}>
        {text}
    </Title>   
)}


