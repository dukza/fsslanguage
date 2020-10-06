import React from 'react';


export default ({children}) =>{
    return(
        <>
        <div className="col-12">
            <div className="row no-gutters bg-white rounded p-4">
                {children}
            </div>
        </div>  
        </>
    )
} 