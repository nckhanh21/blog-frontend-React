import React from 'react'
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
import Blogs from './Blogs';
  
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ContentCom = () => {
    return (
        <div>

            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Blogs />
                </div>
            </Content>
        </div>
    )
}

export default ContentCom