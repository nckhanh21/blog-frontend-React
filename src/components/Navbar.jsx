
import React, { useState, useEffect } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Image, Avatar } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
    const [onCollapse, setOnCollapse] = useState(false);

    return (
        <div>
          
            <Sider  style={{ minHeight: '100%' }} collapsible collapsed={onCollapse} onCollapse={()=> setOnCollapse(!onCollapse)}>
                <div className="logo"><Image
                    width={40}
                    src="https://gudlogo.com/wp-content/uploads/2019/04/logo-blog-13.png"
                /> Blog Online</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Trang chủ
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Trang cá nhân
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Bạn bè">
                        <Menu.Item key="6">Friend 1</Menu.Item>
                        <Menu.Item key="8">Friend 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
           
        </div>
    )
}

export default Navbar