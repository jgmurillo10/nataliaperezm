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
            <p>Abogada egresada del Colegio Mayor de Nuestra Señora del Rosario, candidata a Magister en Derecho con énfasis en Derecho Privado, de la misma Universidad. Cuento con experiencia en áreas de Derecho Corporativo, Comercial, Societario, Contractual y del Consumidor.</p>
          </div>
        </Container>
      </Section>
      <Section id="servicios">
        <Container>
          <h1>Servicios</h1>
          <Grid>
            <div id="experiencia">
              <h2>Asesoría legal para pymes</h2>
              <p>
                Gatsby.js builds the fastest possible website. Instead of
                waiting to generate pages when requested, pre-build pages and
                lift them into a global cloud of servers — ready to be delivered
                instantly to your users wherever they are.
              </p>
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
              <h2>Derecho Comercial - Corporativo - Societario</h2>
              <p>
                Enjoy the power of the latest web technologies – React.js ,
                Webpack , modern JavaScript and CSS and more — all set up and
                waiting for you to start building.
              </p>
            </div>
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
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

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
