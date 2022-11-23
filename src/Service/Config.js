import axios from "axios";
export const baseURL = 'https://testmarkand.herokuapp.com/'

const axiosInstance  = axios.create({
    baseURL : baseURL,
})


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return error;
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status===400){
        return error.response.data
    }else{
        return error.response.data;
    }
  });


export default axiosInstance;