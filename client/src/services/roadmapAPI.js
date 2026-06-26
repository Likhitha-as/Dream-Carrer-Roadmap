import api from "./api";

// Get Roadmap by Career
export const getRoadmap = async (career) => {
  const token = localStorage.getItem("token");

  const response = await api.get(`/roadmap/${career}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Create Roadmap (Admin or Testing)
export const createRoadmap = async (roadmapData) => {
  const token = localStorage.getItem("token");

  const response = await api.post("/roadmap", roadmapData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};