import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//images
import HeaderImage from "../assets/Home.png";
import peopleIcon from "../assets/people-icon.png";
import searchIcon from "../assets/search-icon.png";
import downloadIcon from "../assets/download-icon.png";
import GooglePlay from "../assets/google.png";
import ApplePlay from "../assets/apple.png";
import Arrow from "../assets/arrow-line.png";

const primColor = "#85C34A";

const Download = () => {

  const [ vpWidth, setvpWidth ] = React.useState(0);
  
  React.useEffect(() => {
    setvpWidth(window.innerWidth); 
  })

  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }}}>
        <Grid container spacing={2} sx={{paddingBottom: { xs: '2rem', sm: '5rem' }}}>
            <Grid item xs={12} md={4} sx={{textAlign: {xs: 'center', md: 'center', position: 'relative'}}}>
                <Box component="div">
                    <img className="app-icons" src={downloadIcon} alt="Download App" />
                    <p className="font-p" style={{margin: '1rem auto', width: '80%'}}>
                        Download Culineer from the app store or Google Play
                    </p>
                </Box>
                <img className="arrow-line" src={Arrow} alt="Arrow Line" />
                </Grid>
                <Grid item xs={12} md={4} sx={{textAlign: {xs: 'center', md: 'center'}, mt: {xs: '10rem', md: '0'}, position: 'relative' }}>
                <Box component="div">
                    <img className="app-icons" src={searchIcon} alt="Search App" />
                    <p className="font-p" style={{margin: '1rem auto', width: '80%'}}>
                        Search for recipes (or add your own)
                    </p>
                </Box>
                <img className="arrow-line" src={Arrow} alt="Arrow Line" />
                </Grid>
                <Grid item xs={12} md={4} sx={{textAlign: {xs: 'center', md: 'center' }, mt: {xs: '10rem', md: '0'},}}>
                <Box component="div">
                    <img className="app-icons" src={peopleIcon} alt="App Users" />
                    <p className="font-p" style={{margin: '1rem auto', width: '80%'}}>
                        Follow a farm community and other home cooks
                    </p>
                </Box>
            </Grid>
        </Grid>    
        <Grid container spacing={2} paddingTop={5}>
            <Grid item xs={12} md={5} sx={{pl: '2rem', borderRadius: '30px', textAlign: 'center', maxHeight: '400px', overflow: 'hidden', backgroundColor: '#e7f3db'}}>
                <img className="header-img" src={HeaderImage} style={{width: '50%'}} alt="Header Image" />
            </Grid>
            <Grid item xs={12} md={7}>
                <Box sx={{height: '100%'}} className="col-flex">
                    <Typography className="font-h" variant="h3" fontWeight="600" marginBottom={2} sx={{display: { xs: 'none', md: 'block' }}}>
                        Download Culinner Today to get started!
                    </Typography>
                    <Typography className="font-h" variant="h4" fontWeight="600" marginBottom={2} sx={{display: { xs: 'block', md: 'none'}, fontSize: {xs:'2rem', md: '4rem'}}}>
                        Download Culinner Today!
                    </Typography>
                    <Box component="div" sx={{display: 'flex'}}>
                        <Button sx={{p: '0', width: { xs: '150px' }}}>
                            <img src={GooglePlay} alt="Google Play" style={{width: '100%'}} />
                        </Button>
                        <Button sx={{p: '0', ml: '1rem', width: { xs: '150px' }}}>
                            <img src={ApplePlay} alt="Apple Play" style={{width: '100%'}} />
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Download
