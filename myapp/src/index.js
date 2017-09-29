import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router,Route,hashHistory } from 'react-router'

import './css/antd.css'
import PCIndex from './js/components/pc_index'
import MobileNewsDetail from './js/components/mobile_news_detail'
import './css/pc.css'
import './css/mobile.css'
import MediaQuery from 'react-responsive'
import MobileIndex from "./js/components/mobile_index";

import PCUserCenter from "./js/components/pc_usercenter"
import MobileUserCenter from "./js/components/mobile_usercenter"

import PCNewsDetail from './js/components/pc_news_detail'

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetail}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/details/:uniquekey" component={MobileNewsDetail}></Route>
                        <Route path="/usercenter" component={MobileUserCenter}></Route>
                    </Router>
                </MediaQuery>
            </div>

        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
