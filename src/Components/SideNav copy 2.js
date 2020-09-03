import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SideMenu,{Item} from 'react-sidemenu';
import Menu from 'react-semantic-ui-accordion-menu';
import WebContainer from '../Routes/Web';

const config  = [
    // Wen no "content" or "section" are provided provide a NavLink into the title property
    {
      id: "section-2",
      title: <NavLink exact to="/"><Icon name="home" />Home</NavLink>,
      content: null,
    },
    // When sections are provided, subaccordions will be generated
    {
      id: "section-1",
      title: [<Icon key="sitemap" name="sitemap" />,"Section 1"],
      sections: [
        { 
          id: "section-1.1",
          title: [<Icon key="archive" name="archive" />,"Section 1.1"],  // When a icon is needed in title, pass it as a fragment     
          content: [<NavLink key="about" exact to="/about/"><Icon name="file alternate" />About</NavLink>, <NavLink key="test" exact to="/test/"><Icon name="folder open" />Test</NavLink>],  // Multiple links in content could be also passed in as frament
        },     
        {
          id: "section-1.2",
          title: [<Icon key="calculator" name="calculator" />, "Section 1.2"],  // When a icon is needed in title, pass it as a fragment
          sections: [
            {
              id: "section-1.2.1",
              title: [<Icon key="camera" name="camera" />, "Section 1.2.1"],
              content: <NavLink exact to="/users/"><Icon name="users" />Users</NavLink>,
            }
          ]
        },
      ]
    },
  ];
const Index = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Users = () => <h2>Users</h2>;

const Test = () => <h2>Test</h2>;  


const SideNavs = () => {
    return(
        <>
            <div className="col-2 overflow-auto position-fixed" style={{'top':'48px','left':'0px','bottom':'0px','right':'0px'}}>
                {/* <SideMenu className="Side-menu-custom" items={items} collapse={false}/> */}
                <Router>
                    <SideMenu>
                        <Item label="Guidelines" >
                            <Route path="/#Color" component={WebContainer}></Route>
                            <Item label="Color" value="Color" >
                                
                            </Item>
                            </Route>
                            <Item label="Icons" value="Icons"/>
                            <Item label="Spacing" value="Spacing" />
                            <Item label="Typography" value="Typography" />
                        </Item>
                        <Item label="Components" >
                            <Item label="Tables" value="Tables" />
                            <Item label="Switch" value="Switch" />
                            <Item label="Alerts" value="Alerts" />
                            <Item label="Badge" value="Badge" />
                        </Item>
                        <Item label="Writings" >
                            <Item label="UIText" value="UIText"/>
                            <Item label="spacing" value="spacing" />
                            <Item label="tone" value="tone" />
                        </Item>
                    </SideMenu>
                </Router>
            </div>
        </>        
    )
}


export default SideNavs;