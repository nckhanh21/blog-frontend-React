import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import Blogs from '../components/Blogs'
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

class LayoutCom extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
            Hello Nguyễn Khánh
          <Avatar src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/240114556_3018639968417018_2856334078982333709_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TVDKKMBhk_kAX-KMo4U&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_AAjV8XkIsiHTtvgssPFt5grE76WLQllU5aGhqy-d-IQ&oe=625AB10F" 
            style={{margin:"0px 20px 0px 20px"}}  size="large" icon={<UserOutlined />} 
          />  
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Blogs/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default LayoutCom;