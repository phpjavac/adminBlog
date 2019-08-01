import axios from 'axios';

class Api {
  $http = axios.create({
    baseURL: '',
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  axios = axios.interceptors.response
  catch() {
    console.log(this);
  }

  register(data) {
    return this.$http.post('./api/user/register', data);
  }
  /** 登录接口 */
  login(data) {
    return this.$http.post('./api/user/login', data);
  }

  getUser() {
    return this.$http.get('./api/user');
  }

  addTag(data) {
    return this.$http.post('./api/article/addtag', data);
  }
  getTagList() {
    return this.$http.get('./api/article/taglist');

  }
  deleteTag(id) {
    return this.$http.delete(`./api/article/deletetag/${id}`);
  }
  createArticle(data) {
    return this.$http.post('./api/article/create', data);
  }
  getArticleList(data) {
    {
      return this.$http.get(`./api/article/list`, {
        params: { page: data.page, pageSize: data.pageSize }
      });
    }

  }
}

export default Api;
