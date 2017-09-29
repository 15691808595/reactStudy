import React, { Component } from 'react';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs ,message, Form, Input, Button, CheckBox,Modal,Card ,notification} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class PCUserCenter extends Component {

    render(){
        return(
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">

                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">

                            </TabPane>
                            <TabPane tab="头像设置" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
            </div>
        )
    }

}

export default PCUserCenter;