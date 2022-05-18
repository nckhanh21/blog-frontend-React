import React, { useState, useEffect } from 'react';

import { Layout, Menu, Breadcrumb, Image, Modal, Button, notification, List, Avatar, Space, Typography } from 'antd';

import {
    PlusOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    MessageOutlined,
    LikeOutlined
} from '@ant-design/icons';

import { getAllPost } from '../../apis/postApi';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { Text } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentBlog = (props) => {

    return (
        <div>

            <Content style={{ margin: '0 16px' }}>
                <div style={{ marginBottom: "20px" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Link to={"/"}><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                        <Breadcrumb.Item>Blog</Breadcrumb.Item>
                    </Breadcrumb>

                </div>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <div>
                        <Title level={2} strong>{props.blog.title}</Title>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Avatar size={60} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 60 }} />} />
                        <div style={{ display: 'flex', flexDirection: 'column', padding: "10px" }}>

                            <Text strong>{props.blog.username}</Text>
                            {((props.blog.createdOn / 1440) > 1) ?
                                <Text code>{Math.floor(props.blog.createdOn / 1440)} ngày trước</Text> :
                                ((props.blog.createdOn / 60) > 1) ?
                                    <Text code>{Math.floor(props.blog.createdOn / 60)} giờ trước</Text> : <Text code>{props.blog.createdOn} phút trước</Text>
                            }
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Text style={{flex:3, padding: "30px"}}>{props.blog.content}</Text>
                        <Image style={{flex:1}}
                            width={300}
                            src={props.blog.thumnail}
                        />
                    </div>

                </div>
            </Content>
        </div>
    )
}

export default ContentBlog