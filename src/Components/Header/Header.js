import React from 'react';
import {  Container, Navbar, Nav,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

        // active style for the nav links 

    const activeStyle = {
        "color": "#2878EB"
    }

        // normal style for the nav links 

    const style = {
        "color": "#505050",
        "padding": "0 10px",
        "textDecoration": "none",
        "fontSize": "20px"
    }

    
    return (

        // creating the header section in a component
<div>
    <header>      
  <Navbar bg="white" variant="light" className="shadow-sm">
    <Container>
    <Navbar.Brand href="#home" className="brandName">Elearny</Navbar.Brand>
    <Nav className="ml-auto justify-content-center align-items-center">
        <NavLink style={style} activeStyle={activeStyle} to="/home">Home</NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/about">About</NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/services">Services</NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/live">Live Session</NavLink>
    </Nav>
    </Container>
  </Navbar>
    </header>
</div>
    );
};

export default Header;