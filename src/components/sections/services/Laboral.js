import React from 'react';
import Service from '@common/Service';

const LaboralService = () => (
  <Service image="laboral.jpeg">
    <div>
      <h1>Derecho laboral</h1>
      <p>Asesoría legal en temas laborales abarcando aspectos propios de la ejecución y dinámica laboral a nivel general, (reglamento interno de trabajo, ley de acoso laboral, etc), así como también aspectos particulares de la vinculación laboral. </p>
      <p>Nuestros servicios incluyen:</p>
      <ul>
        <li>Redacción de <b>contratos de trabajo.</b></li>
        <li>Redacción de <b>contratos de prestación de servicios.</b></li>
        <li><b>Contratos de suministro de personal.</b></li>
        <li>Reglamentos internos de trabajo.</li>
        <li>Manuales de conducta.</li>
        <li>Políticas de la empresa.</li>
        <li>Asesoría legal en <b>Sistema en Gestión de la seguridad y salud en el trabajo (SG-SST).</b></li>
      </ul>
    </div>
  </Service>
);

export default LaboralService;
