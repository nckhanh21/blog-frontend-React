import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Button, Skeleton, Input, Form, Checkbox, notification } from 'antd';
import { createComment, getAllCommentsByPost } from '../../apis/commentApi';

const { TextArea } = Input;
const CommentCom = (props) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getAllCommentsByPost(props.id)
            .then(res => {setComments(res.data);
            console.log(res.data);
            })
    },[])

    const onFinish = (values) => {
        const data = {
            content: values.content,
            postId: props.id
        }
        createComment(data)
            .then(() => display())
            .catch(() => {
                notification["error"]({
                    message: "Lỗi khi đăng bình luận!",
                    placement: "topRight",
                })
            })
    };
    const display = () => {
        getAllCommentsByPost(props.id)
            .then(res => {
                props.setNumCmt(props.numCmt + 1 )
                setComments(res.data)
                notification["success"]({
                    message:
                        "Thêm bình luận thành công!",
                    placement: "topRight",
                });
            })
            .catch(() => {
                notification["error"]({
                    message: "Lỗi khi đăng bình luận!",
                    placement: "topRight",
                })
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.username}</a>}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
            <div style={{ margin: '30px', }}>
                <div style={{ padding: '10px' }}>
                    <Avatar src="https://joeschmoe.io/api/v1/random" /> Bình luận với tư cách {localStorage.getItem('username')}
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="content"
                        rules={[{ required: true, message: 'Nội dung comment không được để trống!' }]}
                    >
                        <TextArea rows={4} placeholder="Nhập bình luận của bạn"  />
                    </Form.Item>
                    <Button htmlType="submit">Bình luận</Button>
                </Form>

            </div>

        </>
    );
}

export default CommentCom;