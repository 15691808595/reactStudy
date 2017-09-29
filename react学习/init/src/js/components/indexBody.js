import React from 'react';
import ReactDOM from 'react-dom';

import BodyChilld from './bodychild'

import ReactMixin from 'react-mixin'
import MixinLog from './mixins'

import { Input } from 'antd'

const defaultProps = {
    username:'这是一个默认的用户名'
}
export default class BodyIndex extends React.Component{
    constructor(){
        super();//调用基类的所有的初始化方法
        this.state={username:'Parry',age:20};//初始化赋值
    }
    changeUserIndo(age){
        this.setState({age:age});
        // 第一种方式
        // var mySubmitButton = document.getElementById('submitButton');
        // console.log(mySubmitButton);
        // ReactDOM.findDOMNode(mySubmitButton).style.color='red';

        // 第二种方式
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';

        MixinLog.log();

    }
    handleChildValueChange(event){
        this.setState({age:event.target.value});
    }

    render(){
        // setTimeout(()=>{
        //     //更改 state 的时候
        //     this.state={username:'IMOOC'};
        // },4000)

        return (
            <div>
                <h1>页面主体内容</h1>
                <p>username:{this.state.username}  userId:{this.props.userId}</p>
                <p>{this.state.age}</p>
                <Input type="text" placeholder="basic usage"/>
                <input id="submitButton" ref="submitButton" type='button' value='提交' onClick={this.changeUserIndo.bind(this,22)} />
                <BodyChilld {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
         )
    }
}

BodyIndex.propTypes = {
    userId: React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.propTypes,MixinLog);