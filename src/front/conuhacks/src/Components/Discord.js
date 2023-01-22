import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { Typography } from "@mui/material";

class ChatFeed extends React.Component {
  state = {feed: []};

  componentDidMount() {
    this.fetchDiscord();
    this.interval = setInterval(this.fetchDiscord, 10000);
  }

  render() {    
    return (
      this.state.feed.map(content => {
        return <Box sx={{ p: 1, color: "white", bgcolor: "#2C2F33", borderRadius: 0.9 }}>
          <Typography sx={{fontStyle: 'italic', fontSize: '50%'}}>#announcements</Typography>
          <Typography sx={{fontSize: '90%'}}>{content}</Typography>
        </Box>
      })
    );
  }

  fetchDiscord = () => {
    axios.get('http://localhost:8080/api/getDiscord')
      .then(res => {
        const feed = res.data;
        this.setState({ feed });
      })
  }
}

class Discord extends React.Component {
  render() {
    return (
      <Box
        sx={{
          borderRadius: 3,
          bgcolor: "transparent",
          height: '100%',
        }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}
      >
        <Box
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            pt: 3,
          }}
        >
          Discord
        </Box>
        <Box sx={{ pl: 2, pr: 2, pt: 2, pb: 1 }}>
          <ChatFeed />
        </Box>
      </Box>
    );
  }
}

export default Discord;
