import  React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const NavBarContainer = styled.div`
text-align: center;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
a {
    
  text-decoration: none;
  font-family: "Scope One", serif;
  color: gray;
}
`

const NavBar = () => {
    return (
        <NavBarContainer>
           
            <Link to="/"> all artists </Link>
        </NavBarContainer>
    );
};

export default NavBar;