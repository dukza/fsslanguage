import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Menu from 'react-semantic-ui-accordion-menu';


const config  = [
  {
    id: "section-1",
    title: ["Section 1"],
    content: null,
    sections: [
      { 
        id: "Guidelines",
        title: ["Guidelines"],  // When a icon is needed in title, pass it as a fragment     
        content: [<NavLink key="color" exact to="/color/" en="lag">Color</NavLink>
        , <NavLink key="icons" exact to="/icons/" en="lag">Icons</NavLink>
        , <NavLink key="typography" exact to="/typography/" en="lag">Typography</NavLink>]  // Multiple links in content could be also passed in as frament
      },
      { 
        id: "Components",
        title: ["Components"],  // When a icon is needed in title, pass it as a fragment     
        content: [<NavLink key="table" exact to="/table/" en="lag">Table</NavLink>
        , <NavLink key="switchs" exact to="/switchs/" en="lag">Switch</NavLink>
        , <NavLink key="alerts" exact to="/alerts/" en="lag">Alerts</NavLink>
        , <NavLink key="badge" exact to="/badge/" en="lag">Badge</NavLink>]  // Multiple links in content could be also passed in as frament
      },
      { 
        id: "Writings",
        title: ["Writings"],  // When a icon is needed in title, pass it as a fragment     
        content: [<NavLink key="uitext" exact to="/uitext/" en="lag">UIText</NavLink>
        , <NavLink key="spacing" exact to="/spacing/" en="lag">Spacing</NavLink>
        , <NavLink key="Tone" exact to="/tone/" en="lag">Tone</NavLink>]  // Multiple links in content could be also passed in as frament
      }
    ]
  },
];



const SideNav = () => {
    return(
        <>
            <div className="col-2 overflow-auto position-fixed" style={{'top':'88px','left':'0px','bottom':'0px','right':'0px'}}>
                <div className="row">
                  <Menu 
                      tree={config}
                      fontSize='16px'
                      width='100%'
                      submenuBackgroundColor="transparent"
                      submenuFontColor='#637381'
                      separatorColor='#F4F6F8'
                      firstLevelBackgroundColor="transparent"
                      activeColor="#F4F6F8"
                  />                  
                </div>
            </div>
        </>        
    )
}


export default SideNav;