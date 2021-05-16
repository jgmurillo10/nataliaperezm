import React from 'react';

import ServicePage from '@common/ServicePage';
import Family from '@sections/services/Family';

const Page = () => (
  <ServicePage title="Derecho de familia" path="/servicios/derecho-de-familia">
    <Family/>
  </ServicePage>
);

export default Page;