import React from 'react';

const Header = () => {
    return(
        <>
            <div className="col-12 position-fixed" style={{'zIndex':'84'}}>
                <div className="row">
                    <div className="col-12 text-white bg-primary pt-2 pb-2 d-flex align-items-center justify-content-center" style={{'height':'36px'}}>필요한 컴포넌트가 있으면 공유해주세요!</div>
                    <div className="col-12 text-white bg-dark border-bottom-light d-flex align-items-center" style={{'height':'48px'}} lang="en">Header</div>
                </div>
            </div>

        </>        
    )
}


export default Header;