import React from 'react';

import ServicePage from '@common/ServicePage';
import Family from '@sections/services/Family';

const Page = () => (
  <ServicePage
    title="Derecho de familia"
    description="Experiencia en derecho de familia: divorcios, capitulaciones matrimoniales, trámites sucesorales, entre otros."
    path="/servicios/derecho-de-familia">
    <Family/>
  </ServicePage>
);

export default Page;
