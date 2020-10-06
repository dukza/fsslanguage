import React from 'react';

import Content from 'Components/Content';
import Code from 'Components/Code';
import Sample from 'Components/Sample';

const Switchs = () => {
    return(
        <>
            <Content title="Switchs">
				<div className="row">
					<Sample>  
						<div className="col-auto switch">
							<input type="checkbox" className="control-input" id="Switch1" />
							<label className="text-dark control-label mb-0" htmlFor="Switch1">상품연결 미등록</label>                                
						</div>                                    
					</Sample>
					<div className="col-12 h-4"></div>
					<Code text="html" copyTrue={true}>
						{`<input type="checkbox" className="control-input" id="Switch1">
<label className="control-label" for="Switch1"></label>`}
					</Code>
					<div className="col-12 h-4"></div>
					<Code text="css" copyTrue={true}>
						{`.switch {
	position: relative;
}
.control-input {
	position: absolute;
	z-index: -1;
	opacity: 0;
	left: 0px;
}
.switch .control-input:checked ~ .control-label::after {
	background-color: #adb5bd;
	-webkit-transform: translateX(-0.75rem);
	transform: translateX(-0.75rem);
}
.control-label {
	position: relative;
	margin-bottom: 0;
	vertical-align: top;
	font-size: 16px;
}
.control-label::before {
	position: absolute;
	top: .25rem;
	left: -1.5rem;
	display: block;
	width: 1rem;
	height: 1rem;
	pointer-events: none;
	content: "";
	background-color: #007bff;
	border: #007bff solid 1px;
	-webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.switch .control-label::before {
	left: -2.25rem;
	width: 1.75rem;
	pointer-events: all;
	border-radius: .5rem;
}
.control-input:checked ~ .control-label::before {
	color: #fff;
	border-color: #adb5bd;
	background-color: #fff;
}
.control-label::after {
	position: absolute;
	top: .25rem;
	left: -1.5rem;
	display: block;
	width: 1rem;
	height: 1rem;
	content: "";
	background: no-repeat 50%/50% 50%;
}
.switch .control-label::after {
	top: calc(.25rem + 2px);
	left: calc(-2.25rem + 14px);
	width: calc(1rem - 4px);
	height: calc(1rem - 4px);
	background-color: #fff;
	border-radius: .5rem;
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
	-webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
	transition: background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
	transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
	transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
}

.control-label p {
	font-size: 14px;
	width: 600px;
	margin: .5rem 0;
	padding: .5rem;
	background: #e9e9e9;
}
						`}
					</Code>
				</div>
            </Content>
        </>
    );
}

export default Switchs;



