import Api from './api';

const api = new Api();
console.dir();
api.$http.interceptors.request.use((res) => {
  const req = res;
  req.headers.Authorization = localStorage.token ? `Bearer ${localStorage.token}` : '';
  return req;
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
