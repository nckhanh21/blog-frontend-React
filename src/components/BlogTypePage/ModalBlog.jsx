import React, { useState,useEffect } from 'react';
import { Modal, Button, Input, Select, Form, notification } from 'antd';
import { Editor } from "@tinymce/tinymce-react";
import {
    PlusOutlined,
    CopyOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { createPost, createPost1, getAllPost } from '../../apis/postApi';
import { getAllCategory } from '../../apis/categoryApi';

const { TextArea } = Input;

const ModalBlog = (props) => {
    const [form] = Form.useForm();
    const [contentText, setContentText] = useState("")
    const handleChange = (content) => {
        setContentText(content)
    }
    const handleSubmit = (values) => {
        values.content = contentText
        props.handleOk()
        createPost(values)
            .then(() => {
                displayData()
            })
            .catch(() => {
                notification["error"]({
                    message: "Lỗi khi đăng bài viết",
                    placement: "topRight",
                });
            })
    }

    const displayData = () => {
        getAllPost()
            .then(res => {
                props.setPosts(res.data.reverse())
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
            <Modal title="Thêm bài viết" visible={props.isModalVisible} onOk={form.submit} onCancel={props.handleCancel}>

                <Form form={form} onFinish={handleSubmit}>
                    <Form.Item
                        label=""
                        name="title"
                        rules={[
                            { required: true, message: "Vui lòng thêm tiêu đề bài viết" },
                        ]}
                    >
                        <Input placeholder="Tiêu đề" />
                    </Form.Item>


                    <Form.Item
                        label=""
                        name="description"
                        rules={[
                            { required: true, message: "Vui lòng thêm mô tả" },
                        ]}
                    >
                        <Input placeholder="Mô tả" />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="type">
                        <Select placeholder="Thể loại">
                            {props.category.map((item)=>(
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
                        rules={[
                            { required: false, message: "Vui lòng thêm ảnh" },
                        ]}
                    >
                        <Input
                            style={{ width: 'calc(100% - 200px)', marginBottom: "10px" }}
                            defaultValue=""
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalBlog