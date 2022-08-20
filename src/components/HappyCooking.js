import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//image
import HappyImage from "../assets/happy.png";

const bgColor = '#fafafa';

const HappyCooking = () => {
  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }, backgroundColor: '#fafafa'}}>
        <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
                <img src={HappyImage} alt="Mockup" style={{width: '100%'}} />
            </Grid>
            <Grid item xs={12} md={5}>
                <Box component="div" sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <Box component="div" className="banner">
                        <Typography className="font-p" variant="h4" sx={{m: '1rem 0', color: '#FFF', fontSize: { xs: '20px', sm: '38px' }}}>
                            Spend less time planning and more time creating and enjoying home-cooked meals.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>    
    </Box>
  )
}

export default HappyCooking
