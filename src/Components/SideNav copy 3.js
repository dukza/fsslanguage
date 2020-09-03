import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Menu from 'react-semantic-ui-accordion-menu';


const config  = [
    // Wen no "content" or "section" are provided provide a NavLink into the title property
    {
      id: "section-2",
      title: <NavLink exact to="/">Home</NavLink>,
      content: null,
    },
    // When sections are provided, subaccordions will be generated
    {
      id: "section-1",
      title: ["Section 1"],
      sections: [
        { 
          id: "section-1.1",
          title: ["Section 1.1"],  // When a icon is needed in title, pass it as a fragment     
          content: [<NavLink key="about" exact to="/about/">About</NavLink>, <NavLink key="test" exact to="/test/">Test</NavLink>],  // Multiple links in content could be also passed in as frament
        },     
        {
          id: "section-1.2",
          title: ["Section 1.2"],  // When a icon is needed in title, pass it as a fragment
          sections: [
            {
              id: "section-1.2.1",
              title: ["Section 1.2.1"],
              content: <NavLink exact to="/users/">Users</NavLink>,
            }
          ]
        },
      ]
    },
  ];


const SideNav = () => {
    return(
        <>
            <div className="col-2 overflow-auto position-fixed" style={{'top':'48px','left':'0px','bottom':'0px','right':'0px'}}>
                <Menu 
                    tree={config}
                    submenuBackgroundColor='#002657'
                    submenuFontColor='#ffffff'
                    separatorColor='rgba(255,255,255,.1)'
                />
            </div>
        </>        
    )
}


export default SideNav;