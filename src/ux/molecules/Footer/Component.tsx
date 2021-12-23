import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

// utils
import { Color } from 'utils/Enums';
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Flex } from 'ux/atoms/Flex';
import { Grid } from 'ux/atoms/Grid';
import { Image } from 'ux/atoms/Image';
import { Link } from 'ux/atoms/Link';
import { Typography } from 'ux/atoms/Typography';

export interface Props extends IProps {}

export const Footer: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { t } = useTranslation();

  return (
    <footer className={classes.root}>
      <Grid 
        container 
        cols={{ // TODO change so its (i-x-i) 
          default: '1fr 2fr 1fr', // TODO so x will contain all the advanced stuff (1-1 * 1-1)
          mobile: '0 1fr 0'
        }} 
        rows="20rem"
      >
        <Flex alignItems="center" justifyContent="center">
          <Image src="/assets/images/footer/A.svg" alt="footer left"/>
        </Flex>

        <Grid 
          item
          container
          colGap="5rem"
          cols={{
            default: "1fr 1fr",
          }}
          rows={{
            default: "1fr 1fr"
          }}
        >
          <Grid item col={{ from: 1, to: 2 }}>
            <Typography color={Color.White} variant="subheader">{t("footer.title")}</Typography>
            <Typography size="smaller" color={Color.White}>{t("footer.texts.0")}</Typography>
            <Typography size="smaller" color={Color.White}>{t("footer.texts.1")}</Typography>
          </Grid>
          <Grid item col={{ from: 2, to: 3 }}>
            <Typography color={Color.White} variant="subheader">{t("footer.contact")}</Typography>
            <Typography size="smaller">
              <Link color={Color.White} href={`mailto:${t("footer.email.raw")}`}>
                {t("footer.email.displayed")}
              </Link>
            </Typography>
            <Typography size="smaller">
              <Link color={Color.White} href={`tel:${t("footer.tel.raw")}`}>
                {t("footer.tel.displayed")}
              </Link>
            </Typography>
          </Grid>
          <Grid 
            item 
            col={{ from: 1, to: 3 }} 
            row={{ from: 2, to: 3 }}
          >
            <Flex justifyContent="center" alignItems="center">
              <Typography size="small" color={Color.White}><em>{t("footer.copyright")}</em></Typography>
            </Flex>
          </Grid>
        </Grid>
        <Flex alignItems="center" justifyContent="center">
          <Image src="/assets/images/footer/B.svg" alt="footer right" />
        </Flex>
      </Grid>
    </footer>
  );
}

// types & interfaces
type RuleName = 'root';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    backgroundColor: Color.Footer,
    position: 'relative',
    overflow: 'hidden',
    padding: '1rem', 
  },
});

// helper functions
