import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Tabs } from 'antd';
import FormCom from '../components/LoginComponent/FormCom';
import { Navigate, Link } from "react-router-dom";
import FormRegister from '../components/LoginComponent/FormRegister';

const { TabPane } = Tabs;

const LoginPage = () => {
    const username = localStorage.getItem('username')
    const [reload, setReload] = useState(false);
    const [isLogin, setIsLogin] = useState(username != null)

    return (

        <div style={{ width: '100%', height: '500px', backgroundImage: 'url("https://dichvuquangcao.vn/wp-content/uploads/2021/04/yty.png' }}>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Login" key="1">
                    {isLogin == false ?
                        <div style={{ marginTop: "10%", }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="FormLogin">
                                    <FormCom callback={() => setIsLogin(true)} />
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <Navigate to={"/"} />
                        </div>
                    }
                </TabPane>
                <TabPane tab="Register" key="2">
                    {isLogin == false ?
                        <div style={{ marginTop: "5%", }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="FormLogin">
                                    <FormRegister reload={reload} setReload={(value) => setReload(value)} />
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <Navigate to={"/"} />
                        </div>
                    }
                </TabPane>

            </Tabs>

        </div>


    )
}

export default LoginPage