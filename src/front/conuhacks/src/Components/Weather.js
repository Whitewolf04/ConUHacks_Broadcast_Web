import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Card } from 'semantic-ui-react'


const Weather = ({weatherData}) => (  
    <Card>
        <Card.Content>
            <Grid container sx={{p: 2}}>
                <Grid item xs={6} sx={{textAlign: 'center'}} justifyContent='space-evenly'>
                    <Typography sx={{fontWeight: 'bold', fontSize: 30}}>{weatherData.main.temp}&deg;C</Typography>
                </Grid>
                <Grid container direction={'column'} xs={6} sx={{p: 2, pt: 0}}>
                    <Grid item>
                        <Typography sx={{fontWeight: 'bold', fontSize: 18}}>{weatherData.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize: 12, fontWeight: 'light'}}>{weatherData.weather[0].main}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize: 12, fontWeight: 'light'}}>Humidity: {weatherData.main.humidity}%</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Card.Content>
    </Card>
)

function FetchWeather() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
  
        await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=bf4674d999fb74ac3508600b9f8e354a`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
      fetchData();
    }, [lat,long])
    
    return (
        <Box sx={{borderRadius: 1, color: 'white'}} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <Box></Box>
        )}
        
      </Box>
    );
}
class WeatherWidget extends React.Component {
    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                p: 2,
                pl: 3,
                pt: 0
            }}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <Box sx={{textAlign: "center", fontWeight: 'bold', pt: 3, pb: 2, color: 'white'}}>Weather</Box>
                <Box>
                    <FetchWeather/>
                </Box>
            </Box>
        )
    }
}

export default WeatherWidget;