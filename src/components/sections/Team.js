import React from 'react';
import styled from 'styled-components';
import { StaticQuery, Link, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Gestión en asuntos corporativos',
    image: 'corporativo.jpeg',
    url: '/servicios/gestion-asuntos-corporativos',
  },
  {
    name: 'Derecho contractual',
    image: 'contractual.jpeg',
    url: '/servicios/derecho-contractual',
  },
  {
    name: 'Derecho laboral',
    image: 'laboral.jpeg',
    url: '/servicios/derecho-laboral',
  },
  {
    name: 'Derecho inmobiliario',
    image: 'inmobiliario.jpeg',
    url: '/servicios/derecho-inmobiliario',
  },
  {
    name: 'Derecho de familia',
    image: 'familia.jpeg',
    url: '/servicios/derecho-de-familia',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "personal" } }) {
          edges {
            node {
              relativePath
              publicURL
            }
          }
        }
        image_general: file(
          sourceInstanceName: { eq: "personal" }
          name: { eq: "general" }
        ) {
          publicURL
        }
        
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
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
      <Section id="servicios" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Servicios</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, url }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <Link key={name} to={url} style={{textDecoration: 'none'}}>
                  <ServiceImage src={img.publicURL} alt=""/>
                  <Title>{name}</Title>
                </Link>
              );
            })}
          </TeamGrid>
          <Art>
            <img src={data.image_general.publicURL} alt=""/>
          </Art>
          <ArtMobile>
            <img src={data.image_general.publicURL} alt=""/>
          </ArtMobile>
        </Container>
      </Section>
      </>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  > a:first-child {
    grid-column: span 2;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 32px;
    
    > a:first-child {
      grid-column: span 1;
    }
  }
`;

const ServiceImage = styled.img`
  display: block;
  max-height: 215px;
  object-fit: cover;
  width: 100%;
`;

const Art = styled.figure`
  width: 540px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.color.black.regular};
`;

export default Team;
