import "./CSS/App.css";
import Discord from "./Components/Discord";
import Entertainment from "./Components/Entertainment";
import Twitter from "./Components/Twitter";
import GoogleCalendar from "./Components/Google Calendar";
import WeatherWidget from "./Components/Weather"
import Header from "./Header";
import Sales from "./Components/Sales"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import backgroundPic from "./main_background.webp";

const background = {
  backgroundContainer: {
    backgroundColor: '#0093E9',
    backgroundImage: `linear-gradient(160deg, #0093E9 30%, #80D0C7 70%)`,
    backgroundSize: `cover`,
    overflow: `auto`,
    height: `auto`
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
          <Grid container direction='row' justifyContent={'space-evenly'} alignItems='stretch'>
            <Grid item lg={6} xs={12} height='100%' sx={{ p: 1 }}>
              {/* Grid Big Left (MSTeams) */}
              <Twitter />
            </Grid>
            <Grid container direction='column' lg={6} xs={12} sx={{ pl: 1 }}>
              <Grid item sx={{ p: 1, pr: 0 }} height='12%'>
                <Sales />
              </Grid>
              <Grid container direction='row' height='88%'>
                <Grid item lg={6} xs={12} sx={{ p: 1, pt: 0 }} flexDirection='column' height='100%'>
                  <Grid item sx={{ pb: 2 }} height='35%'>
                    <Discord></Discord>
                  </Grid>
                  <Grid item sx={{ pt: 1 }} height='65%' >
                    {/* Grid Small Upper Right (Entertainment) */}
                    <GoogleCalendar></GoogleCalendar>
                  </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='space-between' lg={6} sx={{ pb: 1 }}>
                  <Grid item sx={{ pl: 3, pb: 3 }} height='35%' >
                    {/* Grid Small Upper Right (Entertainment) */}
                    <WeatherWidget />
                  </Grid>
                  <Grid item sx={{ pl: 3, pt: 1 }} height='65%' >
                    {/* Grid Small Upper Right (Entertainment) */}
                    <Entertainment></Entertainment>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Box sx={{ mt: 2 }}>
            <GoogleCalendar />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
