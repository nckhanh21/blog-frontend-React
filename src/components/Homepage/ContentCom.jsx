import React, { useState, useEffect } from 'react';

import { Layout, Menu, Input, Breadcrumb, Image, Modal, Button, notification, List, Avatar, Space } from 'antd';

import {
    PlusOutlined,
    MessageOutlined,
    LikeOutlined
} from '@ant-design/icons';
import ModalBlog from './ModalBlog';
import { getAllPost, getPostBySearch } from '../../apis/postApi';
import { Link } from 'react-router-dom';
import FooterCom from '../FooterCom';
import { getAllCategory } from '../../apis/categoryApi';
import { likeByUser } from '../../apis/likeApi';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentCom = (props) => {
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

    const handleLike = (id) => {
        likeByUser(id)
            .then(() => {
                getAllPost()
                    .then(res => setPosts(res.data.reverse()))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    const onSearch = (value) => {
        getPostBySearch(value)
            .then(res => {
                console.log(res.data);
                setPosts(res.data.reverse())})
            .catch(()=> {
                notification["error"]({
                    message: "Không tìm thấy bài viết phù hợp!",
                    placement: "topRight",
                })
            })

    }

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
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={showModal} type="primary" shape="round" icon={<PlusOutlined />} size={"small"}>
                            Thêm bài viết
                        </Button>

                        <ModalBlog setPosts={(data) => setPosts(data)} isModalVisible={isModalVisible} category={category} handleOk={handleOk} handleCancel={handleCancel} />
                        <Search placeholder="Tìm kiếm bài viết..." allowClear onSearch={onSearch} style={{ width: 400 }} />
                    </div>
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
                                    <div style={{ cursor: "pointer" }} onClick={() => handleLike(item.id)}>
                                        <IconText icon={LikeOutlined} text={item.numLike} key="list-vertical-like-o" />
                                    </div>,
                                    <IconText icon={MessageOutlined} text={item.numComment} key="list-vertical-message" />,
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

export default ContentCom