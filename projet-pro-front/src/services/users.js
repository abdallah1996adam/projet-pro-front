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
  getById: async()=>{
    return await api.post('profile')
  },
  addUserImg : async(imgData)=>{
    return await api.post('userImage',imgData)
  },
  updatePassword : async(password)=>{
    return await api.put('user', {password})
  }
};

export default userService;
