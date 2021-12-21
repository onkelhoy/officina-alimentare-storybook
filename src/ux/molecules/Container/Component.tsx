import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { CSSDirection, CSSJustify, MediaSizes } from 'utils/Types';

// Atoms ⚛️
import { Flex, Props as IFlex } from 'ux/atoms/Flex';


export interface Props extends IFlex {
  
}

export const Container: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Flex {...props} className={[props.className, classes.root].join(' ')}>
      {props.children}
    </Flex>
  );
}

// types

type RuleName = 'root' | MediaSizes;

const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    paddingLeft: '25%',
    width: '50%',
    transition: 'all .3s ease-out'
  },

  "@media screen and (max-width: 1200px)": {
    // Size.DesktopMax
    root: {
      paddingLeft: '20%',
      width: '60%'
    }
  }, 
  "@media screen and (max-width: 1024px)": {
    // Size.LaptopMax
    root: {
      paddingLeft: '15%',
      width: '70%'
    }
  }, 
  "@media screen and (max-width: 768px)": {
    // Size.PadMax
    root: {
      paddingLeft: '10%',
      width: '80%'
    }
  }, 
  "@media screen and (max-width: 480px)": {
    // Size.MobileMax
    root: {
      paddingLeft: '5%',
      width: '90%'
    }
  }
})