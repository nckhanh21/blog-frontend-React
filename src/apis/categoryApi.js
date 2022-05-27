import axios from "axios";


export function getAllCategory() {
    var url = "http://localhost:8086/api/category/getAll"
    var config = {
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("accessToken")
        }
    }
    return axios.get(url, config);
}
