import React from "react";

import Player from "../../components/player";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
  
  const [genres, setGenres] = useState();
  const [songs, setSongs] = useState();
    
  const fetchGenres = async () => {
    setGenres( await axios.get("http://localhost:3001/genres").data);
   }
  
 
  useEffect(() => {
    
    fetchGenres();
    
  },[]);

 const fetchSongs = async () => {
      setSongs( await axios.get(`http://localhost:3001/songs?genre=${genres}&qtd=10`).data);
     }

  useEffect(() => {
    
   fetchSongs();
    
  },[genres]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(99.52deg, #A13893 5.69%, #629BEE 97.44%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "900px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          
          gap: "20px 0",
        }}
        >
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        
          <Player />
        </Box>

        <Player />
        <Player />
        <Player />
        <Player />
      </Box>
    </Box>
  );
};

export default Game;
