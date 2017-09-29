import React, { Component } from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs ,message, Form, Input, Button, CheckBox,Modal,Card ,notification} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class MobileUserCenter extends Component {

    render(){
        return(
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">

                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">

                            </TabPane>
                            <TabPane tab="头像设置" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter/>
            </div>
        )
    }

}

export default MobileUserCenter;