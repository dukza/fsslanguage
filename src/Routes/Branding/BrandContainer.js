import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";


import SectonTitle from 'Components/SectonTitle';
import Code from 'Components/Code';
import Content from 'Components/Content';
import SideNav from 'Components/SideNav';
import Sample from 'Components/Sample';
import {useUi} from 'Components/context'



const BrandContainer = () => {
    const {sideNavWebs} = useUi();
	useEffect(() => {
		Events.scrollEvent.register("begin", function() {
            console.log("begin", arguments);
            
		});
		Events.scrollEvent.register("end", function() {
		    console.log("end", arguments);
		});
		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");			
		}
	})
    return(
        <>
            <SideNav text="Components">
                <>
                {sideNavWebs.map( (sideNavWeb,index) => <li key={index} className="d-inline d-md-block mr-4 px-md-0 mb-md-2">
                    <Link className="sideNav" activeClass="active" to={sideNavWeb.to}
                spy={true} smooth={true} duration={500} offset={-52}>{sideNavWeb.name} <span className="icon small"><strong>#</strong></span> 
                {/* <span className="dir"><span className="left"></span><span className="center"></span><span className="right"></span></span> */}
                </Link></li>)}
                </>
            </SideNav>        
            <Content text="Components">
                <div className="col-12 overflow-auto">
                    <div className="row">
                        <div className="col-12 col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-12" name={sideNavWebs[0].to}>
                                    <div className="row">
                                        <SectonTitle className="pt-0" text={sideNavWebs[0].name} style={{'paddingTop':'1rem'}}/>      
                                        <Sample>  
                                            <div className="col-12">
                                                <table class="sTable bg-white">
                                                    <colgroup>
                                                        <col width="10%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col />
                                                    </colgroup>
                                                    <thead>
                                                        <tr className="font-12 bg-zone">
                                                            <th scope="col" className="text-center">
                                                                센터 <button className="btn down" title="센터 전체 보기"></button>
                                                                {/* <button className="btn up" title="센터 간략 보기"></button> */}
                                                            </th>
                                                            <th scope="col" className="text-center">출고지시</th>
                                                            <th scope="col" className="text-center">피팅</th>
                                                            <th scope="col" className="text-center">검수패킹</th>
                                                            <th scope="col" className="text-center">미배송</th>
                                                            <th scope="col" className="text-center">답변대기</th>
                                                            <th scope="col" className="text-center">처리중</th>
                                                            <th scope="col" className="text-center">답변완료</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="text-center font-weight-bold">동탄</th>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right font-weight-bolder">30</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right font-weight-bolder">1</td>
                                                            <td className="text-right font-weight-bolder">32</td>
                                                            <td className="text-right font-weight-bolder">34</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="text-center font-weight-bold">안성</th>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="text-center font-weight-bold">상암</th>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                            <td className="text-right text-muted">-</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>                                  
                                        </Sample>   
                                        <Code text="image" copyTrue={false}>
                                            <img style={{'width':'18px','height':'18px'}} src={require('./../../assets/btn-xs-down.png')} alt="펼치기"/>
                                            <img style={{'width':'18px','height':'18px'}} className="ml-2" src={require('./../../assets/btn-xs-up.png')}  alt="접기"/>
                                        </Code>
                                        <Code text="html" copyTrue={true}>
                                            {`<table class="sTable">
                                                    <colgroup>
                                                        <col width="10%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col width="13%"/>
                                                        <col />
                                                    </colgroup>
                                                    <thead>
                                                        <tr class="font-12 bg-zone">
                                                            <th scope="col" class="text-center">
                                                                센터 <button class="btn down" title="센터 전체 보기"></button>
                                                                {/* <button class="btn up" title="센터 간략 보기"></button> */}
                                                            </th>
                                                            <th scope="col" class="text-center">출고지시</th>
                                                            <th scope="col" class="text-center">피팅</th>
                                                            <th scope="col" class="text-center">검수패킹</th>
                                                            <th scope="col" class="text-center">미배송</th>
                                                            <th scope="col" class="text-center">답변대기</th>
                                                            <th scope="col" class="text-center">처리중</th>
                                                            <th scope="col" class="text-center">답변완료</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-center font-weight-bold">동탄</th>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right font-weight-bolder">30</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right font-weight-bolder">1</td>
                                                            <td class="text-right font-weight-bolder">32</td>
                                                            <td class="text-right font-weight-bolder">34</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-center font-weight-bold">안성</th>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-center font-weight-bold">상암</th>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                            <td class="text-right text-muted">-</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            `}
                                        </Code>
                                        <Code text="css" copyTrue={true}>
                                            {`.sTable {
                                                width: 100%;
                                                margin-bottom: 0 !important;
                                                border-collapse: collapse;
                                                font-size: 14px;
                                                color: #263238;
                                                background-color: white;
                                                }

                                                .sTable tr :nth-child(1) {
                                                border-left: none;
                                                }

                                                .sTable tr :last-child {
                                                border-right: none;
                                                }

                                                .sTable td, .sTable th {
                                                padding: .3rem;
                                                border-color: #eceff1;
                                                border-width: 1px;
                                                border-style: solid;
                                                font-weight: normal;
                                                }

                                                .sTable .font-12 {
                                                font-size: 12px;
                                                }

                                                .sTable .font-weight-bolder {
                                                font-weight: 500;
                                                }

                                                .sTable .font-weight-bold {
                                                font-weight: 800;
                                                }

                                                .sTable .bg-zone {
                                                background-color: #eceff1;
                                                }

                                                .sTable .bg-white {
                                                background-color: #fff;
                                                }

                                                .sTable .text-center {
                                                text-align: center;
                                                }

                                                .sTable .text-right {
                                                text-align: right;
                                                }

                                                .sTable .btn {
                                                width: 18px !important;
                                                height: 18px !important;
                                                padding: 0px;
                                                display: inline-block !important;
                                                background-size: 100%;
                                                background-repeat: no-repeat;
                                                }

                                                .sTable .up {
                                                background-image: url(./../assets/btn-xs-down.png) !important;
                                                }

                                                .sTable .down {
                                                background-image: url(./../assets/btn-xs-down.png) !important;
                                                }
                                            `}
                                        </Code>
                                    </div>
                                </div>
                                <div className="col-12" name={sideNavWebs[1].to}>
                                    <div className="row">
                                        <SectonTitle text={sideNavWebs[1].name}/>  
                                        <Sample>  
                                            <div className="col-auto switch">
                                                <input type="checkbox" className="control-input" id="Switch1" />
                                                <label className="text-dark control-label mb-0" htmlFor="Switch1">상품연결 미등록</label>                                
                                            </div>                                    
                                        </Sample>
                                        <Code text="html" copyTrue={true}>
                                            {`<input type="checkbox" className="control-input" id="Switch1">
                                            <label className="control-label" for="Switch1"></label>`}
                                        </Code>
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
                                </div>
                                <div className="col-12" name={sideNavWebs[2].to}>
                                    <div className="row">
                                        <SectonTitle text={sideNavWebs[2].name} />    
                                        <div className="col-12 mb-3">
                                            <div className="row">
                                                <div className="col-auto alerts">
                                                    <div class="col-auto rounded bg-white shadow card pt-2 pb-2 d-flex flex-row align-items-center justify-content-end">
                                                        😀<span class="d-inline-block ml-2">출고 신청 버튼을 눌러주세요!</span>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>           
                                        <Code text="html">
                                            code
                                        </Code>
                                        <Code text="css">
                                            code
                                        </Code>
                                        <Code text="js">
                                            code
                                        </Code>                                
                                    </div>
                                </div>               
                                <div className="col-12" name={sideNavWebs[3].to}>                                
                            </div>
                        </div>

                            <div className="row">
                                <SectonTitle text={sideNavWebs[3].name} />               
                                <Code text="html" copyTrue={true}>
                                    code
                                </Code>
                                <Code text="css" copyTrue={true}>
                                    code
                                </Code>
                                <Code text="js" copyTrue={true}>
                                    code
                                </Code>                                
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default BrandContainer;



