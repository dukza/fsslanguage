import React from 'react';


export default ({children}) =>{

    return(
        <>
        <div className="col-12 mb-5">
            <div className="row no-gutters">
                <div className="col-12">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
} 