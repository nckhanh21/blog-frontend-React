import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import ContentCom from '../components/Homepage/ContentCom'
import HeaderCom from '../components/HeaderCom'
import Navbar from '../components/Navbar'


const Homepage = () => {

  const username = localStorage.getItem('username')
  const [isLogin, setIsLogin] = useState(username != null)

  const handleLogout = () => {
    localStorage.clear()
    setIsLogin(false)
  }
  return (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
         <Navbar isLogin={isLogin}  handleLogout={handleLogout} username={username} />
         <Layout className="site-layout">
            <HeaderCom isLogin={isLogin}  handleLogout={handleLogout} username={username}/>
            <ContentCom isLogin={isLogin}  handleLogout={handleLogout} username={username} />
         </Layout>
         </Layout>
    </div>
  )
}

export default Homepage