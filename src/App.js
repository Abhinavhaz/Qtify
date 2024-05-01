import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
// import { fetchTopAlbums,fetchnewAlbums } from "./components/Api/APi"
import axios from  "axios"
import Card from './components/Card/Card';
import Song from './components/Songs/Songs';
import { useEffect,useState } from 'react';
import Faqs from './components/Faq/Faq';
import { green } from '@mui/material/colors';
// import Section from './components/Section/Section';
// import Card from './components/Card/Card';
function App() {

  
// const [Top,setTop]= useState([])
// const [newalbum, setNewalbum] = useState([])




// const fetchTop = async () => {
//   try {
//     const res = await fetchTopAlbums();
//     setTop(res);
// // console.log("top",res)
//   } catch (error) {
//     console.log(error);
//   }
// };



// const fetchnew=async()=>{
//   try {
//     const res = await fetchnewAlbums()
//     setNewalbum(res)
    
//   } catch (error) {
    
//   }
// }

// const fetchTopAlbums = async () => {
//   try {
//     const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
//     // return res.data;
//     setNewalbum(res.data)
//     console.log("res",res.data)
//   } catch (err) {
//     console.log(err);
//   }
// };

// useEffect(()=>{
// fetchTopAlbums()
// }, [])




  return (
    <div className="App">
      <Navbar />
      <Hero />
     <Card />

     
     <hr style={{ marginTop: '50px',border: '2px solid green' }} />
   

      <Song />
      <hr style={{ marginTop: '50px',border: '2px solid green' }} />


   <h1 className='heading'>FAQs </h1>

   <div className='faqs'>
   <Faqs />

</div>
    </div>
  );
}

export default App;
