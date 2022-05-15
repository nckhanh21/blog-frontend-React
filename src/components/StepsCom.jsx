import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import '../index';
import { Layout, Menu } from 'antd';
import { Steps } from 'antd';
import { PoundOutlined, UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import Blogs from '../components/Blogs'
const { Step } = Steps;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const StepsCom = () => {
    const [step, setStep] = useState(0);
  const handleClickNext = () => {
    setInterval(() => { setStep((prev) => prev + 1); }, 1000);
  }
  return (
      
    <Steps current={step}>
    <Step title="Login" icon={step === 0 ? <LoadingOutlined /> : <UserOutlined />} />
    <Step title="Verification" icon={step === 1 ? <LoadingOutlined /> : <SolutionOutlined />} />
    <Step title="Pay" icon={step === 2 ? <LoadingOutlined /> : <PoundOutlined />} />
    <Step title="Done" icon={step === 3 ? <LoadingOutlined /> : <SmileOutlined />} />
  </Steps>
  )
}

export default StepsCom