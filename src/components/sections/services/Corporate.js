import React from 'react';
import Service from '@common/Service';

const CorporateService = () => (
  <Service image="corporativo.jpeg">
    <div>
      <h1>Gestión en asuntos corporativos</h1>
      <p>Acompañamiento en asuntos corporativos a personas naturales, pequeñas y medianas empresas (pymes).</p>
      <p>Nuestros servicios incluyen:</p>
      <ul>
        <li>Constitución de sociedades, reformas estatutarias, liquidación de sociedades.</li>  
        <li>Fusiones, escisiones y adquisiciones.</li>  
        <li>Compraventa de acciones, reglamentos de colocación de acciones</li> 
        <li>Acuerdos de accionistas, gobierno corporativo, códigos de ética y gobierno.</li>  
        <li>Asesoria permanente a asambleas de accionistas y juntas directivas.</li>  
        <li>Asesoría y elaboración de due diligence.</li> 
        <li>Actuaciones ante la Superintendencia de Industria y Comercio, Superintendencia de Sociedades y Cámaras de Comercio.</li>  
        <li>Defensa de la empresa en asuntos de derecho del consumidor.</li>  
      </ul>
    </div>
  </Service>
);

export default CorporateService;
