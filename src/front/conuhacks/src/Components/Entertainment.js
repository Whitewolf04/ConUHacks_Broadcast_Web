import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

var memes = [
    {
        title: 'One',
        src: 'https://images.ctfassets.net/tibe5eckkgzz/3uncAONBXhf4AjpwKguoeG/7250518a758de0f0c5992e2900a53940/meme.png'
    }, {
        title: 'Two',
        src: 'https://i.pinimg.com/originals/87/7a/13/877a13c05bd3699376c4124761062a6d.png'
    }, {
        title: 'Three',
        src: 'http://images7.memedroid.com/images/UPLOADED867/62d4f870aa98b.jpeg'
    }
];

class Entertainment extends React.Component {
    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                backgroundColor: 'transparent',
                color: 'white',  
            }}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <Box sx={{
                        textAlign: "center",
                        fontWeight: 'bold',
                        pt: 3
                    }}>Meme of the day</Box>
                    {/* <Box sx={{
                        textAlign: "center"
                    }}>Content</Box> */}
                    <Carousel sx={{
                        padding: "20px",
                        textAlign: "center"
                    }}>
                        {memes.map((meme) => {
                            return <Paper>
                                <img src={meme.src} alt="meme" style={{maxHeight: "250px"}}></img>
                            </Paper>
                        })}
                    </Carousel>
            </Box>
        )
    }
}

export default Entertainment;