import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: '¿Puedo recibir asesoría legal si soy pyme?',
    content: () => (
      <>
        Enjoy the power of the latest web technologies – React.js , Webpack ,
        modern JavaScript and CSS and more — all set up and waiting for you to
        start building
      </>
    ),
  },
  {
    title: '¿Qué tipo de asesoría legal podría llegar a necesitar?',
    content: () => (
      <>
        Gatsby’s rich data plugin ecosystem lets you build sites with the data
        you want — from one or many sources: Pull data from headless CMSs, SaaS
        services, APIs, databases, your file system, and more directly into your
        pages using GraphQL.
      </>
    ),
  },
  {
    title: '¿Soy persona natural y quiero crear empresa, cómo me puedes ayudar?',
    content: () => (
      <>
        Gatsby.js is Internet Scale. Forget complicated deploys with databases
        and servers and their expensive, time-consuming setup costs,
        maintenance, and scaling fears. Gatsby.js builds your site as “static”
        files which can be deployed easily on dozens of services.
      </>
    ),
  },
  {
    title: '¿Cómo puedo contactarte?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="preguntas-frecuentes">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Preguntas frecuentes</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
