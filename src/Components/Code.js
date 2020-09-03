import React,{useState, useReducer} from 'react';
import styled,{keyframes} from 'styled-components';



import {CopyToClipboard} from 'react-copy-to-clipboard';
 

const Code = styled.code`
    max-height:160px;
    overflow:auto;
    white-space:pre-line;
`;

const TextFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Text = styled.div`
    animation: ${TextFade} .4s .4s forwards;
    top:0px;
    right:0px;
`;


const BtnCopy = styled.button`
    position:absolute;
    right:0px;
    top:0px;
    z-index:44;
    background-color:rgba(255,255,255,0.6);
    transition:background-color .4s color 0.2s;
    &:hover{
        background-color:#448aff;
        color:white !important;

    }
`;
const useText = (initialText) => {
    const [text, setText] = useState(initialText);
    return {text, setText}  
  }
  

export default ({text,desc,children,copyTrue}) =>{
    const copy = useText('copy');
    setTimeout(() => copy.setText('copy'), 1000);
    return(
        <>
        <div className="col-12 text-ink mb-1 position-relative">
            {text}{desc}
        </div>
        <form className="col-12">
            <div className="row px-3 mb-3">
                <div className="col-12 bg-light rounded">
                    <div className="row">
                        {copyTrue ? (
                            <CopyToClipboard text={children} onCopy={() => copy.setText('copied')} >
                                <BtnCopy className="btn btn-sm btn-link text-decoration-none text-muted font-12 sText-copy" onClick={(e)=>e.preventDefault()}>{copy.text}</BtnCopy>
                            </CopyToClipboard>                            
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