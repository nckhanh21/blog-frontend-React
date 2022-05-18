import axios from "axios";

export function createAccount(data) {
    var url = "http://localhost:8086/api/auth/signup"
    var account = JSON.stringify( {
      "email": data.email,
      "username": data.username,
      "password": data.password,
    })
    var config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    return axios.post(url, account,config)
  }


  export function getAllUsername() {
    return axios.get("http://localhost:8086/api/auth/getAll");
  }
  