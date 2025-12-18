import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      {/* Заголовок страницы */}
      <title>{title} | ТПП Забайкальского края</title>
      
      {/* Описание для поисковиков */}
      <meta name="description" content={description} />
      
      {/* Ключевые слова (опционально) */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph (для красивых ссылок в соцсетях) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
