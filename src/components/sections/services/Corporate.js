import React from 'react';
import Service from '@common/Service';

const CorporateService = () => (
  <Service image="corporativo.jpeg">
    <div>
      <h1>Gestión en asuntos corporativos</h1>
      <p>Acompañamiento en asuntos corporativos a <b>personas naturales, pequeñas y medianas empresas (pymes).</b></p>
      <p>Nuestros servicios incluyen:</p>
      <ul>
        <li><b>Constitución de sociedades</b>, reformas estatutarias, liquidación de sociedades.</li>
        <li><b>Fusiones</b>, escisiones y adquisiciones.</li>
        <li><b>Compraventa de acciones</b>, reglamentos de colocación de acciones</li>
        <li><b>Acuerdos de accionistas</b>, gobierno corporativo, códigos de ética y gobierno.</li>
        <li>Asesoría permanente a asambleas de accionistas y juntas directivas.</li>
        <li>Asesoría y elaboración de <b>due diligence.</b></li>
        <li>Actuaciones ante la <b>Superintendencia de Industria y Comercio, Superintendencia de Sociedades y Cámaras de Comercio.</b></li>
        <li>Defensa de la empresa en asuntos de <b>derecho del consumidor.</b></li>
      </ul>
    </div>
  </Service>
);

export default CorporateService;
