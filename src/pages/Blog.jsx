import React, { useState , useEffect} from 'react'
import { Layout, Menu, Breadcrumb, Image, Avatar } from 'antd';
import ContentCom from '../components/Homepage/ContentCom'
import HeaderCom from '../components/HeaderCom'
import Navbar from '../components/Navbar'

import { getPost } from './../apis/postApi';
import{ useLocation, } from "react-router-dom";
import HeaderBlog from '../components/BlogPage/HeaderBlog';
import ContentBlog from '../components/BlogPage/ContentBlog';


const Blog = () => {
    const location = useLocation()
    let listpath = location.pathname.split('/')
    const id = listpath[listpath.length - 1]

    const username = localStorage.getItem('username')
    const [isLogin, setIsLogin] = useState(username != null)
    const [post, setPost] = useState({})

    useEffect(()=> {
        getPost(id)
            .then((res) => {
                setPost(res.data)
            })
    },[])

    const handleLogout = () => {
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Navbar isLogin={isLogin} handleLogout={handleLogout} username={username} />
                <Layout className="site-layout">
                    <HeaderBlog isLogin={isLogin} handleLogout={handleLogout} username={username} />
                    <ContentBlog setPost={(data) => setPost(data)} id={id} blog={post} isLogin={isLogin} handleLogout={handleLogout} username={username} />
                </Layout>
            </Layout>

        </div>
    )
}

export default Blog