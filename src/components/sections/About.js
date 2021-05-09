import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "personal" }
          name: { eq: "asesoria_empresas" }
        ) {
          publicURL
        }

        art_learn: file(
          sourceInstanceName: { eq: "personal" }
          name: { eq: "derecho_comercial" }
        ) {
          publicURL
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <Section id="about">
        <Container>
          <div>
            <p>Abogada egresada del Colegio Mayor de Nuestra Señora del Rosario, Magister en Derecho con énfasis en Derecho Privado, de la misma Universidad. Cuento con experiencia en áreas de Derecho Corporativo, Comercial, Societario, Contractual y del Consumidor.</p>
          </div>
        </Container>
      </Section>
      <Section id="servicios">
        <Container>
          <h1>Servicios</h1>
          <Grid>
            <div id="experiencia">
              <h2>Gestión en asuntos corporativos</h2>
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
                <li>Elaboración y revisión de todo tipo de contratos comerciales, joint venture, acuerdos comerciales.</li> 
                <li>Elaboración y revisión de contratos laborales y de prestación de servicios.</li>  
                <li>Asesoría en respuestas a Acciones de Tutela.</li> 
              </ul>
            </div>
            <Art>
              <img src={data.art_fast.publicURL} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={data.art_learn.publicURL} />
            </Art>
            <div>
              <h2>Derecho contractual</h2>
              <p>Asesoría en materia contractual</p>
              <p>Nuestros servicios incluyen:</p>
              <ul>
                <li>Estructuración y elaboración de contratos, con el fin de estipular las condiciones ideales para el negocio pretendido por el cliente.</li>
                <li>Acompañamiento en la redacción, negociación y revisión de contratos, para evitar y prevenir riesgos y conflictos futuros, relacionados con el objeto contractual.</li>
              </ul>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Derecho laboral</h2>
              <p>Asesoría legal en temas laborales abarcando aspectos propios de la ejecución y dinámica laboral a nivel general, (reglamento interno de trabajo, ley de acoso laboral, etc), así como también aspectos particulares de la vinculación laboral. </p>
              <p>Nuestros servicios incluyen:</p>
              <ul>
                <li>Redacción de contratos de trabajo.</li>
                <li>Redacción de contratos de prestación de servicios.</li>
                <li>Contratos de suministro de personal.</li>
                <li>Reglamentos internos de trabajo.</li>
                <li>Manuales de conducta.</li>
                <li>Políticas de la empresa.</li>
                <li>Asesoría legal en Sistema en Gestión de la seguridad y salud en el trabajo (SG-SST).</li>
              </ul>
            </div>
            <Art>
              <img src={data.art_fast.publicURL} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={data.art_learn.publicURL} />
            </Art>
            <div>
              <h2>Derecho inmobiliario</h2>
              <p>Asesoría integral y acompañamiento en las áreas relacionadas con el Derecho Inmobiliario desde las negociones preliminales hasta el perfeccionamiento de las operaciones sobre cada activo/bien.</p>
              <p>Nuestros servicios incluyen:</p>
              <ul>
                <li>Estructuración de promesas de compraventa, contratos de opción de compra.</li>
                <li>Acompañamiento en el proceso de perfeccionamiento de la transferencia de las propiedades y el registro de las mismas.</li>
                <li>Proyección y elaboración de contratos de arrendamiento y concesión de espacios.</li>
                <li>Elaboración de estudios de títulos.</li>
              </ul>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Derecho de familia</h2>
              <p>Asesoría integral en todos los aspectos relacionados con la familia.</p>
              <p>Nuestros servicios incluyen:</p>
              <ul>
                <li>Divorcios.</li>
                <li>Sucesiones.</li>
              </ul>
            </div>
            <Art>
              <img src={data.art_fast.publicURL} />
            </Art>
          </Grid>
        </Container>
      </Section>
      </>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 48px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
