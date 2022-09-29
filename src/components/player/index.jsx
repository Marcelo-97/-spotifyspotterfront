import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";



function Player() {
  return (
    <Card sx={{ display: "flex", background: "#1e1e1e" , width:'40%', borderRadius:'13px'}}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ color: "white" }}>
            Live From Space
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ color: "#a1a1a1" }}
          >
            Mac Miller
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause" sx={{'&:hover':{background:'grey'}}}>
            <PlayArrowIcon sx={{ height: 38, width: 38, color: "white" }} />
          </IconButton>
        </Box>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default Player;
