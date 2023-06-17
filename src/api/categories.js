import axios from '../axios';

const categoriesApi = {
  async getCategories() {
    try {
      return await axios.get('/categories');
    } catch (e) {
      return e.response;
    }
  },
  async getCategory(id) {
    try {
      return await axios.get(`/categories/${id}`);
    } catch (e) {
      return e.response;
    }
  },
  async getMemberCategories(id) {
    try {
      return await axios.get(`/members/${id}/categories/`);
    } catch (e) {
      return e.response;
    }
  },
  async getIncomesCategories(id) {
    try {
      return await axios.get(`/incomes/${id}/categories`);
    } catch (e) {
      return e.response;
    }
  },
  async getExpensesCategories(id) {
    try {
      return await axios.get(`/expenses/${id}/categories`);
    } catch (e) {
      return e.response;
    }
  },
};

export default categoriesApi;
