import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout tile="Página no encontrada">
    <Container>
      <h1>Página no encontrada</h1>
      <Link to="/">Ir al inicio</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
