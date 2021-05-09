import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['Gestión asuntos corporativos', 'Derecho contractual', 'Derecho laboral', 'Derecho inmobiliario', 'Derecho de familia', 'Contacto'];
const URLS = [
  '/servicios/gestion-asuntos-corporativos',
  '/servicios/derecho-contractual',
  '/servicios/derecho-laboral',
  '/servicios/derecho-inmobiliario',
  '/servicios/derecho-de-familia',
  '/contacto',
]
class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (item, index) => (
    <Link to={URLS[index]} onClick={this.closeMobileMenu}>
      {item}
    </Link>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase().replace(' ','-'))}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem, index)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}><Brand>Pérez Mancera Abogados</Brand></Link>
          {/* <Mobile> */}
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          {/* </Mobile> */}

          {/* <Mobile hide>{this.getNavList({})}</Mobile> */}
        </StyledContainer>
        {/* <Mobile> */}
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        {/* </Mobile> */}
      </Nav>
    );
  }
}

export default Navbar;
