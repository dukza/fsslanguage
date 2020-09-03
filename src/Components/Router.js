import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from './SideNav';
import Color from 'Routes/Color';
import Icons from 'Routes/Icons';
import Typography from 'Routes/Typography';
import Table from 'Routes/Table';
import Switchs from 'Routes/Switchs';
import Alerts from 'Routes/Alerts';
import Badge from 'Routes/Badge';
import Uitext from 'Routes/Uitext';
import Spacing from 'Routes/Spacing';
import Tone from 'Routes/Tone';


export default () => (
    <Router>
        <SideNav/>
        <div className="col-10 offset-2" style={{'paddingTop':'84px'}}>
            <div className="row">
                <Route path="/color/" component={Color} />
                <Route path="/icons/" component={Icons} />
                <Route path="/typography/" component={Typography} />
                <Route path="/table/" component={Table} />
                <Route path="/switchs/" component={Switchs} />
                <Route path="/alerts/" component={Alerts} />
                <Route path="/badge/" component={Badge} />
                <Route path="/uitext/" component={Uitext} />
                <Route path="/spacing/" component={Spacing} />
                <Route path="/tone/" component={Tone} />
            </div>
        </div>                
    </Router>
)



