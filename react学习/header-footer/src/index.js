import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router,Route,hashHistory } from 'react-router'

import './css/antd.css'
import { Button } from 'antd';
import PCIndex from './js/components/pc_index'
import MobileHeader from './js/components/mobile_header'
import './css/pc.css'
import './css/mobile.css'
import MediaQuery from 'react-responsive'
import MobileIndex from "./js/components/mobile_index";

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>

        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
