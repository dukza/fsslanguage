import React,{useState} from 'react';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 

const Code = styled.code`
    max-height:160px;
    overflow:auto;
    white-space:pre-wrap;
`;


const Btn = styled.a`
    position:absolute;
    right:0px;
    top:0px;
    z-index:44;
    background-color: #F4F4F4;
    transition:all .4s;
    &:hover{
        background-color:#304FFE;
        color:white !important;

    }
`;

const useText = (initialText) => {
    const [text, setText] = useState(initialText);
    return {text, setText}  
}

export default ({text,desc,children,copyTrue,downTrue,file}) =>{
    const copy = useText('copy');
    const down = useText('Download');
    setTimeout(() => copy.setText('Copy'), 1000);
    return(
        <>
        <div className="col-12 text-ink font-weight-bold mb-2 position-relative">
            {text}{desc}
        </div>
        <form className="col-12">
            <div className="row px-3">
                <div className="col-12 border rounded">
                    <div className="row">
                        {copyTrue ? (
                            <CopyToClipboard text={children} onCopy={() => copy.setText('Copied')} >
                                <Btn className="btn btn-sm font-12" onClick={(e)=>e.preventDefault()} lang="en">{copy.text}</Btn>
                            </CopyToClipboard>                            
                        ):(null)}
                        {downTrue ? (
                            <Btn className="btn btn-sm font-12" href={file} download>{down.text}</Btn>                         
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