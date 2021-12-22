/**
 * author Henry Pap
 * created 22 Dec 2021
 * version 1
**/

import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { useTranslation } from "react-i18next";

// Atoms ⚛️
import { Link } from 'ux/atoms/Link';
import { Typography } from 'ux/atoms/Typography';

// Molecules *️⃣
import { Section } from 'ux/molecules/Section';

export interface Props extends IProps {}

export const Partnership: React.FC<IProps> = (props) => {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <Section 
      name='partnership' 
      title={t('partnership.title')} 
      description={t('partnership.description')}
    >
      <Typography>
        <Link href="www.chimicalservice.it">{t('partnership.chimical.title')}</Link>
        {t('partnership.chimical.description')}
      </Typography>
      <Typography>
        <Link href="www.pack-co.it">{t('partnership.pack.title')}</Link>
        {t('partnership.pack.description')}
      </Typography>
      <Typography>
        <Link href="www.vassanellilab.com">{t('partnership.vassanelli.title')}</Link>
        {t('partnership.vassanelli.description')}
      </Typography>
    </Section>
  );
}

// types & interfaces
type RuleName = 'root';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    
  },
});

// helper functions