import React, { useState, useLayoutEffect } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';


const FormCom = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const onFinish = (values) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": values.username,
            "password": values.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://localhost:8086/api/auth/login", requestOptions)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                }
                else {
                    throw Error(response.status)
                }
            })

            .then(result => {
                console.log("result", result)
                localStorage.setItem("accessToken", result.authenticationToken)
                localStorage.setItem("username", result.username)
            })
            .then(props.callback)
            .catch(error => {
                notification["error"]({
                    message: "Tài khoản hoặc mật khẩu không đúng! :)",
                    placement: "topRight",
                });
            });


        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(username, password);
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
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormCom