import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID X-O-k78uah8ifc4EGVo-LV0f5zHoZdWVVHhToxNrQt8",
  },
});
