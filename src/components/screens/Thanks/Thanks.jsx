import React from 'react';
import Splash from '../../shared/Splash';
import Footer from '../../shared/Footer';
import Helmet from 'react-helmet';

const Thanks = () => {
  return (
    <div>
      <Helmet
        title="Thank you | Brand Engagement, Marketing, Design"
        meta={[
          { name: 'description', content: 'Thank you for Creative114' },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:title',
            content: 'Brand Engagement, Marketing, Design',
          },
          { property: 'og:url', content: 'http://creative114.com' },
        ]}
      />
      <Splash type="thanks" title="Thanks" text="Please download the link below!" />
      <Footer />
    </div>
  );
};

export default Thanks;
