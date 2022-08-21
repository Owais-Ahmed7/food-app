import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WorkImage from "../assets/frame.png";
import { Button } from '@mui/material';

const primColor = "#85C34A";
const list = [
    'Grocery shopping simplified',
    'Recipes organized and easily accessed',
    'Cooking community provides support and inspiration',
    'More moments to enjoy homemade food',
]

const Work = () => {
  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }}}>
        <Box component="div" sx={{textAlign: 'center', mb: '3rem'}}>
            <Typography className="font-h" variant="h2" fontWeight="600" sx={{fontSize: { xs: '2.7rem', sm: '4rem' }}}>
                How it works
            </Typography>
            <Typography className="font-p" variant="p" sx={{letterSpacing: '2px'}}>
                Making cooking at home simpler, more inspired, and connected
            </Typography>
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={WorkImage} alt="How it work" style={{width: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box component="div" height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <ul className="work-list">
                        {(list || []).map((item, idx) => {
                            return (
                                <li className="font-p" key={idx}>{item}</li>
                            )
                        })}
                    </ul>
                    <Button 
                        sx={{
                            maxWidth: '150px', 
                            textTransform: 'capitalize',
                            backgroundColor: primColor,
                            borderRadius: '25px',
                            color: '#FFF',
                            p: '1rem 1rem',
                            '&:hover': {
                                backgroundColor: primColor,
                                color: '#FFF',
                                opacity: 0.7
                            }
                        }}
                        >
                        Get Culineer
                    </Button>
                </Box>
            </Grid>
        </Grid>     
    </Box>
  )
}

export default Work;
