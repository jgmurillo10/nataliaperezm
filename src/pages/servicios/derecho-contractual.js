import React from 'react';

import ServicePage from '@common/ServicePage';
import Contractual from '@sections/services/Contractual';

const Page = () => (
  <ServicePage
    title="Derecho Contractual"
    description="Experiencia en derecho contractual, elaboración, redacción, negociación y revisión de contratos."
    path="/servicios/derecho-contractual">
    <Contractual/>
  </ServicePage>
);

export default Page;
