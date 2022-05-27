import React, { useState, useEffect } from 'react';

import { Layout, Menu, Breadcrumb, Select, Image, Modal, Button, notification, List, Avatar, Space } from 'antd';
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
import ModalBlog from '../Homepage/ModalBlog';
import { deletePost, getAllPost, getAllPostByUser } from '../../apis/postApi';
import { Link } from 'react-router-dom';
import FooterCom from '../FooterCom';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import ModalProfile from './ModalProfile';
import { getAllCategory } from './../../apis/categoryApi';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentProfile = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [posts, setPosts] = useState([])
    const [isRender, setIsRender] = useState(false);
    const [category, setCategory] = useState([])
    useEffect(() => {
        getAllPostByUser()
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

    const handleDeletePost = (id) => {
        deletePost(id)
            .then(setIsRender(!isRender))
            .then(() => notification["success"]({
                message: "Xóa bài thành công",
                placement: "topRight",
            }))
            .catch(() => notification["error"]({
                message: "Lỗi khi xóa bài",
                placement: "topRight",
            }))
    }
    const handleEditPost = (id) => {

    }

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
                        <Breadcrumb.Item>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button onClick={showModal} type="primary" shape="round" icon={<PlusOutlined />} size={"small"}>
                        Thêm bài viết
                    </Button>
                    <ModalProfile setPosts={(data) => setPosts(data)} category={category} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
                </div>
                <div className="site-layout-background" style={{ backgroundColor: "rgb(249, 255, 240)", padding: 24, minHeight: 360 }}>
                    <div style={{ display: 'flex', justifyContent: "space-around", textAlign: 'center' }}>
                        <Avatar style={{ background: "white" }} size={300} src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-around", textAlign: 'center' }}>
                        <Title>{localStorage.getItem('username')}</Title>
                    </div>

                </div>
                <Text strong type="success"> Những bài viết đã đăng</Text>


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
                                    <Button onClick={() => handleDeletePost(item.id)}>Xóa</Button>
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
                                        <Link to={"/login"}>{item.title}</Link>
                                    }

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

export default ContentProfile