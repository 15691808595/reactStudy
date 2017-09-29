import React from 'react';
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
export default class ComponentHeader extends React.Component{


    constructor(){
        super();
        this.state={
            miniHeader:false //默认加载的时候是高的头部
        }
    }

    switchHeader(){
        this.setState({
            miniHeader: !this.state.miniHeader
        })

    }

    render(){

        const styleComponentHeader = {
            header:{
                backgroundColor:'#333',
                color:'#fff',
                paddingTop: (this.state.miniHeader) ? '3px' : '15px',
                paddingBottom:(this.state.miniHeader) ? '3px' : '15px'
            }
        }

        return (
            <header style={styleComponentHeader.header}  className="smallFontSize"

            >
                <h1 >头部</h1>
                <ul>
                    <li>
                        <Link to={'/'}>
                            首页
                        </Link>
                    </li>
                    <li>
                        <Link to={'/detail'}>
                            嵌套的详情页
                        </Link>
                    </li>
                    <li>
                        <Link to={'/list/1234'}>
                            列表页
                        </Link>
                    </li>
                </ul>
            </header>
        )
    }
}