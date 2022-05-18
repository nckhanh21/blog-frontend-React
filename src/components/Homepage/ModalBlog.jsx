import React, { useState } from 'react';
import { Modal, Button, Input, Tooltip, Form,notification } from 'antd';

import {
    PlusOutlined,
    CopyOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { createPost, createPost1, getAllPost } from '../../apis/postApi';

const { TextArea } = Input;

const ModalBlog = (props) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        props.handleOk()
        createPost(values)
            .then(() => {
                displayData()
            })
            .catch(() =>{
                notification["error"]({
                    message: "Add company failed",
                    placement: "topRight",
                  });
            })
        
        
    }

    const displayData = () =>{
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
                        name="content"
                        rules={[
                            { required: true, message: "Vui lòng nội dung bài viết" },
                        ]}
                    >
                        <TextArea rows={6} placeholder="Mô tả bài viết" />
                    </Form.Item>
                    <Form.Item
                        label="Hình ảnh"
                        name="image"
                        rules={[
                            { required: true, message: "Vui lòng nội dung bài viết" },
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