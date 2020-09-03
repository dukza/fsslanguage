import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";
// import AnchorLink from 'react-anchor-link-smooth-scroll';


import SectonTitle from 'Components/SectonTitle';
import Code from 'Components/Code';
import Content from 'Components/Content';
import SideNav from 'Components/SideNav';
import {useUi} from 'Components/context'



const WebContainer = () => {
    const {sideNavWritings} = useUi();
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
            {/* <SideNav text="Writings">
                <>
                {sideNavWritings.map( (sideNavWeb,index) => <li key={index} className="d-inline d-md-block mr-5 px-md-0 mb-md-2">
                    <Link className="sideNav" to={sideNavWeb.to}
                spy={true} smooth={true} duration={500} offset={-52}>{sideNavWeb.name}</Link></li>)}
                </>
            </SideNav>         */}
            <Content text="Writings">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <SectonTitle text={sideNavWritings[0].name} name={sideNavWritings[0].to} style={{'padding-top':'1rem'}}/>               
                        <div className="col-12" style={{'height':'100px'}}>준비 중 입니다</div>                
                        <SectonTitle text={sideNavWritings[1].name}  name={sideNavWritings[1].to}/>       
                        <div className="col-12" style={{'height':'100px'}}>준비 중 입니다</div>                       
                        <SectonTitle text={sideNavWritings[2].name}  name={sideNavWritings[2].to}/>               
                        <div className="col-12" style={{'height':'100px'}}>준비 중 입니다</div>                       
                        <SectonTitle text={sideNavWritings[3].name}  name={sideNavWritings[3].to}/>               
                        <div className="col-12" style={{'height':'100px'}}>준비 중 입니다</div>                       
                    </div>
                </div>
            </Content>
        </>
    );
}

export default WebContainer;