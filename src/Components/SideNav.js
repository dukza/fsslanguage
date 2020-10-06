import React,{useState, useContext} from 'react';
import { BrowserRouter as NavLink, Link ,withRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Accordion,Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import { UserContext } from "./context";


const SLink = styled(Link)`
  height:40px;
  line-height:40px;
  padding-left:40px;
  color:${props => props.current ? "#444444" : "#666666"};
  font-weight:400;
  background-color:${props => props.current ? "#F4F4F4" : "transparent"};
  transition:all 0.4s;
  &:hover{
    color:#444444;
  }
`

const SsideNav = styled.div`
  display:${props => props.isMobile ? "block": "none" };
`

export default withRouter(({location:{pathname}}) => {
  const [activeIndex,setIndex] = useState(0);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setIndex(newIndex);
  }
  const {mobile:{isMobile}} = useContext(UserContext);
  console.log('isMobile' ,isMobile)
  // const { mobile:{isMobile}, onMobile} = useContext(UserContext);
  return (

    <SsideNav className="col-md-2 overflow-auto position-fixed px-0 overflow-hidden navSider" isMobile={isMobile} style={{'top':'80px','left':'0px','bottom':'0px','right':'0px', 'zIndex':'90'}}>
      <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
              <div className="col-12 d-flex align-items-center">
                디자인 가이드
                <Icon className="small ml-auto" name='fal fa-chevron-down' />                     
              </div>            
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <div className="row">
              <SLink className="w-100" to="/color" current={ pathname === "/" || pathname === "/color"}>색상</SLink>
              {/* <SLink className="w-100" to="/icons" current={pathname === "/icons"}>아이콘</SLink> */}
              <SLink className="w-100" to="/typography" current={pathname === "/typography"}>폰트</SLink>
              <SLink className="w-100" to="/logo" current={pathname === "/logo"}>로고</SLink>
            </div>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <div className="col-12 d-flex align-items-center">
              콤포넌트
              <Icon className="small ml-auto" name='fal fa-chevron-down' />                     
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div className="row">
              <SLink className="w-100" to="/table" current={pathname === "/table"}>테이블</SLink>
              <SLink className="w-100" to="/switchs" current={pathname === "/switchs"}>스위치</SLink>
              <SLink className="w-100" to="/alerts" current={pathname === "/alerts"}>알림</SLink>
              {/* <SLink className="w-100" to="/badge" current={pathname === "/badge"}>배지</SLink> */}
            </div>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <div className="col-12 d-flex align-items-center">
              기획 
              <Icon className="small ml-auto" name='fal fa-chevron-down' />                     
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <div className="row">
              <SLink className="w-100" to="/uiSize" current={pathname === "/uiSize"}>사이즈 표준화</SLink>
              <SLink className="w-100" to="/writing" current={pathname === "/writing"}>표기</SLink>
              <SLink className="w-100" to="/spacing" current={pathname === "/spacing"}>띄어쓰기</SLink>
            </div>
          </Accordion.Content>
      </Accordion>
    </SsideNav>
  )
})