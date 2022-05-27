import axios from "axios";
import { parse } from 'html-react-parser';

export function getAllCommentsByPost(data) {
    var url = "http://localhost:8086/api/posts/comments/all/" + data
    var config = {
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("accessToken")
        }
    }
    return axios.get(url, config);
}

export function createComment(data) {
    var url = "http://localhost:8086/api/posts/comments/"
    var post = JSON.stringify( {
      "content": data.content,
      "username": localStorage.getItem('username'),
      "post_id": parseInt(data.postId)
    })
    var config = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
      }
    }
    return axios.post(url, post, config)
  }