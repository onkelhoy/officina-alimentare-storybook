import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

// utils
import { MediaMobile, MediaPad, IProps } from 'utils/Types';
import { Color, Size } from 'utils/Enums';
import { AppContext } from 'AppContext';

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
  const { windowWidth } = React.useContext(AppContext);
  const classes = useStyles(props);
  const { t } = useTranslation();
  const links = ["service", "team", "story", "partnership", "portfolio"];

  const smallscreen = windowWidth <= Size.PadMax;

  return (
    <Scrollpass 
      style={props.style}
      limit={window.innerHeight - 100} 
      padding="1rem"
      className={[props.className, classes.root].join(' ')}
    >
      {(passed) => (
        <Grid container 
          cols={{ 
            default: "1fr 1fr",
            mobile: "1fr 0",
            pad: "2fr 1fr",
            laptop: "4fr 5fr"
          }}
        >
          <Flex alignItems="center">
            <Link href="#" passive>
              <Typography light={smallscreen} variant="logo">{t("header.title")}</Typography>
            </Link>
          </Flex>
          {!smallscreen && <Flex alignItems="center" justifyContent="space-between">
            {links.map(link => <Link color={Color.BodyText} key={link} href={`#${link}`}>{t(`header.parts.${link}`)}</Link>)}
            <Flex style={{ marginTop: 7 }} alignItems="center" justifyContent="space-between">
              <Language prefix="it" />
              <Language prefix="en" marginLeft={5} />
            </Flex>
          </Flex>}
        </Grid>
      )}
    </Scrollpass>
  );
}

// types & interfaces
type RuleName = 'root' | MediaMobile | MediaPad;

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4rem',
    zIndex: 10,
    transition: 'background-color 120ms ease-out',
  },

  "@media screen and (max-width: 768px)": {
    // Size.PadMax
    root: {
      backgroundColor: Color.HeaderBlack
    }
  }, 
  "@media screen and (max-width: 480px)": {
    // Size.MobileMax
  }
})

// helper functions