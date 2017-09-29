var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/indexBody';

import 'antd/dist/antd.css';
class Index extends React.Component{

    componentWillMount(){
        // 定义将要加载
        console.log('Index将要加载的');
    }

    componentDidMount(){
        console.log('Index加载完成');
    }

    render(){
        return (
            <div>
                <ComponentHeader/>
                <ComponentBodyIndex userId={123456} />
                <ComponentFooter/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'));