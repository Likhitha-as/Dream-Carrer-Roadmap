import api from "./api";

// Submit Skill Test
export const submitTest = async (testData) => {
  const token = localStorage.getItem("token");

  const response = await api.post("/test/submit", testData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get Test Results
export const getResults = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/test/result", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};