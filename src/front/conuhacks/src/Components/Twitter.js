import React from "react";
import Box from "@mui/material/Box";
import {TwitterTimelineEmbed} from "react-twitter-embed";

class Twitter extends React.Component {
  render() {
    return (
      <Box>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FabrizioRomano"
          options={{height: 550}}
        />
      </Box>
    );
  }
}

export default Twitter;
