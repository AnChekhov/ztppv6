import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import CallToAction from '../components/CallToAction';
import NewsSection from '../components/NewsSection';
import SeoTextSection from '../components/SeoTextSection';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="ТПП Забайкальского края | Сертификаты, Экспертиза, ВЭД с Китаем"
        description="Официальный сайт Торгово-промышленной палаты Забайкальского края. Поддержка бизнеса, оформление СТ-1, независимая экспертиза и помощь в работе с КНР."
      />
      <Hero />
      <ServicesGrid />
      <CallToAction />
      <NewsSection />
      <SeoTextSection />
    </>
  );
};

export default HomePage;
