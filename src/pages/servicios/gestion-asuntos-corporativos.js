import React from 'react';

import ServicePage from '@common/ServicePage';
import Corporate from '@sections/services/Corporate';

const CorporatePage = () => (
  <ServicePage
    title="Gestión de asuntos corporativos"
    description="Constitución de sociedades, fusiones, acuerdos de accionistas, derecho del consumidor, actuaciones ante Superintendencia de Sociedades y Cámaras de Comercio, entre otros."
    path="/servicios/gestion-asuntos-corporativos">
    <Corporate/>
  </ServicePage>
);

export default CorporatePage;
