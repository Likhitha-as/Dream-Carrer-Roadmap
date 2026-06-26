import api from "./api";

// Register User
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);

  // Save token
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};