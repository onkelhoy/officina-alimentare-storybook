import React from 'react';
import i18next from "i18next";
import { createUseStyles } from 'react-jss';

// utils
import { IProps, Languages, MediaMobile, MediaPad } from 'utils/Types';
import { Color } from 'utils/Enums';

import { AppContext } from 'AppContext';

// Atoms ⚛️
import { Button } from 'ux/atoms/Button';
import { Image } from 'ux/atoms/Image';

export interface Props extends IProps {
  prefix: Languages;
  marginLeft?: number;
}

export const Language: React.FC<Props> = (props) => {
  const classes = useStyles({ ...props, current: i18next.language as Languages});
  const { changeLanguage } = React.useContext(AppContext);
  const [hover, setHover] = React.useState(false); 

  function click () {
    changeLanguage(props.prefix);
  }

  function doHover(type: boolean) {
    return () => setHover(type);
  }

  return (
    <Button 
      variant="icon"
      className={classes.root}
      onClick={click}
      onMouseOver={doHover(true)}
      onMouseLeave={doHover(false)}
    >
      {!hover && <Image className={classes.image} src={`/assets/images/flags/${props.prefix}.BW.svg`} alt={`Language-${props.prefix}`} />}
      {hover && <Image className={classes.image} src={`/assets/images/flags/${props.prefix}.C.svg`} alt={`Language-${props.prefix}`} />}
    </Button>
  );
}

// types & interfaces
type RuleName = 'root' | 'image' | MediaPad;
interface CSSProps extends Props {
  current: Languages;
}

// css design
const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: props => ({
    width: 20,
    marginLeft: props.marginLeft,
    borderBottom: `2px solid ${props.current === props.prefix ? Color.Shadow : Color.Transparent}`,
  }),

  image: {
    backgroundColor: Color.White,
  },

  "@media screen and (max-width: 768px)": {
    // Size.MobileMax
    root: {
      width: '2rem !important'
    }
  }
});

// helper functions