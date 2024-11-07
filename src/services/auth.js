import axios from "axios";

const API_URL = "http://localhost:3333/api/auth";

export const register = async (fullname, email, password) => {
  try {
    console.log("Erorr");
    const response = await axios.post(`${API_URL}/register`, {
      fullname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error.response.data;
  }
};
