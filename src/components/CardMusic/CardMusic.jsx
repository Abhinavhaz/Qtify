
import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Chip,Tooltip } from "@mui/material";
import styles from "./CardMusic.css"
const CardMusic = ({ card ,songs}) => {
  let length= songs.length

  return (
    <div>
      <Tooltip title={`${length} songs`} placement="top" arrow>
      <Card>
        <CardMedia className="cardmedia"
          component="img"
          alt="image"
          image={card.image}
        />
        <CardContent>
          <Chip 
            label={`${
              card.follows
                ? `Followers: ${card.follows}`
                : `Likes: ${card.likes}`
            }`}
          />
        </CardContent>
      </Card>
      <Typography variant="h6">{card.title}</Typography>
      </Tooltip>
    </div>
  );
};

export default CardMusic;
