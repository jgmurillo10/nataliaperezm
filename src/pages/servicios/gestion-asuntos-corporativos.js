import React from 'react';

import ServicePage from '@common/ServicePage';
import Corporate from '@sections/services/Corporate';

const CorporatePage = () => (
  <ServicePage title="Gestión de asuntos corporativos" path="/servicios/gestion-asuntos-corporativos">
    <Corporate/>
  </ServicePage>
);

export default CorporatePage;
