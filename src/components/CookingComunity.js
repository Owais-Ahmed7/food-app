import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WorkImage from "../assets/work-img.png";
import { Button } from '@mui/material';

//image
import EnjoyImage from "../assets/enjoy.png";

const bgColor = '#fafafa';

const CookingComunity = () => {
  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }, backgroundColor: '#fafafa'}}>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={7}>
                <img src={EnjoyImage} alt="Enjoy cooking & building cooking comunity" style={{width: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <Box component="div" sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <Box component="div" className="banner">
                        <Typography className="font-p" variant="h4" fontWeight="700" sx={{m: '1rem 0', color: '#FFF', fontSize: { md: '38px' }}}>
                            Build your personalized cooking community while finding inspiration from others like you!
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>    
    </Box>
  )
}

export default CookingComunity;
