import React,{useState, useReducer} from 'react';
import styled,{keyframes} from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 

const Code = styled.code`
    max-height:160px;
    overflow:auto;
    white-space:pre-wrap;
`;


const Btn = styled.button`
    position:absolute;
    right:0px;
    top:0px;
    z-index:44;
    background-color: #F4F6F8;
    transition:background-color .4s color 0.2s;
    &:hover{
        background-color:#0288FF;
        color:white !important;

    }
`;

const useText = (initialText) => {
    const [text, setText] = useState(initialText);
    return {text, setText}  
}

export default ({text,desc,children,copyTrue,downTrue}) =>{
    const copy = useText('copy');
    const down = useText('save');
    setTimeout(() => copy.setText('copy'), 1000);
    return(
        <>
        <div className="col-12 text-ink font-14 font-weight-normal mb-2 position-relative">
            {text}{desc}
        </div>
        <form className="col-12">
            <div className="row px-3 mb--3">
                <div className="col-12 bg-light rounded">
                    <div className="row">
                        {copyTrue ? (
                            <CopyToClipboard text={children} onCopy={() => copy.setText('copied')} >
                                <Btn className="btn btn-sm btn-link text-info text-decoration-none font-12" onClick={(e)=>e.preventDefault()} lang="en">{copy.text}</Btn>
                            </CopyToClipboard>                            
                        ):(null)}
                        {downTrue ? (
                            <Btn className="btn btn-sm btn-link text-ingo text-decoration-none font-12" onClick={(e)=>e.preventDefault()}>{down.text}</Btn>                         
                        ):(null)}
                        <Code className="col-12 text-body font-12 pt-3 pb-3">
                            {children}
                        </Code>                                     
                    </div>
                </div>
            </div>
        </form>
 
        </>
    )
} 