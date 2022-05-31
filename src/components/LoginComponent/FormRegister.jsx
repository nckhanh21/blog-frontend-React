import React, { useState, UseEffect, useLayoutEffect } from 'react';
import { Form, Input, Button, Modal, notification } from 'antd';
import { createAccount, getAllUsername, vertifyAccount } from '../../apis/authApi';


const FormRegister = (props) => {

    const [listUsername, setListUsername] = useState([])
    const [vertifyText, setVertifyText] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log(vertifyText);
        vertifyAccount(vertifyText)
            .then(() => notification["success"]({
                message: "Đăng kí thành công",
                placement: "topRight",
            }))
            .then(()=> setIsModalVisible(false))
            .catch(()=> notification["error"]({
                message: "Đăng kí thất bại do bạn nhập vertify code không chính xác",
                placement: "topRight",
            }))
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    useLayoutEffect(() => {
        getAllUsername()
            .then(res => setListUsername(res.data))
            .catch(err => console.log(err))
    }, [])

    // const onFinish = (values) => {
    //     if (listUsername.indexOf(values.username) == -1) {
    //         if (values.password == values.confirmPassword) {
    //             console.log(values);
    //             createAccount(values)
    //                 .then(() => notification["success"]({
    //                     message: "Đăng kí thành công",
    //                     placement: "topRight",
    //                 }))
    //                 .then(() => {
    //                     props.setReload(!props.reload)
    //                     console.log("hihi");
    //                 })
    //                 .catch(() => notification["error"]({
    //                     message: "Đăng kí thất bại",
    //                     placement: "topRight",
    //                 }))
    //         }
    //         else {
    //             notification["error"]({
    //                 message: "Đăng kí thất bại do mật khẩu không trùng khớp",
    //                 placement: "topRight",
    //             });
    //         }
    //     }
    //     else{
    //         notification["error"]({
    //             message: "Tài khoản đã tồn tại",
    //             placement: "topRight",
    //         });
    //     }
    // };
    const onFinish = (values) => {
        if (listUsername.indexOf(values.username) == -1) {
            if (values.password == values.confirmPassword) {
                showModal()
                createAccount(values)
                    .then()
                    .catch(() => notification["error"]({
                        message: "Đăng kí thất bại",
                        placement: "topRight",
                    }))
            }
            else {
                notification["error"]({
                    message: "Đăng kí thất bại do mật khẩu không trùng khớp",
                    placement: "topRight",
                });
            }
        }
        else {
            notification["error"]({
                message: "Tài khoản đã tồn tại",
                placement: "topRight",
            });
        }
    };
    const onFinishFailed = (errorInfo) => {
        notification["error"]({
            message: "Đăng kí thất bại",
            placement: "topRight",
        });
    };


    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item

                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item

                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item

                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item

                label="Confirm"
                name="confirmPassword"
                rules={[
                    {
                        required: true,
                        message: 'Confirm your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Register
                </Button>

            </Form.Item>
            <Modal title="Vertify" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Chúng tôi vừa gửi cho bạn dòng code có 6 chữ số! Hãy nhập đúng để đăng ký</p>
                <Input placeholder="Vertify" onChange={(e)=> setVertifyText(e.target.value)}/>
            </Modal>
        </Form>
    )
}

export default FormRegister