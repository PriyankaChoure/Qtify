import axios from "axios";
const BACKEND_URL = "https://qtify-backend-labs.crio.do";

// method to fetch
export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    //   console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
