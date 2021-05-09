import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Container } from '@components/global';

const Service = ({ image, children }) => (
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
      }
    `}
    render={data => (
      <>
      <Section>
        <Container>
          <Grid>
            <div>
              { children }
            </div>
            <Art>
              <img src={data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node.publicURL} />
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

export default Service;
