import React, { useState, useEffect,useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../index';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { getAllPost } from '../../apis/postApi';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BlogsCom = (props) => {

  const data = props.posts

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data}

      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              height = {170}
              alt="logo"
              src= {item.thumnail}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
            title={<a href={"https://google.com"}>{item.title}</a>}
            description={"Bài viết của "+ item.username}
          />
          {item.description}
        </List.Item>
      )}
    />
  )
}

export default BlogsCom