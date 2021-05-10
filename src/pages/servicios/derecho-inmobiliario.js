import React from 'react';

import ServicePage from '@common/ServicePage';
import Inmobiliario from '@sections/services/Inmobiliario';

const Page = () => (
  <ServicePage title="Derecho inmobiliario" path="/servicios/derecho-inmobiliario">
    <Inmobiliario/>
  </ServicePage>
);

export default Page;
