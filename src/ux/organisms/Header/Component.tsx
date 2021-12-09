import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { MediaMobile } from 'utils/Types';

// Atoms ⚛️
import { Grid } from 'ux/atoms/Grid';
import { Flex } from 'ux/atoms/Flex';
import { Link } from 'ux/atoms/Link';
import { Scrollpass } from 'ux/atoms/Scrollpass';
import { Typography } from 'ux/atoms/Typography';

// Molecules *️⃣
import { Language } from 'ux/molecules/Language';

export interface Props extends IProps {
 
}

export const Header: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const links = ["service", "team", "story", "portfolio"];

  return (
    <Scrollpass 
      limit={10} 
      padding="1rem"
      className={[props.className, classes.root].join(' ')}
    >
      {(passed) => (
        <Grid container 
          cols={{ 
            default: "1fr 1fr",
            mobile: "2fr 0",
            pad: "1fr 2fr",
            laptop: "2fr 1fr",
            desktop: "3fr 1fr"
          }}
        >
          <Flex alignItems="center">
            <Link href="#" passive>
              <Typography variant="logo">
                  {t("header.title")}
              </Typography>
            </Link>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            {links.map(link => <Link key={link} href={`#${link}`}>{t(`header.parts.${link}`)}</Link>)}
            <Flex style={{ marginTop: 7 }} alignItems="center" justifyContent="space-between">
              <Language prefix="it" />
              <Language prefix="en" marginLeft={5} />
            </Flex>
          </Flex>
        </Grid>
      )}
    </Scrollpass>
  );
}

// types & interfaces
type RuleName = 'root' | MediaMobile;

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4rem',
    zIndex: 10,
  },

  "@media (max-width: 480px)": {
    // Size.MobileMax
  }
})

// helper functions