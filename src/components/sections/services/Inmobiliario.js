import React from 'react';
import Service from '@common/Service';

const InmobiliarioService = () => (
  <Service image="inmobiliario.jpeg">
    <div>
      <h1>Derecho inmobiliario</h1>
      <p>Asesoría integral y acompañamiento en las áreas relacionadas con el Derecho Inmobiliario desde las negociones preliminales hasta el perfeccionamiento de las operaciones sobre cada activo/bien.</p>
      <p>Nuestros servicios incluyen:</p>
      <ul>
        <li>Estructuración de promesas de compraventa, contratos de opción de compra.</li>
        <li>Acompañamiento en el proceso de perfeccionamiento de la transferencia de las propiedades y el registro de las mismas.</li>
        <li>Proyección y elaboración de contratos de arrendamiento y concesión de espacios.</li>
        <li>Elaboración de estudios de títulos.</li>
      </ul>
    </div>
  </Service>
);

export default InmobiliarioService;
