import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Nav = styled.nav`
    padding: 2rem 0;
    height: 120px;

    @media (max-width: 767px) {
        height: 165px;
    }
`;

const Titulo = styled.a`
    font-family: 'Bebas Neue', cursive;
    font-size: 3rem!important;
`;

const Header = ({titulo}) => {
    return ( 
        <Nav className="nav-wrapper light-blue darken-3">
            <Titulo href="#!" className="brand-logo center">{titulo}</Titulo>
        </Nav>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;