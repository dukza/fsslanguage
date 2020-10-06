import React from 'react';

export default ({label,icon,file}) =>{
    return(
        <a className="w-100 text-decoration-none text-indigo-500 font-weight-normal bg-white bg-hover-dark rounded p-4 d-flex align-items-center" href={file} target="_blank"  download>
        {label} <span className="ml-auto">{icon}</span>
        </a>
    )
} 