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
  
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const HeaderCom = () => {
    return (
        <div>
            <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                Hello Nguyễn Khánh
                <Avatar src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/240114556_3018639968417018_2856334078982333709_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TVDKKMBhk_kAX-KMo4U&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_AAjV8XkIsiHTtvgssPFt5grE76WLQllU5aGhqy-d-IQ&oe=625AB10F"
                    style={{ margin: "0px 20px 0px 20px" }} size="large" icon={<UserOutlined />}
                />
            </Header>
        </div>
    )
}

export default HeaderCom