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


const Color = () => {
    // const {elem} = useStyle();
    return(
        <>
            <Content title="Color">
                <div className="row">
                    <Font16>색상으로 사용자와 상호 작용할 수 있는 시각적 패턴을 만들 수 있습니다.</Font16>
                    {/* <div className="col-12">
                        <div className="row no-gutters">
                            <div className="col-12 col-md-4">
                                <Card label={'색상 팔레트'} icon={<i className="fal fa-external-link"></i>} file={"/assets/Color.pdf"} />
                            </div>
                        </div>                   
                    </div> */}
                    <div className="col-12 h--4"></div>
                    <H4>브랜드 색상</H4>
                    <div className="col-12">
                        <div className="row">
                            <Grid12 className="col-12">
                                <Swatch className="text-white bg-brand-blue"/>
                                <Swatch className="text-ink bg-brand-yellow"></Swatch>
                                <Swatch className="text-white bg-brand-sky"></Swatch>
                            </Grid12>
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <H4>레이아웃 색상</H4>
                    <div className="col-12">
                        <div className="row">
                            <Grid12 className="col-12">
                                <Swatch className="text-white bg-black"></Swatch>
                                <Swatch className="text-white bg-ink"></Swatch>
                                <Swatch className="text-white bg-dark"></Swatch>
                                <Swatch className="text-white bg-body"></Swatch>
                                <Swatch className="text-ink bg-muted"></Swatch>
                                <Swatch className="text-ink bg-form"></Swatch>
                                <Swatch className="text-ink bg-border"></Swatch>
                                <Swatch className="text-ink bg-lighter"></Swatch>
                                <Swatch className="text-ink bg-light border"></Swatch>
                                <Swatch className="text-ink bg-white"></Swatch>
                            </Grid12>
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <H4>시스템 색상</H4>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <H16>정보</H16>
                            <div className="col-12 mb-2">텍스트 링크 및 정보 요소에 사용됩니다.</div>
                            <div className="col-12">
                                <div className="row">
                                    <Grid6 className="col-12">
                                        <Swatch className="text-white bg-primary"></Swatch>
                                        <Swatch className="text-white bg-info"></Swatch>
                                        <Swatch className="bg-border bg-alert-primary"></Swatch>
                                    </Grid6>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4 d-block d-md-none"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>위험</H16>
                        <div className="col-12 mb-2">고위험 중요한 요소에 사용됩니다.</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-danger"></Swatch>
                                    <Swatch className="text-ink bg-alert-danger"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>성공</H16>
                        <div className="col-12 mb-2">긍정적인 요소에 사용됩니다.(차트 제외)</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-success"></Swatch>
                                    <Swatch className="text-ink bg-alert-success"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4 d-block d-md-none"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>경고</H16>
                        <div className="col-12 mb-2">주의를 끌기 위한 요소에 사용됩니다.</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-warning"></Swatch>
                                    <Swatch className="text-ink bg-alert-warning"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>주의</H16>
                        <div className="col-12 mb-2">우선순의가 낮은 주의 요소에 사용됩니다.(차트 제외)</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-attention"></Swatch>
                                    <Swatch className="text-ink bg-alert-attention"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4 d-block d-md-none"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>표시</H16>
                        <div className="col-12 mb-2">표시를 위한 요소에 사용됩니다.</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-mark"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>변화</H16>
                        <div className="col-12 mb-2">추세 요소에 사용됩니다.(버튼, 폰트 제외)</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-change"></Swatch>
                                    <Swatch className="text-ink bg-alert-change"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4 d-block d-md-none"></div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                        <H16>도움</H16>
                        <div className="col-12 mb-2">알림을 위한 요소에 사용됩니다.</div>
                        <div className="col-12">
                            <div className="row">
                                <Grid6 className="col-12">
                                    <Swatch className="text-white bg-helpful"></Swatch>
                                </Grid6>
                            </div>
                        </div>  
                        </div>
                    </div>
                    <div className="col-12 h--4"></div>
                    <H4>인디고 색상</H4>
                    <div className="col-12">
                        <div className="row">
                            <Grid12 className="col-12">
                                <Swatch className="text-white bg-blue-900"></Swatch>
                                <Swatch className="text-white bg-blue-800"></Swatch>
                                <Swatch className="text-white bg-blue-700"></Swatch>
                                <Swatch className="text-white bg-blue-600"></Swatch>
                                <Swatch className="text-ink bg-blue-500"></Swatch>
                                <Swatch className="text-ink bg-blue-400"></Swatch>
                                <Swatch className="text-ink bg-blue-300"></Swatch>
                                <Swatch className="text-ink bg-blue-200"></Swatch>
                                <Swatch className="text-ink bg-blue-100"></Swatch>
                                <Swatch className="text-ink bg-blue-50"></Swatch>
                            </Grid12>
                        </div>
                    </div>
                </div>

            </Content>
        
        </>
    );
}

export default Color;



