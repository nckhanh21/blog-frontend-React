import React from 'react'
import { Layout, Menu, Breadcrumb, Image, Modal, Button, notification, List, Avatar, Space } from 'antd';
import {
    PlusOutlined,
    MailOutlined,
    FacebookOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    MessageOutlined,
    LikeOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const FooterCom = () => {
  return (
    <div>
        <Footer style={{ display: 'flex', justifyContent: "space-around", textAlign: 'center' }}>
                    <div>
                        <h2>Blog Online</h2>
                        <p><TeamOutlined />Nhóm 18</p>
                        <p> Nguyễn Công Khánh (C) <br />
                            Phạm Việt Hoàng <br />
                            Ngô Thế Nghĩa</p>
                    </div>
                    <div>
                   
                            <h2>Thông tin liên hệ</h2>
                            <FacebookOutlined /> &nbsp;&nbsp; <a href="https://www.facebook.com/nckhanhptit">https://www.facebook.com/nckhanhptit</a> <br />
                            <p> <MailOutlined /> &nbsp;&nbsp; nckhanh.2k1@gmail.com</p>
                     
                    </div>

                </Footer>
    </div>
  )
}

export default FooterCom