import React from 'react';
import ReactDOM from 'react-dom';
var footerCss = require("../../style/footer.css");

export default class ComponentFooter extends React.Component{
    render(){
        console.log(footerCss);
        return (
            <footer className={footerCss.minFooter}>
                <h1>页脚，版权信息</h1>
            </footer>
        )
    }
}