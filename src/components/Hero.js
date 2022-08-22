import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//images
import HeaderImage from "../assets/Home.png";

const primColor = "#85C34A";

const Hero = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1, padding: { xs: '2rem', sm: '5rem' }, pt: '3rem !important'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={7} className="col-flex" position="relative" sx={{ alignItems: 'left'}}>
                    <Box component="div" sx={{ textAlign: { xs: 'left'}}}>
                        <Typography className="h1 font-h" variant="h1" component="div" sx={{color: "#FFF", fontSize: {xs: '2rm', md: '4.5rem'}, mb: '1rem' }}>
                            The Ultimate Cooking 
                            <br />
                            Community
                        </Typography>
                        <p variant="p" className="font-p hero-p">
                            Save Organize and shop recipes Find local farmers Connect  with other home cook like you!
                        </p>
                        {/* <Box component="div" display="flex" marginTop="1rem" sx={{ justifyContent: { xs:'center', md: 'left' } }}>*/}
                        <Button 
                            sx={{
                                maxWidth: '150px', 
                                textTransform: 'capitalize',
                                mt: '2rem',
                                backgroundColor: primColor,
                                borderRadius: '22px',
                                border: `2px solid ${primColor}`,
                                fontWeight: 600,
                                color: "#FFF",
                                p: '0.7rem 1.5rem',
                                '&:hover': {
                                    // opacity: 0.7,
                                    backgroundColor: "rgba(250, 250, 250, 0.1)",
                                    border: `2px solid ${primColor}`,
                                    color: primColor
                                }
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={5} sx={{pt: '0', textAlign: { xs: 'center', md: 'right', lg: 'center' }}}>
                    <img className="header-img1" src={HeaderImage} alt="Header Image" />
                </Grid>
            </Grid>  
        </Box>
    </div>
  );
}

export default Hero;