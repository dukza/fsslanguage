import React from 'react';
export default ({title, children}) => (
    <>
    <div className="col-12 text-white bg-black" style={{'minHeight':'250px'}}>
        <div className="row h-100 align-items-end">
            <div className="col-12 col-md-10 font-4 font-weight-light mx-auto mb--3" lang="en">
                {title}
            </div>
        </div>
    </div>   
    <div className="col-12 bg-form-lighter pt--3 pb--3"  style={{'minHeight':'calc( 100vh - 450px)'}}>
        <div className="row">
            <div className="col-12 col-md-10 mx-auto">
                {children}
            </div>
        </div>
    </div>   
    <div className="col-12 text-lighter bg-dark" style={{'minHeight':'120px'}}>
        <div className="row h-100 align-items-center">
            <div className="col-12 col-md-10 mx-auto">
                <div className="row text-white-normal font-weight-light">
                    <div className="col-12 font-xs" lang="en">Copyright Ⓒ FSS Corporation ALL RIGHT RESERVED</div>
                </div>
            </div>
        </div>
    </div>
    </>
);