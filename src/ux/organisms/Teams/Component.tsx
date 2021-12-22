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
import { Profile, Props as IProfile } from 'ux/molecules/Profile';
import { Section } from 'ux/molecules/Section';

export const Teams: React.FC = props => {

  const { t } = useTranslation();

  const members: IProfile[] = [
    {
      name: t("team.members.0.name"),
      image: {
        src: "/assets/images/team/Diego.svg",
        alt: t("team.members.0.alt"),
      },
      role: t("team.members.0.role"),
      linkedin: "https://it.linkedin.com/in/diego-sambataro-45887729",
    },
    {
      name: t("team.members.1.name"),
      image: {
        src: "/assets/images/team/Biagio.svg",
        alt: t("team.members.1.alt"),
      },
      role: t("team.members.1.role"),
      linkedin: "https://it.linkedin.com/in/biagio-calcavecchia-455ba21",
    },
  ];

  return (
    <Section 
      name="team" 
      title={t('team.title')} 
      description={t('team.description')}
    >
      <Grid container cols="1fr 1fr" colGap="1rem">
        {members.map((props, index) => <Profile key={index} {...props} />)}
      </Grid>
    </Section>
  );
}
