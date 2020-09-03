import React from 'react';


export default ({children}) =>{

    return(
        <>
        <div className="col-12 mb-3">
            <div className="row no-gutters border rounded">
                <div className="col-12 p-3">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
} 