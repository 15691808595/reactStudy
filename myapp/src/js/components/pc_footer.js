import React, { Component } from 'react';
import { Row, Col } from 'antd';


class PCFooter extends Component {


    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy; 2016 ReactNews. All Right Reserved
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}

export default PCFooter;
