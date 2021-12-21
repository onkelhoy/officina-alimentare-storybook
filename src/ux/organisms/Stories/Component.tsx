/**
 * author Henry Pap
 * created 21 Sep 2021
 * version 1
**/

import React from 'react';

// utilities
import { useTranslation } from "react-i18next";

// Atoms ⚛️
import { Grid } from 'ux/atoms/Grid';

// Molecules *️⃣
import { Story, Props as IStory } from 'ux/molecules/Story';
import { Section } from 'ux/molecules/Section';

export const Stories: React.FC = props => {

  const { t } = useTranslation();

  const data: IStory[] = [
    {
      date: 1998,
      texts: t("story.timelines.0", { returnObjects: true }),
    },
    {
      date: 2006,
      texts: t("story.timelines.1", { returnObjects: true }),
    },
    {
      date: 2018,
      texts: t("story.timelines.2", { returnObjects: true }),
    },
  ]

  return (
    <Section 
      name="story" 
      title={t('story.title')} 
    >
      <Grid container rows="repeat(3, 1fr)" rowGap="4rem">
        {data.map((props, index) => <Story key={index} {...props}/>)}
      </Grid>
    </Section>
  );
}