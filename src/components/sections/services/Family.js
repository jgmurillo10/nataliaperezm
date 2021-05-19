import React from 'react';
import Service from '@common/Service';

const CorporateService = () => (
  <Service image="familia.jpeg">
    <div>
      <h1>Derecho de familia</h1>
      <p>Asesoría integral en todos los aspectos relacionados con la familia.</p>
      <p>Nuestros servicios incluyen:</p>
      <ul>
        <li><b>Divorcios.</b></li>
        <li>Elaboración de <b>capitulaciones matrimoniales.</b></li>
        <li>Asesoría y representación en <b>trámites sucesorales.</b></li>
      </ul>
    </div>
  </Service>
);

export default CorporateService;
