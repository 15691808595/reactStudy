import React, { Component } from 'react';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        );
    }
}

export default PCIndex;
