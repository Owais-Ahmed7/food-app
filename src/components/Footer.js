import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WorkImage from "../assets/work-img.png";
import { Button } from '@mui/material';

//images
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/Facebook.png";
import Youtube from "../assets/youtube.png";
import Logo from "../assets/logo.png";

const links = ['about us', 'download', 'terms of service', 'privacy policy', 'contact']

const Footer = () => {
  return (
    <footer>
        <Box sx={{ pt: '2rem', padding: { xs: '2rem', sm: '5rem' }, paddingBottom: { sm: '1rem' }}}>
            <Box component="div" sx={{textAlign: 'center', mb: '3rem', display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', md: 'row' }}}>
                {(links || []).map((item, idx) => {
                    return <a className="footer-links" href="#" key={idx}>{item}</a>
                })}
            </Box>
            <Box component="div" sx={{textAlign: 'center', mb: '3rem'}}>
                <Button sx={{p: '0'}}>
                    <img style={{width: 'auto'}} src={Instagram} alt="Instagram" />
                </Button>
                <Button sx={{p: '0', ml: '1rem'}}>
                    <img style={{width: 'auto'}} src={Facebook} alt="Facebook" />
                </Button>
                <Button sx={{p: '0', ml: '1rem'}}>
                    <img style={{width: 'auto'}} src={Youtube} alt="Youtube" />
                </Button>
             </Box>  
            <Box component="div" sx={{textAlign: 'center', color: 'grey'}}>
                <p className="font-p">© W4DT | Built with love by Whats for Dinner Technologies, LLC</p>
            </Box>
        </Box>
    </footer>
  )
}

export default Footer
