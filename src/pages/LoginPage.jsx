import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import FormCom from '../components/LoginComponent/FormCom';


const LoginPage = () => {
    

  return (
    <div>
        <div>
            Menu
        </div>
        <div style={{display:"flex", justifyContent: "center"}}>
            <div className="FormLogin">
                <FormCom/>
            </div>
            
        </div>
    </div>

  )
}

export default LoginPage