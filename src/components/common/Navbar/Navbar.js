import React, { Component } from 'react';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  NavItemThird,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = [
  {
    label: 'Inicio',
    url: '/'
  },
  {
    label: 'Servicios',
    url: '/#servicios',
    children: [
      {
        label: 'Gestión asuntos corporativos',
        url: '/servicios/gestion-asuntos-corporativos'
      },
      {
        label: 'Derecho contractual',
        url: '/servicios/derecho-contractual'
      },
      {
        label: 'Derecho laboral',
        url: '/servicios/derecho-laboral'
      },
      {
        label: 'Derecho inmobiliario',
        url: '/servicios/derecho-inmobiliario'
      },
      {
        label: 'Derecho de familia',
        url: '/servicios/derecho-de-familia'
      },
    ],
  },
  {
    label: 'Contacto',
    url: '/contacto',
  },
];

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

  getNavAnchorLink = (label, url) => (
    <Link to={url} onClick={this.closeMobileMenu}>
      {label}
    </Link>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <ul>
        {NAV_ITEMS.map(({label, url, children}) => (
          children ? 
            <React.Fragment key={label}>
              <NavItem>{this.getNavAnchorLink(label, url)}</NavItem>
              {children.map(({label, url}) => (
                  <NavItemThird key={label}>{this.getNavAnchorLink(label, url)}</NavItemThird>
              ))}
            </React.Fragment>
          : 
            <NavItem key={label}>{this.getNavAnchorLink(label, url)}</NavItem>
        ))}
      </ul>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}><Brand>Pérez Mancera Abogados</Brand></Link>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
        </StyledContainer>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
      </Nav>
    );
  }
}

export default Navbar;
