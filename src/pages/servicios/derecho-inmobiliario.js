import React from 'react';

import ServicePage from '@common/ServicePage';
import Inmobiliario from '@sections/services/Inmobiliario';

const Page = () => (
  <ServicePage
    title="Derecho inmobiliario"
    description="Experiencia en derecho inmobiliario, promesas de compraventa, contratos de opción de compra, transferencia de propiedades, estudios de títulos, entre otros."
    path="/servicios/derecho-inmobiliario">
    <Inmobiliario/>
  </ServicePage>
);

export default Page;
