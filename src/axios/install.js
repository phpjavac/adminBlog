import Api from './api';

const api = new Api();
// 状态码错误信息
api.$http.interceptors.request.use((res) => {
  const req = res;
  req.headers.Authorization = localStorage.token ? `Bearer ${localStorage.token}` : '';
  return req;
});
api.$http.interceptors.response.use((res) => {
  // loading close...
  console.log(res)
  return res;
},
  error => {
    if (error) {
      // 获取状态码
      const status = error.response.status;
      const errorText = error.response.data.message
      const errorData = {
        status,
        errorText
      }
      return Promise.reject(errorData);
    }
  });

const install = function apiFun(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return api;
      },
    },
  });
};

export default {
  install,
};
