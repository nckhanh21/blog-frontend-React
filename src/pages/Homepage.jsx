import React from 'react'
import { Layout, Menu, Breadcrumb,Image,Avatar } from 'antd'; 
import ContentCom from '../components/ContentCom'
import HeaderCom from '../components/HeaderCom'
import Navbar from '../components/Navbar'


const Homepage = () => {
  return (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
         <Navbar/>
         <Layout className="site-layout">
            <HeaderCom/>
            <ContentCom/>
         </Layout>
         </Layout>
    </div>
  )
}

export default Homepage