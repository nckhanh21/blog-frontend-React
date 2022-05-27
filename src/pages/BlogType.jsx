import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import Navbar from '../components/Navbar'
import ContentBlogType from '../components/BlogTypePage/ContentBlogType';
import HeaderBlogType from '../components/BlogTypePage/HeaderBlogType';


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
         <Navbar isLogin={isLogin} default={"1"}  handleLogout={handleLogout} username={username} />
         <Layout className="site-layout">
            <HeaderBlogType isLogin={isLogin}  handleLogout={handleLogout} username={username}/>
            <ContentBlogType isLogin={isLogin}  handleLogout={handleLogout} username={username} />
         </Layout>
         </Layout>
    </div>
  )
}

export default Homepage