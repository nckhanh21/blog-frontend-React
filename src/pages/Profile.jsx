import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import Navbar from '../components/Navbar'
import ContentProfile from '../components/ProfilePage/ContentProfile';
import HeaderProfile from '../components/ProfilePage/HeaderProfile';


const Profile = (props) => {

  const username = localStorage.getItem('username')
  const [isLogin, setIsLogin] = useState(username != null)

  const handleLogout = () => {
    localStorage.clear()
    setIsLogin(false)
  }
  return (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
         <Navbar isLogin={isLogin} default={"2"}  handleLogout={handleLogout} username={username} />
         <Layout className="site-layout">
            <HeaderProfile isLogin={isLogin}  handleLogout={handleLogout} username={username}/>
            <ContentProfile isLogin={isLogin}  handleLogout={handleLogout} username={username} />
         </Layout>
         </Layout>
    </div>
  )
}

export default Profile