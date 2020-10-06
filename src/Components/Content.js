import React from 'react';
import styled from 'styled-components';

// const Title = styled.div`
//     &:nth-of-type(1n){
//         color:red;
//     }
// `

export default ({title, children}) => (
    <>
    <div className="col-12 text-white bg-black" style={{'minHeight':'240px'}}>
        <div className="row h-100 align-items-end pb-5">
            <div className="col-12 col-md-10 font--4 mx-auto " lang="en">
                {title}
            </div>
        </div>
    </div>   
    <div className="col-12 bg-light pt--3 pb--6"  style={{'minHeight':'calc( 100vh - 360px)'}}>
        <div className="row">
            <div className="col-12 col-md-10 mx-auto">
                {children}
            </div>
        </div>
    </div>   
    <div className="col-12 text-lighter bg-dark-ink" style={{'minHeight':'120px'}}>
        <div className="row h-100 align-items-center">
            <div className="col-12 col-md-10 mx-auto">
                <div className="row text-white-light font-weight-light">
                    <div className="col-12 font-10" lang="en">Copyright Ⓒ <span className="text-indigo-500 font-weight-bold">FSS</span> Corporation All Right Reserved</div>
                </div>
            </div>
        </div>
    </div>
    </>
);