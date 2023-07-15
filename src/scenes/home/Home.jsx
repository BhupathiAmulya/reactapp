/*import React, { useState } from 'react';
import { Button, Typography, Container, Box, } from '@mui/material';
import DonationPage from '../donate/donate';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [quote, setQuote] = useState({
    text: "Empowering Education. Transforming Lives.",
    author: "Bhumi NGO"
  });

  const handleDonateClick = () => {
    // Add your donation logic here
    console.log("Donate button clicked");
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Bhumi NGO
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          {quote.text}
        </Typography>
        <Box mt={2} mb={4}>
            <Link to="/donate">
                <Button variant="contained" color="primary" size="large" >
            Donate Now
          </Button> 
            </Link>
          
        </Box>  
        <Box display="flex" justifyContent="center" mb={4}>
          {/* Replace the images below with your scrolling image component *//*}
          <img
                  alt="profile-user"
                  width="100px" 
                  height="100px"
                  src={`../../assets/image1.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
          <img src="" alt="Scrolling Image 2" width="200" height="200" />
          <img src="" alt="Scrolling Image 3" width="200" height="200" />
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          "{quote.text}" - {quote.author}
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
*/
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const RootContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: 'url("https://www.maxpixel.net/static/photo/2x/India-Happy-Children-Smile-Classroom-Education-876543.jpg")', // Replace with the actual image path
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const Title = styled(Typography)({
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '24px',
  color: 'white',
});

const Caption = styled(Typography)({
  fontSize: '24px',
  marginBottom: '32px',
  color: 'white',
});

const ButtonStyled = styled(Button)({
  fontSize: '20px',
  fontWeight: 'bold',
  backgroundColor: 'blue',
  color: 'white',
});

const Home = () => {
  return (
    <RootContainer>
      <Title variant="h1" align="">
        Welcome to Bhumi NGO
      </Title>
      <Caption variant="h3" align="center">
        Your contribution can make a difference!
        
      </Caption>
      <Caption variant="h3" align="center">
        Alone we can do little, together we can do much!
      </Caption>
        <Link to="/donate"><ButtonStyled variant="contained" color="primary">
        Donate Now
      </ButtonStyled></Link>
      
     
    </RootContainer>
  );
};

export default Home;
