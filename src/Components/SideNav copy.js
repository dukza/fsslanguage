import React from 'react';
import SideMenu,{Item} from 'react-sidemenu';
import './../css/side-menu.css'


const items = [
    {divider: true, label: 'Component', value: 'main-nav'},
    {label: 'table', value: 'table', icon: 'fa-search'},
    {label: 'item 2', value: 'item2', icon: 'fa-automobile',
    children: [
      {label: 'item 2.1', value: 'item2.1',
      children: [
        {label: 'item 2.1.1', value: 'item2.1.1'},
        {label: 'item 2.1.2', value: 'item2.1.2'}]},
      {label: 'item 2.2', value: 'item2.2'}]},
    {divider: true, label: 'Motors', value: 'motors-nav'},
    {label: 'item 3', value: 'item3', icon: 'fa-beer'}
  ];
  
const SideNavs = () => {
    return(
        <>
            <div className="col-2 position-fixed" style={{'top':'48px','left':'0px','bottom':'0px','right':'0px'}}>
                {/* <SideMenu className="Side-menu-custom" items={items} collapse={false}/> */}
                <SideMenu>
                    <Item divider={true} collapse={false} label="Components" value="Components"/>
                    <Item label="Item 1" icon="fa-search">
                        <Item label="Item 1.1" value="item1.1" icon="fa-snapchat">
                            <Item label="Item 1.1.1" value="item1.1.1" icon="fa-anchor"/>
                            <Item label="Item 1.1.2" value="item1.1.2" icon="fa-bar-chart"/>
                        </Item>
                        <Item label="Item 1.2" value="item1.2"/>
                    </Item>
                    <Item label="Item 2" value="item2" icon="fa-automobile">
                        <Item label="Item 2.1" value="item2.1.1">
                            <Item label="Item 2.1.1" value="item2.1.1"/>
                            <Item label="Item 2.1.2" value="item2.1.2"/>
                        </Item>
                        <Item label="Item 2.2" value="item2.2"/>
                    </Item>
                    <Item divider={true} label="Segment 2" value="segment2"/>
                    <Item label="Item 3" value="item3" icon="fa-beer"/>
                </SideMenu>

            </div>
        </>        
    )
}


export default SideNavs;