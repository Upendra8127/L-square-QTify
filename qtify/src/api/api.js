import axios from "axios";
const Backend_URL="https://qtify-backend-labs.crio.do";

export const fetchTopSongs=async()=>{
    const response= await axios.get(`${Backend_URL}/albums/top`);
    return response.data;
}






// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new