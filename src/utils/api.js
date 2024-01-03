import axios from 'axios';

const BASE_URL ="https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    // bearer me space rakhna jauri hai...
    Authorization:"bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
try {
    const {data}=await axios.get(BASE_URL + url,{
        headers,
        params,
    });
    return data;
} catch (error) {
    console.log(error);
    return error;
}
}