// import { Tooltip,Chip } from "@mui/material";
// import React from "react";
// import styles from "./Card.css"

// function Card({data}){
// const type = data.type

// const getCard = (type)=>{
 
//     switch(type){

//         case  "album":{

//            const {image,follows,title,songs}  = data
//            return(
//             <>
//             <Tooltip title={`${songs.length}songs`} placement="top" arrow>
// <div className="wrapper">
// <div className="card">
// <img src={image}     alt="img"     />
// <div className="banner">
// <Chip
//   label={`${follows} follows`}
//   size="small"
// />

// </div>
// <div className="titleWrapper">
//     <p>
//         {title}
//     </p>
// </div>
// </div>
// </div>
//    </Tooltip>
//    </>
//            )
//         }


// case "songs":{
//     const {image,likes,title} = data.data


//     return(
//         <div className="wrapper">
// <div className="card">
// <img src={image} alt="immg" />


// <div className="banner">
//     <chip

//     size="small"
//     className="chip"
//     label = {`${likes}likes`}
    
    
//    />
       
    
// </div>
// <div className="titleWrapper">
//     <p className="para">{title}</p>
// </div>
// </div>
//         </div>
//     )
// }
// default:return <></>


//     }

// }


// return getCard(type)

// }
// export default Card
import React, { useEffect, useState } from "react";
import CardMusic from "../CardMusic/CardMusic";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";

const Card = () => {
  const [topAlbumCard, setTopAlbumCard] = useState([]);
  const [newAlbumCard, setNewAlbumCard] = useState([]);
  const [isTopAlbumCollapsed, setIsTopAlbumCollapsed] = useState(true);
  const [isNewAlbumCollapsed, setIsNewAlbumCollapsed] = useState(true);

  const fetchCardMusic = async (url) => {
    try {
      const resp = await axios.get(url);
      const cards = resp.data;
      return cards;
    } catch (err) {
      console.error("Error fetching card music:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      const newAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/new`
      );
      setTopAlbumCard(topAlbumData);
      setNewAlbumCard(newAlbumData);
    };

    fetchData();
  }, []);

  const handleTopAlbumCollapse = () => {
    setIsTopAlbumCollapsed(!isTopAlbumCollapsed);
  };

  const handleNewAlbumCollapse = () => {
    setIsNewAlbumCollapsed(!isNewAlbumCollapsed);
  };

  return (
    <>
      <div className="albums album-bar">
        <Typography>Top Albums</Typography>
        <Button onClick={handleTopAlbumCollapse}>
          {isTopAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      <Grid container spacing={2} className="albums">
        {topAlbumCard.map((cardItem, index) => (
          <Grid
            item
            key={cardItem.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            style={{
              display: isTopAlbumCollapsed && index > 5 ? "none" : "block",
            }}
          >
            <CardMusic card={cardItem} className="cards" />
          </Grid>
        ))}
      </Grid>
      <div className="albums album-bar">
        <Typography>New Albums</Typography>
        <Button onClick={handleNewAlbumCollapse}>
          {isNewAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      <Grid container spacing={2} className="albums">
        {newAlbumCard.map((cardItem, index) => (
          <Grid
            item
            key={cardItem.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            style={{
              display: isNewAlbumCollapsed && index > 5 ? "none" : "block",
            }}
          >
            <CardMusic card={cardItem} className="cards" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Card;