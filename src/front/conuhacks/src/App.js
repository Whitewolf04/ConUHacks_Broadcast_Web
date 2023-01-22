import "./CSS/App.css";
import Discord from "./Components/Discord";
import Entertainment from "./Components/Entertainment";
import MSTeams from "./Components/MSTeams";
import GoogleCalendar from "./Components/Google Calendar";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import backgroundPic from "./main_background.webp";

const background = {
  backgroundContainer: {
    height: 800,
    // backgroundImage: `url(${backgroundPic})`,
    backgroundColor: '#0093E9',
    backgroundImage: `linear-gradient(160deg, #0093E9 30%, #80D0C7 70%)`,
    backgroundSize: `cover`,
  },

  backgroundBlur: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
};

function App() {
  return (
    <Box
      sx={{ background: backgroundPic }}
      style={background.backgroundContainer}
    >
      <Box style={background.backgroundBlur}>
        <Box>
          <Header />
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid container direction={'row'} justifyContent={'space-evenly'} columnSpacing={1}>
            <Grid item lg={6} md={8} xs={12} height='fit-content' sx={{p:1}}>
              {/* Grid Big Left (MSTeams) */}
              <MSTeams />
            </Grid>
            <Grid container direction={'column'} justifyContent={'space-between'} alignItems={'stretch'} lg={6} md={4} sx={{pl: 1, pr: 1}}>
              <Grid container direction={'row'} justifyContent={'space-between'} height='fit-content'>
                <Grid item lg={6} xs={12} sx={{p:1}}>
                  {/* Grid Small Upper left (Discord) */}
                  <Discord></Discord>
                </Grid>
                <Grid item lg={6} xs={12} sx={{p:1}}>
                  {/* Grid Small Upper Right (Entertainment) */}
                  <Entertainment></Entertainment>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{p:1}}>
                <GoogleCalendar></GoogleCalendar>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
