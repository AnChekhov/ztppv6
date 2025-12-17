import React from 'react';
import { ExpertiseHero } from '../components/expertise/ExpertiseHero';
import { ExpertiseServices } from '../components/expertise/ExpertiseServices';
import { ExpertiseBenefits } from '../components/expertise/ExpertiseBenefits';
import { ExpertiseDocuments } from '../components/expertise/ExpertiseDocuments';
import { ExpertiseForm } from '../components/expertise/ExpertiseForm';
import { ExpertiseFAQ } from '../components/expertise/ExpertiseFAQ';
import { ExpertiseContacts } from '../components/expertise/ExpertiseContacts';

const ExpertisePage: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <ExpertiseHero />
      <ExpertiseServices />
      <ExpertiseBenefits />
      <ExpertiseDocuments />
      <ExpertiseForm />
      <ExpertiseFAQ />
      <ExpertiseContacts />
    </div>
  );
};

export default ExpertisePage;
