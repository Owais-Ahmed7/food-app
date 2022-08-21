import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//images
import CookingHome1 from "../assets/cooking-home1.png";
import CookingHome2 from "../assets/cooking-home2.png";

const primColor = "#85C34A";

const SimplifyCooking = ({ imgDimen }) => {
  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }}}>
        <Box component="div" sx={{textAlign: 'center', mb: '3rem'}}>
            <Typography className="font-h" variant="h2" fontWeight="600" sx={{fontSize: { xs: '2.3rem', sm: '4rem' }, fontWeight: { xs: '500', sm: '600' }}}>
                Simplify Cooking At Home
            </Typography>
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box 
                    component="div" 
                    sx={{height: '100%', flexDirection: { xs: 'column', md: 'row' }}} 
                    display={'flex'}  
                    justifyContent={'center'}
                >
                    <Box component="div" className="col-flex" sx={{m: '2rem 0'}}>
                        <Typography className="font-h" variant="h4" fontWeight="600">
                            Save
                        </Typography>
                        <Typography className="font-p" variant="p" sx={{m: '1rem 0'}}>
                            Save all of your favorite recipes with a click of a button to Culineer for easy access - no matter where you are.
                        </Typography>
                        <br />
                        <Typography className="font-p" variant="p">
                            Organize  your recipes and share them with friends and family in collaborative cookbooks. 
                        </Typography>
                    </Box>
                    <Box component="div" className="col-flex">
                        <img style={{height: imgDimen.height, width: imgDimen.width}} className="homemade-img" src={CookingHome1} alt="" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box 
                    component="div" 
                    sx={{height: '100%', flexDirection: { xs: 'column', md: 'row' }}} 
                    display={'flex'}  
                    justifyContent={'center'}
                >
                    <Box component="div" className="col-flex" sx={{m: '2rem 0'}}>
                        <Typography className="font-h" variant="h4" fontWeight="600">
                            Shop
                        </Typography>
                        <Typography className="font-p" variant="p" sx={{m: '1rem 0'}}>
                            Add recipes to a shopping list with a single click.  
                        </Typography>
                        <br />
                        <Typography className="font-p" variant="p">
                            Share list with your shopping partner, so shopping is efficient and you always have what you need.
                        </Typography>
                    </Box>
                    <Box component="div" className="col-flex">
                        <img style={{height: imgDimen.height, width: imgDimen.width}} className="homemade-img" src={CookingHome2} alt="" />
                    </Box>
                </Box>
            </Grid>
        </Grid>    
        <Box component="div" sx={{textAlign: 'center', mb: '3rem'}}>
            <Button 
                sx={{
                    maxWidth: '150px', 
                    textTransform: 'capitalize',
                    mt: '2rem',
                    backgroundColor: primColor,
                    borderRadius: '25px',
                    border: `1px solid ${primColor}`,
                    color: '#FFF',
                    p: '1rem 2rem',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: primColor,
                        color: '#FFF',
                    }
                }}
            >
                Get Culineer
            </Button>
        </Box>
    </Box>
  )
}

export default SimplifyCooking;