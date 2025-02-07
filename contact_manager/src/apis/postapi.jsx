import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const getcontacts = () => {
  return api.get("/contacts");
};

export const getcontact = (id) => {
  return api.get(`/contacts/${id}`);
};

export const createposts = async (post) => {
  try {
    const response = await api.post("/contacts", post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteposts = (id) => {
  return api.delete(`/contacts/${id}`);
};

export const updatecontact = (id, post) => {
  return api.put(`/contacts/${id}`, post);
};