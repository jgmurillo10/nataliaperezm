import React from 'react';

import ServicePage from '@common/ServicePage';
import Laboral from '@sections/services/Laboral';

const Page = () => (
  <ServicePage
    title="Derecho laboral"
    description="Experiencia en derecho laboral: contratos de trabajo, contratos de prestación de servicios, contratos de suministro de personal, entre otros."
    path="/servicios/derecho-laboral">
    <Laboral/>
  </ServicePage>
);

export default Page;
