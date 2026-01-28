import axios from "@shared/utils/axios";

export const homeApi = {
  // Fetch home data from API
  fetchHomeData: async () => {
    const response = await axios.get("/home");
    return response.data;
  },
};
