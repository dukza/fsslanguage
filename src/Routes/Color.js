import React from 'react';



import Content from 'Components/Content';


const Color = () => {
    return(
        <>
            <Content title="Color">
                <div className="row">
                    <div className="col-12 mb-4 text-darkest">고객이 예측할 수 있게 상호 작용할 수 있는 시각적 패턴을 만들 수 있습니다. </div>
                    <div className="col-12">
                        <div className="row no-gutters">
                            <a className="col-12 col-md-4 font-14 text-decoration-none bg-white bg-hover-dark rounded p-4 d-flex align-items-center" href="assets/btn-xs-down.png" download>
                                색상 팔레트 <i className="fal fa-external-link  ml-auto"></i> 
                            </a>
                        </div>                   
                    </div>
                </div>

            </Content>
        </>
    );
}

export default Color;



