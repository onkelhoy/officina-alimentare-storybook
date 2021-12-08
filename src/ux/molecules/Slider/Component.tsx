import React from 'react';
import { createUseStyles } from 'react-jss';
import { Color } from 'utils/Enums';

// utils
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Image } from 'ux/atoms/Image';
import { Draggable } from 'ux/atoms/Draggable';

export interface Props extends IProps {
  overlay: string;
  logo: string;
  source: string;
}

export const Slider: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  React.useEffect(() => {
    
    return () => {

    }
  }, []);

  return (
    <div className={[props.className, classes.root].join(' ')}>
      <div className={[classes.left, classes.panel].join(' ')}>
        left
      </div>
      <Draggable freezeY className={classes.mover}>
        <span />
        <Image draggable={false} src={props.logo} width={100} height={100} alt="slider-mover" />
      </Draggable>
      <div className={[classes.right, classes.panel].join(' ')}>
        right
      </div>
    </div>
  );
}

// types & interfaces
type RuleName = 'root'|'left'|'right'|'panel'|'mover';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    width: '100%',
    height: '100vh',

    position: 'relative',
  },

  mover: {
    height: '100%',
    width: '.8rem',

    zIndex: 2, 
    cursor: 'pointer',

    '&:hover': {
      '& > span': {
        transform: 'scaleX(2)',
      }
    },

    '& > span': {
      display: 'block',
      content: '',
      width: '100%', 
      height: '100%',
      position: 'absolute',
      left: '0',
      zIndex: 2,
      top: 0,
      transition: 'transform ease 80ms',
      backgroundColor: 'orange',
    },

    '& > img': {
      zIndex: 3,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  },

  panel: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    top: 0,

    // STUB for dev purpose
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    boxSizing: 'border-box',
    fontSize: '2rem',
  },

  left: {
    backgroundColor: 'blue', // STUB
    left: 0,
  },

  right: {
    backgroundColor: 'red', // STUB
    right: 0,
  }
});

// helper functions