import axios from "axios";

const courseAPI = axios.create({
    baseURL : 'http://elearning0706.cybersoft.edu.vn/QuanLyKhoaHoc/api'
})

export default courseAPI