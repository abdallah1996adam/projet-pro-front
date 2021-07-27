import api from "./api";

const tourService = {
  getAll: async () => {
    return await api.get("http://localhost:4444/api/tours");
  },
};

export default tourService;
