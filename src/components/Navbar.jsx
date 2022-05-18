
import React, { useState, useEffect } from 'react';
import {
    DesktopOutlined,
    LoginOutlined,
    LogoutOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Navigate, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Image, Avatar } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = (props) => {
    const username = localStorage.getItem('username')
    const [onCollapse, setOnCollapse] = useState(false);
    const [isLogin, setIsLogin] = useState(username != null)

  
    return (
        <div>

            <Sider style={{ minHeight: '100%' }} collapsible collapsed={onCollapse} onCollapse={() => setOnCollapse(!onCollapse)}>
                <div className="logo"><Image
                    width={40}
                    src="https://gudlogo.com/wp-content/uploads/2019/04/logo-blog-13.png"
                /> Blog Online</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to={"/"}>Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Trang cá nhân
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Bạn bè">
                        <Menu.Item key="6">Friend 1</Menu.Item>
                        <Menu.Item key="8">Friend 2</Menu.Item>
                    </SubMenu>
                    {props.isLogin == true ?

                        <Menu.Item onClick={props.handleLogout} key="9" icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                        :
                        <Menu.Item key="9" icon={<LoginOutlined />}>
                            <a href={"/login"} >
                                Login
                            </a>
                        </Menu.Item>

                    }
                </Menu>
            </Sider>

        </div>
    )
}

export default Navbar