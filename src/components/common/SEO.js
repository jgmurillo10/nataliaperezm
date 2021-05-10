import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Abogada egresada del Colegio Mayor de Nuestra Señora del Rosario, Magister en Derecho con énfasis en Derecho Privado, de la misma Universidad. Cuento con experiencia en áreas de Derecho Corporativo, Comercial, Societario, Contractual y del Consumidor',
  title: 'Pérez Mancera Abogados',
  url: 'https://nataliaperezm.com',
  author: 'Natalia Pérez',
  keywords: ['derecho', 'corporativo', 'contractual'],
  img: 'https://nataliaperezm.com/static/7a733f207c01197d588ab9dfcbbfb72a/89f4f/natalia.jpg',
};
const PATH = window.location.href;

const SEO = ({ title }) => (
    <Helmet>
      <meta property="og:title" content={`${title ? `${title} | ` : ''}${SEO_DATA.title}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url + PATH} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_DATA.url + PATH} />
      <meta name="twitter:title" content={`${title ? `${title} | ` : ''}${SEO_DATA.title}`} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url + PATH} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{`${title ? `${title} | ` : ''}${SEO_DATA.title}`}</title>
      <html lang="en" />
    </Helmet>
  );

export default SEO;
