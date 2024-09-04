
import { Link } from 'react-router-dom'
import './navigation.css'
import {  Container, Nav, Navbar } from 'react-bootstrap'

const Navigationbar = ({ viewnews}) => {

 

  
  return (
    <div className='gsponbottom'>
    <Navbar className='borderforhead'  style={{ backgroundColor: 'white' }} expand="lg" variant="dark">
    <Container>
      <Navbar.Brand className='imgsizeconterl' as={Link} to={'/news'} style={{ color: 'white' }}><img src='https://i.pinimg.com/564x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg' alt=''></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-between">
        
         
          <Nav.Link  as={Link} to={'/addnews'} className='nav-button' style={{ color: 'black' }} > ADD NEWS </Nav.Link>
          <h4 className='headcenter'>High News</h4>
          <Nav.Link as={Link} to={'/editdelete'} className='nav-second-button' style={{ color: 'black' }}>Edit</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigationbar