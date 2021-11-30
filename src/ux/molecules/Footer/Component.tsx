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
        cols={{
          default: '25% 1fr 1fr 25%',
        }} 
        rows={{
          default: "2rem 3fr 1fr"
        }}
      >
        <Grid 
          item 
          col={{ from: 1, to: 2 }} 
          row={{ from: 1, to: 4 }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Image src="/assets/images/footer/A.svg" alt="footer left"/>
          </Flex>
        </Grid>

        <Grid 
          item 
          col={{ 
            default: { from: 2, to: 3 }
          }} 
          row={{ 
            default: { from: 2, to: 3 }
          }}
        >
          <Typography color={Color.White} variant="subheader">{t("footer.title")}</Typography>
          <Typography size="smaller" color={Color.White}>{t("footer.texts.0")}</Typography>
          <Typography size="smaller" color={Color.White}>{t("footer.texts.1")}</Typography>
        </Grid>
        <Grid 
          item 
          col={{ 
            default: { from: 3, to: 4 }
          }} 
          row={{ 
            default: { from: 2, to: 3 }
          }}
        >
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
          col={{ 
            default: { from: 2, to: 4 }
          }} 
          row={{ 
            default: { from: 3, to: 4 }
          }}
        >
          <Flex justifyContent="center" alignItems="flex-end">
            <Typography size="small" color={Color.White}><em>{t("footer.copyright")}</em></Typography>
          </Flex>
        </Grid>
        <Grid 
          item 
          col={{ from: 4, to: 5 }} 
          row={{ from: 1, to: 4 }}
        >
          <Flex alignItems="center" justifyContent="center">
            <Image src="/assets/images/footer/B.svg" alt="footer right" />
          </Flex>
        </Grid>
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
  },
});

// helper functions
