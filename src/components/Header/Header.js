import React from 'react';
import { Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Header = ({
  onClickPopularBtn,
  onClickSearchBtn,
  ...props
}) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">TMDB Popular Movies</Navbar.Brand>
    </Navbar>
  );
};

export default Header;