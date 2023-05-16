import axios from "axios";
const Backend_URL="https://qtify-backend-labs.crio.do";

export const fetchTopSongs=async()=>{
    try{
    const response= await axios.get(`${Backend_URL}/albums/top`);
    return response.data;
    }
    catch(e){
       console.log(e); 
    }
}






// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new