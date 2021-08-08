import api from "./api";

const userService = {
  signup: async (firstName, lastName,email, password) => {
    const user = { firstName, lastName, email, password };
    return await api.post("signup", user);
  },
  login: async (email, password) => {
    const user = { email, password };
    return await api.post("login", user);
  },
  getById: async(id)=>{
    return await api.post('/user/:id', id)
  }
};

export default userService;
