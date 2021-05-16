import React from 'react';

import ServicePage from '@common/ServicePage';
import Contractual from '@sections/services/Contractual';

const Page = () => (
  <ServicePage title="Derecho Contractual" path="/servicios/derecho-contractual">
    <Contractual/>
  </ServicePage>
);

export default Page;