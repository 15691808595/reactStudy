import React, { Component } from 'react';


class MobileHeader extends Component {

    constructor(){
        super();
        this.state = {
            current:'top'
        }
    }

    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src="../../images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}

export default MobileHeader;
