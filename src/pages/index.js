import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import Team from '@sections/Team';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Team />
    <Footer />
  </Layout>
);

export default IndexPage;
