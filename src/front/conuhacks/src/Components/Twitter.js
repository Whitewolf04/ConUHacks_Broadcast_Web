import React from "react";
import Box from "@mui/material/Box";
import TwitterTimelineEmbed from "./TwitterTimelineEmbed";

class Twitter extends React.Component {
  render() {
    return (
      <Box height='100%'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FabrizioRomano"
          tweetLimit={1}
        />
      </Box>
    );
  }
}

export default Twitter;
