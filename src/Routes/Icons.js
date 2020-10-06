import React from 'react';
import styled from 'styled-components';

import Content from 'Components/Content';
import Card from './../Components/Link/Card';

import H4 from '../Components/Title/H4'
import H16 from '../Components/Title/H16'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    @media only screen and (max-width: 576px) {
        grid-template-columns: repeat(4,1fr)
    }
`
const Icon = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	background:#fff;
	box-sizing:border-box;
	font-size:24px;
    &:before{
        content: "";
        display: block;
        height: 0;
        padding-bottom: 100%;
    }
`


const Icons = () => {
    return(
        <>
            <Content title="Icons">
                <div className="row">
                    <div className="col-12 mb-4 text-darkest">우리의 아이콘 사용은 의도적이고 합리적이어야 하며 콘텐츠의 목적을 뒷받침하는 역할을 해야 합니다.</div>
                    <H4 title={'Arrow'}/>
                    <div className="col-12">
                        <div className="row">
                            <Grid className="col-12">
                                <Icon>
									<a href="https://fontawesome.com/icons/chevron-down?style=light" target="_blank">
										<Icon class="fal fa-chevron-down"></Icon>
									</a>
								</Icon>
                            </Grid>
                        </div>
                    </div>
                              
                </div>
            </Content>
        </>
    );
}

export default Icons;



