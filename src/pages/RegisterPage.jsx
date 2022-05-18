import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import FormCom from '../components/LoginComponent/FormCom';
import { Navigate, Link } from "react-router-dom";

const RegisterPage = () => {
    const username = localStorage.getItem('username')
    const [isLogin, setIsLogin] = useState(username != null)

    return (

        <div>
            {isLogin == false ?
                <div>
                    <div>
                        Menu
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="FormLogin">
                            <FormCom callback={() => setIsLogin(true)}/>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Navigate to={"/"} />
                </div>
            }

        </div>


    )
}

export default RegisterPage