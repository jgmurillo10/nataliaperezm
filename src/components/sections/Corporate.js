import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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
      <Section id="servicios">
        <Container>
          <Grid>
            <div>
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
