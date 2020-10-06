import React, { Children } from 'react';

export default ({children, lang}) =>{
    return(
        <div className="col-12 h5 text-dark font-weight-lighter pt-2 pb-2" en={lang}>{children}</div>
    )
} 