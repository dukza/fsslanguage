import React from 'react';

export default ({children, lang}) =>{
    return(
        <div className="col-12 h4 text-ink pt-3 pb-3" lang={lang}>{children}</div>
    )
} 