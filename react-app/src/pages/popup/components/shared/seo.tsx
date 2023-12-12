import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Helmet } from 'react-helmet';

const Seo = ({ title }: { title: string }) => {
  const [lang] = useLocalStorage('language', 'en');

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
    </Helmet>
  );
};

export default Seo;
