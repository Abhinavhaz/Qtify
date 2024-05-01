import React from "react";
import axios from  "axios"




// export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
    return res.data;
    console.log("res",res.data)
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchnewAlbums =async ()=>{
    try {
        const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}