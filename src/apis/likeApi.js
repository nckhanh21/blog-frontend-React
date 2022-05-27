import axios from "axios";

export function likeByUser(data) {
    var url = "http://localhost:8086/likedPost/count/" + data
    var config = {
      headers: {
        "Authorization": 'Bearer '+ localStorage.getItem("accessToken")
      }
    }
    return axios.get(url,config);
  }