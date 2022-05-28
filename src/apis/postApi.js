import axios from "axios";
//localhost:8080/api/v1/companies/bill


export function getAllPost(data) {
  return axios.get("http://localhost:8086/api/posts/all");
}

export function getAllPostByUser() {
  var url = "http://localhost:8086/api/posts/all/profile"
  var config = {
    headers: {
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.get(url,config);
}


export function createPost(data) {
  var url = "http://localhost:8086/api/posts/"
  var post = JSON.stringify( {
    "content": data.content,
    "title": data.title,
    "description": data.description,
    "thumnail": data.image,
    "category_id": data.type
  })
  var config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.post(url, post, config)
}

export function getPost(data) {
  var url = "http://localhost:8086/api/posts/get/" + data
  var config = {
    headers: {
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.get(url,config);
}

export function deletePost(data) {
  var url = "http://localhost:8086/api/posts/delete/" + data
  var config = {
    headers: {
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.delete(url,config);
}

export function getPostBySearch(searchContent) {
  var url = "http://localhost:8086/api/posts/search"
  var post = {
    "content": searchContent
  }
  var config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.post(url,post,config);
}

export function getPostByCategory(data) {
  var url = "http://localhost:8086/api/posts/get/category/" + data
  var config = {
    headers: {
      "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
    }
  }
  return axios.get(url,config);
}