import React from 'react'

export default class List extends React.Component{
    render(){
        return(
            <div>
                <h2>这里是列表页面 Id: {this.props.params.id}</h2>
            </div>
        );
    }
}