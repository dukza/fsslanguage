import React,{useEffect} from 'react';



import Content from 'Components/Content';
// import SectonTitle from 'Components/SectonTitle';
// import Code from 'Components/Code';
// import Sample from 'Components/Sample';
// import {useUi} from 'Components/context'



const Color = () => {
    return(
        <>
            <Content title="Color">
                <div className="row">
                    <div className="col-12 mb-2 text-ink font-20">고객이 예측 가능하게 상호 작용할 수있는 시각적 패턴을 만들 수 있습니다.</div>
                    <div className="col-12">
                        <a href="https://www.figma.com/proto/afMdShoWh7DEJETUd8d3Tu/Doyo-Design-Kit?node-id=1121%3A8384&scaling=min-zoom" target="_blank">
                            색상 구현 <i className="fal fa-external-link"></i>   
                        </a>                        
                    </div>
                </div>

            </Content>
        </>
    );
}

export default Color;



