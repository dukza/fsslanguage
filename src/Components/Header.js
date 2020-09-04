import React from 'react';

const Header = () => {
    return(
        <>
            <div className="col-12 position-fixed" style={{'zIndex':'84'}}>
                <div className="row">
                    <div className="col-12 text-white font-14 bg-mark-indigo pt-2 pb-2 d-flex align-items-center" style={{'height':'32px'}}>필요한 것이 있다면 언제든지 이야기해 주세요 : )</div>
                    <div className="col-12 font-weight-light text-white bg-dark border-bottom-light d-flex align-items-center" style={{'height':'48px'}} lang="en"><span className="icon icon-logo-fssOnly h6 d-inline-block mr-2"></span> Language</div>
                </div>
            </div>

        </>        
    )
}


export default Header;