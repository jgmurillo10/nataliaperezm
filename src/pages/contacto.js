import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Contact from '@common/Contact';

const ContactPage = () => (
  <Layout title="Contacto" path="/contacto">
    <Navbar />
    <div style={{marginTop: 48}}></div>
    <Contact />
    <Footer />
  </Layout>
);

export default ContactPage;
    