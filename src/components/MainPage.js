import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MainPage.css'; // Import the CSS file
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';
import {styled} from '@mui/system';
import { Circle } from '@mui/icons-material';
import Stack from '@mui/material/Stack';


const BoxName = styled(Box)({
    backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.ActlzGnyLKJ1WZMMlbNbQAHaEK?rs=1&pid=ImgDetMain')`, opacity:'100%',
    width: '65vw',
    height:'30vh',
    borderRadius: '10px'

});

const BoxBox = styled(Box)({
   // backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.ActlzGnyLKJ1WZMMlbNbQAHaEK?rs=1&pid=ImgDetMain')`, opacity:'100%',

    marginRight: '300px',
    width: '50vw',
    height:'100vh',
    marginLeft:'20px'



});

const StackStack = styled(Stack)({
    backgroundColor: 'blue',
    marginLeft:'20px'
    

});

export default function MainPage() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
  const navigate = useNavigate();
  const handlePatientLogin = () => {
    navigate('/patient-login'); // Navigate to patient-login route
  };


  return (
    <div className='main'>
      <div className='banner'>
        <img src='https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/breadcrumb-2.jpg' alt='banner'/>
        <div className="overlay">CARE MEDI</div>
      </div>
      <div className='carousel-container'>
        <Carousel autoPlay interval={3000} infiniteLoop>
          <div>
            <img src="https://s-i.huffpost.com/gen/1446631/images/o-AIDE_ENFANT_CANCER-facebook.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="https://theresiliencysolution.com/wp-content/uploads/2021/02/adjusting-to-hopital-life.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="https://dam.northwell.edu/m/163c4e7c28ed6988/Drupal-Web_GettyImages-932074816.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="https://tse4.mm.bing.net/th/id/OIP.0uLwwSsRd3OnH1wiB7emuwHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Image 3" />
          </div>
          <div>
            <img src="https://tse4.mm.bing.net/th/id/OIP.kUvkvkzMNXRp5xbCQ2S3VAHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Image 3" />
          </div>
          <div>
            <img src="https://tse2.mm.bing.net/th/id/OIP.xCY1G5dboQNmN7yPGGZA4wHaE8?rs=1&pid=ImgDetMain" alt="Image 3" />
          </div>
          <div>
            <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==" alt="Image 3" />
          </div>
          <div>
            <img src="https://tse3.mm.bing.net/th/id/OIP.aVTCstK50Go0Y-DIVU2m0QHaE8?rs=1&pid=ImgDetMain" alt="Image 3" />
          </div>
        </Carousel>
      </div>

      
      <BoxName >
        <p id="box">
        CARE MEDI aims to provide an unparalleled assessment and provision of treatment and access to health like no other. With medical tests and reports at your fingertips, make your hospital trips easy with your all in one access to your documents.
        <br/>
        <br/>
        <p id="newBox">CARE MEDI</p> 
       
        <hr/>
        <br/>
        <Button variant="contained"  sx={{ backgroundColor: '#59A5D8', margin: '0 8px' }}>Know More</Button>
        </p>
      </BoxName>
      <br/>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px' }}>
      <Box sx={{ width: '70%', marginRight: '20px' }}>
        <p id="other">
          What does Care Medi do?
          <hr />
          <br />
          The CARE MEDI Hospitals at Bannerghatta is a 250 bedded hospital, located in the heart of the capital. The hospital is equipped with state-of-the-art technology making it a powerhouse of healthcare in Bangalore and is committed to invest in the latest medical technology on par with the latest worldwide developments having 30 years of experience, to ensure that every one of our patients benefit from the latest knowledge.
          <br />
          <br />
          <br />
        </p>
      </Box>
      </div>
      <div>
        
      <div className='bottom' >
      <table className='table' >
        <thead>
          <tr>
            <th>Patient Care</th>
            <th>Contacts</th>
            <th>Locations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/patient-profile">Patient profile</Link></td>
            <td><CallIcon /> Call Us: +0987654321</td>
            <td><LocationOnIcon /> Address in Chennai: 21, Greams Lane, Off Greams Road, Chennai, Tamil Nadu 600006</td>
          </tr>
          <tr>
            <td><Link to="/specific-patient-test">Patient Tests</Link></td>
            <td><CallIcon /> Call Us: +0987654321</td>
            <td><LocationOnIcon /> Address in Bangalore: 21/2, 14th Cross Road, Near Madhavan Park Circle, Jaya Nagar, Bengaluru, Karnataka 560011</td>
          </tr>
          <tr>
            <td><Link to="/specific-patient-record">Patient Records</Link></td>
            <td><EmailIcon /> Email: support@caremedi.com</td>
            <td><LocationOnIcon /> Address in Delhi: Sarita Vihar, Delhi Mathura Road, New Delhi, Delhi 110076</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </div>
    
  );
}
