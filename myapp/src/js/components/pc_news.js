import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_block_img';
import { Menu, Icon, Tabs ,Carousel,message, Form, Input, Button, CheckBox,Modal } from 'antd';
// import {Router, Route, Link, browserHistory} from 'react-router'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

// import a from '../../images/carousel_1.jpg'
// import b from '../../images/carousel_2.jpg'
// import c from '../../images/carousel_3.jpg'
// import d from '../../images/carousel_4.jpg'

class PCNewsContainer extends Component {
    render() {

        const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div>
                                        <img src='../../images/carousel_1.jpg' alt="fff"/>
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_2.jpg" alt="ddd"/>
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_3.jpg" alt="eee"/>
                                    </div>
                                    <div>
                                        <img src="../../images/carousel_4.jpg" alt="bbb"/>
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条"
                                              imageWidth="112px"
                            >
                            </PCNewsImageBlock>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻"
                                              imageWidth="132px"
                            >
                            </PCNewsImageBlock>
                            <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻"
                                              imageWidth="132px"
                            >
                            </PCNewsImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PCNewsContainer;
