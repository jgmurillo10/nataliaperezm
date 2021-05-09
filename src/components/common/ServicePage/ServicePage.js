import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import styled from 'styled-components';
import Footer from '@sections/Footer';
import Contact from '@common/Contact';
import { graphql, StaticQuery } from 'gatsby';

const ServicePage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        banner: file(
          sourceInstanceName: { eq: "personal" }
          name: { eq: "sign" }
        ) {
          publicURL
        }
      }
    `}
    render={data => (
      <Layout>
        <Navbar />
        <Banner src={data.banner.publicURL}/>
        { children }
        <Contact />
        <Footer />
      </Layout>
    )}>
  </StaticQuery>
);

const Banner = styled.img`
  width: 100%;
  max-height: 270px;
  object-fit: cover;
`;

export default ServicePage;
