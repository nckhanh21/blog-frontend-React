import React, { useState, useEffect } from 'react';

import { Layout, Menu, Breadcrumb, Image, Modal, Button, notification, Dropdown, Avatar, Space, Typography } from 'antd';
import parse from 'html-react-parser';
import {
    PlusOutlined,
    PieChartOutlined,
    FileOutlined,
    DownOutlined,
    SmileOutlined,
    HomeOutlined,
    MessageOutlined,
    LikeOutlined
} from '@ant-design/icons';

import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import { getAllCommentsByPost } from '../../apis/commentApi';
import CommentCom from './CommentCom';
import { likeByUser } from '../../apis/likeApi';
import { getAllPost, getPost } from '../../apis/postApi';
import ModalEditPostProfile from './ModalEditPostProfile';

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

    const [comments, setComments] = useState([])
    const [numCmt, setNumCmt] = useState(0)
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);


    useEffect(() => {
        getAllCommentsByPost(props.id)
            .then(res => {
                setComments(res.data);
                console.log(res.data);
                setNumCmt(res.data.length);
            })
    }, [])


    const handleLike = (id) => {
        likeByUser(id)
            .then(() => {
                getPost(id)
                    .then((res) => {
                        props.setPost(res.data)
                    })
            })
            .catch(err => console.log(err))
    }

    const showModalEdit = () => {
        props.isLogin == true ? setIsModalVisibleEdit(true)
            :
            notification["errorr"]({
                message:
                    "Chưa đăng nhập!",
                placement: "topRight",
            });
    };

    const handleOkEdit = () => {
        setIsModalVisibleEdit(false);
    };

    const handleCancelEdit = () => {
        setIsModalVisibleEdit(false);
    };

    return (
        <div>
            <Content style={{ margin: '0 16px' }}>
                <div style={{ marginBottom: "20px" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Link to={"/"}><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                        <Breadcrumb.Item>Blog</Breadcrumb.Item>
                    </Breadcrumb>

                </div>
                {/* ----------------------Bài viết---------------------------- */}
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Title level={2} strong>{props.blog.title}</Title>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', }}>
                            <Avatar size={60} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 60 }} />} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "left", padding: "10px" }}>
                                <div>
                                    Tác giả: <Text strong>{props.blog.username}</Text>
                                </div>
                                <div>
                                    {((props.blog.createdOn / 1440) > 1) ?
                                        <Text code>{Math.floor(props.blog.createdOn / 1440)} ngày trước</Text> :
                                        ((props.blog.createdOn / 60) > 1) ?
                                            <Text code>{Math.floor(props.blog.createdOn / 60)} giờ trước</Text> : <Text code>{props.blog.createdOn} phút trước</Text>
                                    }
                                   &nbsp;&nbsp;
                                   Thể loại: {props.category[props.blog.category_id] != undefined? props.category[props.blog.category_id-1].name : "load" }
                                </div>
                            </div>
                        </div>
                        <div>
                            {localStorage.getItem('username') == props.blog.username ? <Button onClick={() => showModalEdit()} >Chỉnh sửa</Button> : ""}
                            <ModalEditPostProfile category={props.category} blog={props.blog} isModalVisible={isModalVisibleEdit} handleOk={handleOkEdit} handleCancel={handleCancelEdit} />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ flex: 2, padding: "30px" }}>
                            {typeof (props.blog.content) === "string" ?
                                parse(props.blog.content) :
                                <p>loading...</p>
                            }
                        </div>

                        <Image style={{ flex: 1 }}
                            width={300}
                            src={props.blog.thumnail}
                        />
                    </div>
                    <div style={{ display: "flex" }} onClick={() => handleLike(props.id)}>
                        <div style={{ cursor: "pointer" }} >
                            <IconText icon={LikeOutlined} text={props.blog.numLike} key="list-vertical-like-o" />
                        </div>  &nbsp; | &nbsp;
                        <IconText icon={MessageOutlined} text={numCmt} key="list-vertical-message" />
                    </div>

                    {/* ----------------------Binh luan---------------------------- */}
                    <div style={{ padding: "30px" }}>
                        <Title level={4}>Comment</Title>
                        <div style={{ padding: "10px" }}>
                            <CommentCom id={props.id} numCmt={numCmt} setNumCmt={(data) => setNumCmt(data)} setComments={(data) => setComments(data)} comments={comments} />
                        </div>
                    </div>
                </div>


            </Content >
        </div >
    )
}

export default ContentBlog