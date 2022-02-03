import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "fc63f9f5b3e1d536229b41a1041c4e25",
        language: 'ko-KR'
    }
});

export default axiosInstance;
