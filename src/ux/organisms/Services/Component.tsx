/**
 * author Henry Pap
 * created 21 Sep 2021
 * version 1
 */

import React from 'react';

// utilities
import { useTranslation, TFunction } from "react-i18next";

// Atoms ⚛️
import { Grid } from 'ux/atoms/Grid';

// Molecules *️⃣
import { Service, Props as IService } from 'ux/molecules/Service';
import { Section } from 'ux/molecules/Section';

export const Services: React.FC = props => {

  const { t } = useTranslation();

  const data: IService[] = React.useMemo<IService[]>(() => [
    {
      image: {
        src: "/assets/images/services/services1.svg",
        alt: "Service image",
      },
      title: t("service.product_development.title"),
      description: t("service.product_development.texts", { returnObjects: true }),
    },
    {
      image: {
        src: "/assets/images/services/services2.svg",
        alt: "Service image",
      },
      title: t("service.problem_solving.title"),
      description: t("service.problem_solving.texts", { returnObjects: true }),
    },
    {
      image: {
        src: "/assets/images/services/services3.svg",
        alt: "Service image",
      },
      title: t("service.quality_assurance.title"),
      description: t("service.quality_assurance.texts", { returnObjects: true }),
    },
  ], []);

  return (
    <Section 
      name='service' 
      title={t('service.title')} 
      description={t('service.description')}
    >
      <Grid 
        container 
        cols={{
          default: "repeat(3, 1fr)",
          mobile: '1fr',
        }}
        rows={{
          default: "1fr",
          mobile: 'repeat(3, 1fr)',
        }}
        name="info"
        colGap="2rem"
      >
        {data.map((props, index) => <Service key={index} {...props} />)}
      </Grid>
    </Section>
  );
}

// helper functions
function getDescription (t: TFunction<"translation", undefined>, name:string): string {
  const d = t(name, { returnObjects: true }) as Array<string>;

  console.log(d, d.join('\n'))
  return d.join('\n');
}