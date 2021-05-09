import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Contact from '@common/Contact';
import styled from 'styled-components';

const ContactPage = () => (
  <Layout>
    <Navbar />
    <ContactPadding />
    <Footer />
  </Layout>
);

const ContactPadding = styled(Contact)`
  padding-top: 144px;
`;

export default ContactPage;
    