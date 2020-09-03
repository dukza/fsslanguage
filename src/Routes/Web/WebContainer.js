import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";


import SectonTitle from 'Components/SectonTitle';
import Code from 'Components/Code';
import Content from 'Components/Content';
import Sample from 'Components/Sample';
import {useUi} from 'Components/context'



const WebContainer = () => {
    const {sideNavWebs} = useUi();
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
            <Content text="Components">

                <div className="col-12 col-md-10 overflow-auto">
                    <div className="row">
                        <div className="col-12 col-md offset-md-2 font-12 bg-dark text-lighter text-center" style={{'height':'500px'}}>
                            Web
                        </div>                          
                    </div>
                </div>
            </Content>
        </>
    );
}

export default WebContainer;



