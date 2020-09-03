import React from 'react';
export default ({title, children}) => (
    <>
    <div className="col-12 text-white bg-black" style={{'minHeight':'250px'}}>
        <div className="row h-100 align-items-end">
            <div className="col-12 col-md-10 font-5 font-weight-light mx-auto mb-4" lang="en">
                {title}
            </div>
        </div>
    </div>   
    <div className="col-12 bg-light pt-5"  style={{'minHeight':'calc( 100vh - 484px)'}}>
        <div className="row">
            <div className="col-12 col-md-10 mx-auto">
                {children}
            </div>
        </div>
    </div>   
    <div className="col-12 text-white bg-black" style={{'minHeight':'150px'}}>
        <div className="row h-100 align-items-center">
            <div className="col-12 col-md-10 mx-auto">
                <div className="row text-white-lighter font-weight-light">
                    <div className="col-12 col-md mb-2"><span class="icon icon-logo-fssOnly h6"></span></div>
                    <div className="col-12 font-xs" lang="en">Copyright Ⓒ FSS Corporation ALL RIGHT RESERVED</div>
                </div>
            </div>
        </div>
    </div>
    </>
);