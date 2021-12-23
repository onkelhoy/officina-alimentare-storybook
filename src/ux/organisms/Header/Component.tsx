import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

// utils
import { MediaMobile, MediaPad, IProps } from 'utils/Types';
import { Color, Size } from 'utils/Enums';
import { AppContext } from 'AppContext';

// Atoms ⚛️
import { Button } from 'ux/atoms/Button';
import { Image } from 'ux/atoms/Image';
import { Grid } from 'ux/atoms/Grid';
import { Flex } from 'ux/atoms/Flex';
import { Link } from 'ux/atoms/Link';
import { Scrollpass } from 'ux/atoms/Scrollpass';
import { Typography } from 'ux/atoms/Typography';

// Molecules *️⃣
import { Language } from 'ux/molecules/Language';
import { Menu } from 'ux/molecules/Menu';

export interface Props extends IProps {}

export const Header: React.FC<Props> = (props) => {
  const { windowWidth } = React.useContext(AppContext);
  const classes = useStyles(props);
  const [menu, setMenu] = React.useState<boolean>(false);
  const { t } = useTranslation();
  const links = ["service", "team", "story", "partnership", "portfolio"];

  const smallscreen = windowWidth <= Size.PadMax;

  function menuclick() {
    setMenu(!menu);
  }

  const menuthings = (
    <>
      {links.map(link => <Link color={Color.BodyText} key={link} href={`#${link}`}>{t(`header.parts.${link}`)}</Link>)}
      <Flex className="flags" style={{ marginTop: !smallscreen ? 7 : '1rem' }} alignItems="center" justifyContent={smallscreen ? 'center' : 'space-between'}>
        <Language prefix="it" />
        <Language prefix="en" marginLeft={5} />
      </Flex>
    </>
  )

  return (
    <Scrollpass 
      style={props.style}
      limit={window.innerHeight - 100} 
      // padding="1rem"
      className={[props.className, classes.root].join(' ')}
    >
      {(passed) => (<>
        <Grid className={classes.grid} container 
          cols={{ 
            default: "1fr 1fr",
            mobile: "1fr 4rem",
            pad: "1fr 4rem",
            laptop: "4fr 5fr"
          }}
        >
          <Flex alignItems="center">
            <Link href="#" passive>
              <Typography light={smallscreen} variant="logo">{t("header.title")}</Typography>
            </Link>
          </Flex>
          {!smallscreen && <Flex alignItems="center" justifyContent="space-between">
            {menuthings}
          </Flex>}
          {smallscreen && <Flex alignItems="center" justifyContent="flex-end">
            <Button className={classes.button} variant="icon" onClick={menuclick}>
              <Image src="assets/images/menu.svg" alt="menu" />
            </Button>
          </Flex>}
        </Grid>
        <Menu className={classes.menu} direction="column" open={smallscreen && menu}>
          <Flex direction="column">
            {menuthings}
          </Flex>
        </Menu>
      </>)}
    </Scrollpass>
  );
}

// types & interfaces
type RuleName = 'root' | 'grid' | 'menu' | 'button' | MediaMobile | MediaPad;

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

  grid: {
    padding: '0 1rem',
  },

  button: {
    width: '2.5rem',
    height: '2.5rem',
    border: '2.5px solid #fff',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
  },

  menu: {
    height: 'auto',

    '& a': {
      padding: '0.5rem 0',
      fontSize: '15pt',

      borderBottom: '1px solid #000' 
    },

    '& .flags': {
      marginTop: '1.5rem',
    }
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