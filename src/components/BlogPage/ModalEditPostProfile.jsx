import React, { useEffect, useState } from 'react';
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
import { createPost, createPost1, EditPost, getAllPost, getAllPostByUser, getPost } from '../../apis/postApi';

const { TextArea } = Input;

const ModalEditPostProfile = (props) => {
    const [form] = Form.useForm();
    const [contentText, setContentText] = useState("")

    const handleChange = (content) => {
        setContentText(content)
    }

    useEffect(() => {
        setContentText(props.blog.content)
    },[props])

    const handleSubmit = (values) => {
        if (values.title == undefined) {
            values.title = props.blog.title
        }
        if (values.description == undefined) {
            values.description = props.blog.description
        } 
        if (values.image == undefined) {
            values.image = props.blog.thumnail
        } 
        if (values.type == undefined) {
            values.type = props.blog.category_id
        } 
        values.content = contentText
        values.id = props.blog.id
        values.numLike = props.blog.numLike
        values.createdOn = props.blog.createdOn
        props.handleOk()
        EditPost(values)
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
        getPost(props.blog.id)
            .then(res => {
                props.setPost(res.data)
                notification["success"]({
                    message:
                        "Thêm bài viết thành công!",
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
                        <Input defaultValue={props.blog.title} value={props.blog.title} placeholder="Tiêu đề" />
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
                        <Select placeholder="Thể loại" defaultValue={{ key: (props.blog.category_id)}}>
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