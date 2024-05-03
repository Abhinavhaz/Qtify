
import React, { useEffect, useState } from "react";
import CardMusic from "../CardMusic/CardMusic";
import axios from "axios";
import Grid from "@mui/material/Grid";
import styles from "./Card.css"
import { Typography, Button } from "@mui/material";
import Carousel from "../Carousel/Carousel";

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

      {setIsTopAlbumCollapsed ?(<> 
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
            <CardMusic card={cardItem} songs={cardItem.songs} className="cards" />
          </Grid>
        ))}
      </Grid>
        
        </>):(<>
          <Carousel
                data={topAlbumCard}  />
        
        </>)}
      {/* <Grid container spacing={2} className="albums">
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
      </Grid> */}


<hr style={{ marginTop: '50px',border: '1.5px solid green' }} />


      
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
            <CardMusic card={cardItem} songs={cardItem.songs} className="cards" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Card;