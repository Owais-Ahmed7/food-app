import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//images
import Homemade1 from "../assets/homemade1.png";
import Homemade2 from "../assets/homemade2.png";

const primColor = "#85C34A";
const homeMade = [
    {
        h4: 'Create',
        p1: 'Spend less time planning and more time creating and enjoying homemade food.',
        p2: 'Find new inspiration from other Culineer members.'
    },
    {
        h4: 'Connect',
        p1: 'Join cooking communities for support and inspiration.',
        p2: 'Connect with Culineer members who share your food interests.'
    }
]

const HomeMade = ({ setImgDimen, imgDimen }) => {

  const imgRef = React.useRef() 
  React.useEffect(() => {
    setImgDimen({ height: imgRef.current.offsetHeight, width: imgRef.current.offsetWidth });
  }, [imgDimen]) 

  return (
    <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }}}>
        <Box component="div" sx={{textAlign: 'center', mb: '3rem'}}>
            <Typography className="font-p" variant="h2" fontWeight="600" sx={{fontSize: { xs: '2.3rem', sm: '4rem' }, fontWeight: { xs: '500', sm: '600' }}}>
                Homemade Food is More Enjoyable
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
                        <Typography variant="h4" fontWeight="600">
                            Connect
                        </Typography>
                        <Typography className="font-p" variant="p" sx={{m: '1rem 0'}}>
                            Find local food producers and connect with others who share your food interests.
                        </Typography>
                        <br />
                        <Typography className="font-p" variant="p">
                            Join local cooking communities for support and inspiration. 
                        </Typography>
                    </Box>
                    <Box component="div" className="col-flex">
                        <img ref={imgRef} className="homemade-img" src={Homemade1} alt="" />
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
                        <Typography variant="h4" fontWeight="600">
                            Create
                        </Typography>
                        <Typography className="font-p" variant="p" sx={{m: '1rem 0'}}>
                            Find inspiration in Culineer from the thousands of memeber adding new recipes every week.
                        </Typography>
                        <br />
                        <Typography className="font-p" variant="p">
                            Enjoy our Cook Mode feature that keeps your phone from hibernating while your cooking 
                        </Typography>
                    </Box>
                    <Box component="div" className="col-flex">
                        <img style={{height: imgDimen.height, width: imgDimen.width}} className="homemade-img" src={Homemade2} alt="" />
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
                    borderRadius: '22px',
                    border: `1px solid ${primColor}`,
                    color: '#FFF',
                    p: '0.7rem 1.5rem',
                    '&:hover': {
                        backgroundColor: '#FFF',
                        color: primColor,
                    }
                }}
            >
                Get Culineer
            </Button>
        </Box>
    </Box>
  )
}

export default HomeMade
