import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';

// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Menu from 'react-semantic-ui-accordion-menu';


const content=[
  {
      label: 'Guidelines',
      content: [
          {
              label: 'Color',
              to: '/color/',
          },
          {
            label: 'Icons',
            to: '/icons/',
          },
          {
            label: 'Typography',
            to: '/typography/',
          }
      ],
  },
  {
    label: 'Components',
    content: [
        {
            label: 'Table',
            to: '/table/',
        },
        {
          label: 'Switchs',
          to: '/switchs/',
        },
        {
          label: 'Alerts',
          to: '/alerts/',
        },
        {
          label: 'Badge',
          to: '/badge/',
        },
    ],
  },
  {
    label: 'Writings',
    content: [
        {
          label: 'Ui text',
          to: '/uitext/',
        },
        {
          label: 'Spacing',
          to: '/spacing/',
        },
        {
          label: 'Tone',
          to: '/tone/',
        },
    ],
  }
];

const SideNav = () => {
    return(
        <>
            <div className="col-2 overflow-auto position-fixed" style={{'top':'80px','left':'0px','bottom':'0px','right':'0px'}}>
                <div className="row">
                    <MetisMenu content={content} 
                    activeLinkFromLocation
                    iconNameStateVisible = "fal fa-angle-up small"
                    iconNameStateHidden = "fal fa-angle-down small"/>                         
                </div>
            </div>
        </>        
    )
}



export default SideNav;