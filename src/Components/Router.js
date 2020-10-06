import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNav from './SideNav';
import Color from 'Routes/Color';
import Icons from 'Routes/Icons';
import Typography from 'Routes/Typography';
import Logo from 'Routes/Logo';
import Table from 'Routes/Table';
import Switchs from 'Routes/Switchs';
import Alerts from 'Routes/Alerts';
import Badge from 'Routes/Badge';
import UiSize from 'Routes/UiSize';
import Spacing from 'Routes/Spacing';
import Writing from 'Routes/Writing';

export default () => (
    <Router>   
        <SideNav/>
        <div className="col-12 col-md-10 offset-0 offset-md-2" style={{'paddingTop':'80px'}}>
            <div className="row">
                <Switch>
                    <Route path="/" exact component={Color} />
                    <Route path="/color" component={Color} />
                    <Route path="/icons" component={Icons} />
                    <Route path="/typography" component={Typography} />
                    <Route path="/logo" component={Logo} />
                    <Route path="/table" component={Table} />
                    <Route path="/switchs" component={Switchs} />
                    <Route path="/alerts" component={Alerts} />
                    <Route path="/badge" component={Badge} />
                    <Route path="/uiSize" component={UiSize} />
                    <Route path="/spacing" component={Spacing} />
                    <Route path="/writing" component={Writing} />
                </Switch>
            </div>
        </div>                
    </Router>
)



