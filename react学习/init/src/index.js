import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router,Route,hashHistory } from 'react-router'
import List from './js/components/list'
import Detail from './js/components/detail'
export default class Root extends React.Component{
    render(){
        return(
            // 这里替换了之前的Index变成了程序的入口
            <Router history={hashHistory}>
                <Route component={App} path="/">
                    <Route component={Detail} path="detail"></Route>
                </Route>
                <Route component={List} path="/list/:id"></Route>
            </Router>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
