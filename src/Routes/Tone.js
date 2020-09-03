import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";


import Content from 'Components/Content';
// import SectonTitle from 'Components/SectonTitle';
// import Code from 'Components/Code';
// import Sample from 'Components/Sample';
// import {useUi} from 'Components/context'



const Tone = () => {
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
            <Content title="Tone">
				Tone
            </Content>
        </>
    );
}

export default Tone;



