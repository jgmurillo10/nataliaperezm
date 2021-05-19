import React from 'react';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Contact from '@common/Contact';

const ContactPage = () => (
  <Layout title="Contacto" path="/contacto" description="Contacta a Natalia Andrea Pérez Mancera para tus dudas legales.">
    <Navbar />
    <div style={{marginTop: 48}}></div>
    <Contact main={true} />
    <Footer />
  </Layout>
);

export default ContactPage;
