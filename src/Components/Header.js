import React, { useContext } from 'react';
import { UserContext } from './context';

const Header = () => {
    const { onMobile } = useContext(UserContext);
    return(
        <>
            <div className="col-12 position-fixed" style={{'zIndex':'84'}}>
                <div className="row">
                    <div className="col-12 text-white font-12 font-weight-normal bg-indigo-500 pt-2 pb-2 d-flex align-items-center" style={{'height':'32px'}}>우리에게 필요한 언어가 있다면 언제든지 이야기해 주세요 : )</div>
                    <div className="col-12 font-weight-light text-white bg-dark-ink border-bottom-light d-flex align-items-center" style={{'height':'48px'}} lang="en">
                        <a className="font-14 cursor-pointer mr-2 d-block d-md-none" onClick={onMobile}><i class="fal fa-bars"></i></a>
                        <span className="icon icon-logo-fssOnly font-14 d-inline-block mr-2"></span> Language</div>
                </div>
            </div>

        </>        
    )
}


export default Header;