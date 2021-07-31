import api from "./api";

const tourService = {
  getAll: async () => {
    return await api.get("tours");
  },
  getById: async (id)=>{
    return await api.get('tour:'+ id)
  }
};

export default tourService;
