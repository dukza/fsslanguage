import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";
import Code from 'Components/Code';
import Sample from 'Components/Sample';

import Content from 'Components/Content';

import H4 from '../Components/Title/H4'
import H16 from '../Components/Title/H16'
import Font16 from '../Components/Title/Font16';
// import SectonTitle from 'Components/SectonTitle';
// import Code from 'Components/Code';
// import Sample from 'Components/Sample';
// import {useUi} from 'Components/context'



const Typography = () => {
    // const {sideNavWebs} = useUi();
	// useEffect(() => {
	// 	Events.scrollEvent.register("begin", function() {
    //         console.log("begin", arguments);
            
	// 	});
	// 	Events.scrollEvent.register("end", function() {
	// 	    console.log("end", arguments);
	// 	});
	// 	return () => {
	// 		Events.scrollEvent.remove("begin");
	// 		Events.scrollEvent.remove("end");			
	// 	}
	// })
    return(
        <>
            <Content title="Typography">
				<div className="row">
					<Font16>제한적이고 목적이있는 스타일을 제공합니다.</Font16>
					<div className="col-12 h--4"></div>
					<H4 lang={'en'}>웹, 프린트용</H4>
					<Sample>  
						<div className="col-12 h1 text-ink font-kr bg-white">영업에만 집중하세요. 나머지는 <span class="icon icon-logo-fssOnly h2 d-inline-block mr-2"></span>가 대신해드립니다.</div>
					</Sample>
					<div className="col-12 h-4"></div>
					<H16>Typeface</H16>
					<div className="col-12 font-14 pt-2 pb-2">
						<a className="text-info" href="https://fonts.google.com/specimen/Noto+Sans+KR?sidebar.open=true&selection.family=Noto+Sans+KR:wght@100;300;400;500;700;900" target="_blank">
							Noto Sans KR <i class="fal fa-external-link"></i>
						</a>
					</div>
					<div className="col-12 h-4"></div>
					<Code text="style" copyTrue={true} downTrue={false} file={"/assets/table.zip"}>
						font-family: 'Noto Sans KR', sans-serif;
					</Code>
					<div className="col-12 h--4"></div>
					<H4 lang={'en'}>영문용</H4>
					<Sample>  
						<div className="col-12 h1 text-ink font-eng bg-white">
							Fulfillment Sharing Service
						</div>
					</Sample>
					<div className="col-12 h-4"></div>
					<H16>Typeface</H16>
					<div className="col-12 font-14 pt-2 pb-2">
						<a className="text-info" href="https://fonts.google.com/specimen/Oswald?query=Oswald&sidebar.open=true&selection.family=Oswald:wght@200" target="_blank">
							Oswald <i class="fal fa-external-link"></i>
						</a>
					</div>
					<div className="col-12 h-4"></div>
					<Code text="style" copyTrue={true} downTrue={false} file={"/assets/table.zip"}>
						font-family: 'Oswald', sans-serif;
					</Code>
					<div className="col-12 h--4"></div>
					<H4 lang={'en'}>이벤트용</H4>
					<Sample>  
						<div className="col-12 h1 text-ink font-event bg-white">
							복잡하고 번거로운 업무를 대신해 드립니다
						</div>
					</Sample>
					<div className="col-12 h-4"></div>
					<H16>Typeface</H16>
					<div className="col-12 font-14 pt-2 pb-2">
						<a className="text-info" href="https://www.apgroup.com/int/ko/about-us/visual-identity/arita-typeface/arita-typeface.html" target="_blank">
							Arita <i class="fal fa-external-link"></i>
						</a>
					</div>
					<div className="col-12 h-4"></div>
					<Code text="style" copyTrue={true} downTrue={false} file={"/assets/table.zip"}>
						font-family: 'Arita-dotum-Medium';
					</Code>
				</div>
            </Content>
        </>
    );
}

export default Typography;



