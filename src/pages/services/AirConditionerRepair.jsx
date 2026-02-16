import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import { servicesData } from '../../data/services';

const AirConditionerRepair = () => {
  const data = servicesData.find(s => s.slug === 'air-conditioner');
  
  return (
    <ServiceTemplate 
      title={data.title}
      description={data.shortDesc}
      longDescription={data.longDesc}
      image={data.image}
      features={data.features}
      commonIssues={data.commonIssues}
      slug={data.slug}
    />
  );
};

export default AirConditionerRepair;

