import React from 'react';

import styled from 'styled-components';

import Content from 'Components/Content';
import Card from './../Components/Link/Card';
import Swatch from './../Components/Link/Swatch';

import H4 from '../Components/Title/H4'
import H16 from '../Components/Title/H16'
import Font16 from '../Components/Title/Font16';

const Grid12 = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(6,1fr)
    }
`
const Grid6 = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(6,1fr)
    }
`


const Logo = () => {
    // const {elem} = useStyle();
    return(
        <>
            <Content title="Logo">
                <div className="row">
					<Font16>가이드에 맞게 사용해 주세요.</Font16>
                    <div className="col-12 h--3"></div>
                    <div className="col-12">
                        <div className="row no-gutters">
                            <div className="col-12 col-md-4">
                                <Card label={'로고 가이드'} icon={<i className="fal fa-external-link"></i>} file={"https://drive.google.com/drive/folders/1ofglLYB8moGlxMif2MbLVbSYiImLPh5j?usp=sharing"} />
                            </div>
                        </div>                   
                    </div>
                </div>
            </Content>
        
        </>
    );
}

export default Logo;



