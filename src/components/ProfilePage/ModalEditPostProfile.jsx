import React, { useState } from 'react';
import { Modal, Button, Input, Select, Form, notification } from 'antd';
import { Editor } from "@tinymce/tinymce-react";
import parse from 'html-react-parser';
import {
    PlusOutlined,
    CopyOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { createPost, createPost1, getAllPost, getAllPostByUser } from '../../apis/postApi';

const { TextArea } = Input;

const ModalEditPostProfile = (props) => {
    console.log(props.id);
    const [form] = Form.useForm();
    const [contentText, setContentText] = useState(props.blog.content)

    const handleChange = (content) => {
        setContentText(content)
    }

    const handleSubmit = (values) => {
        console.log(values);
        values.content = contentText
        props.handleOk()
        createPost(values)
            .then(() => {
                displayData()
            })
            .catch(() => {
                notification["error"]({
                    message: "Lỗi khi sửa bài viết",
                    placement: "topRight",
                });
            })
    }

    const displayData = () => {
        getAllPostByUser()
            .then(res => {
                props.setPosts(res.data.reverse())
                notification["success"]({
                    message:
                        "Sửa bài viết thành công!",
                    placement: "topRight",
                });
            })
            .catch((error) => console.log(error))
    }
    return (
        <div>
            <Modal title="Sửa bài viết" visible={props.isModalVisible} onOk={form.submit} onCancel={props.handleCancel}>
                <Form form={form} onFinish={handleSubmit}>
                    <Form.Item
                        label=""
                        name="title"
                        
                    >
                        <Input defaultValue={props.blog.title} placeholder="Tiêu đề" />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="description"
                        
                    >
                        <Input defaultValue={props.blog.description} placeholder="Mô tả" />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="type">
                        <Select placeholder="Thể loại" defaultValue={{ key: props.blog.category_id}}>
                            {props.category.map((item) => (
                                <Select.Option value={item.id}>{item.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    
                    <Editor
                        apiKey="fafzvpc2wi6vrsy5rl8r11lq85n6fin7ruy0ltwd8wl7hy9b"
                        value={contentText}
                        init={{
                            height: 500,
                            menubar: false
                        }}
                        onEditorChange={handleChange}
                    />
                    <Form.Item
                        style={{ marginTop: '10px' }}
                        label="Hình ảnh"
                        name="image"
                        
                    >
                        <Input
                            style={{ width: 'calc(100% - 200px)', marginBottom: "10px" }}
                            defaultValue= {props.blog.thumnail}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalEditPostProfile