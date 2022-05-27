import React, { useState, useEffect } from 'react';

import { Layout, Menu, Breadcrumb, Image, Modal, Button, notification, List, Avatar, Alert, Space } from 'antd';
import Marquee from 'react-fast-marquee';
import {
    PlusOutlined,
    MessageOutlined,
    LikeOutlined
} from '@ant-design/icons';
import ModalBlog from './ModalBlog';
import { getAllPost } from '../../apis/postApi';
import { Link } from 'react-router-dom';
import FooterCom from '../FooterCom';
import { getAllCategory } from '../../apis/categoryApi';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentBlogType = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [posts, setPosts] = useState([])
    const [isRender, setIsRender] = useState(false);
    const [category, setCategory] = useState([])

    useEffect(() => {
        getAllPost()
            .then(res => setPosts(res.data.reverse()))
            .catch(err => console.log(err))
    }, [isRender])

    useEffect(() => {
        getAllCategory()
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])


    const openNotification = () => {
        notification.open({
            message: 'Bạn chưa đăng nhập',
            description:
                'Hãy đăng nhập để có thể đăng những bài viết thật hay nhé :) ',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const showModal = () => {
        props.isLogin == true ? setIsModalVisible(true) : openNotification()
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>

            <Content style={{ margin: '0 16px' }}>
                <div style={{ marginBottom: "20px" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Thể loại</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert message={
                        <Marquee pauseOnHover gradient={false}>
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>} type="success" />
                
                    <ModalBlog setPosts={(data) => setPosts(data)} isModalVisible={isModalVisible} category={category} handleOk={handleOk} handleCancel={handleCancel} />
                </div>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                    {/* Hiện ra list blog  */}
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={posts}

                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                    <img
                                        width={272}
                                        height={170}
                                        alt="logo"
                                        src={item.thumnail}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
                                    title={(props.isLogin == true) ?
                                        <Link to={"/blog/" + item.id}>{item.title}</Link> :
                                        <Link to={"/login"}>{item.title}</Link>}
                                    description={"Tác giả: " + item.username}

                                />
                                {item.description}
                            </List.Item>
                        )}
                    />
                </div>
                <FooterCom />
            </Content>
        </div>
    )
}

export default ContentBlogType