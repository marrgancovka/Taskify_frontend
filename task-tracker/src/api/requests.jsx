import api from './api';

export const signUp = async (formData) => {
  const response = await api.post('/auth/signup', formData);
  return response.data;
};

export const login = async (formData) => {
  const response = await api.post('/auth/login', formData);
  return response.data;
};

export const getMyLists = async () => {
    const response = await api.get('/board');
    return response.data;
}
