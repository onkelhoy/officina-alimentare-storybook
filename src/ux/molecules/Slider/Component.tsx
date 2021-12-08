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

interface CSSProps {
  leftwidth: number;
}

export const Slider: React.FC<Props> = (props) => {
  const [leftwidth, setLeftwidth] = React.useState(0);
  const classes = useStyles({ leftwidth });

  function onMove(x: number, _y: number) {
    console.log('moving', x);
  }

  return (
    <div className={[props.className, classes.root].join(' ')}>
      <div className={[classes.left, classes.panel].join(' ')}>
        left
      </div>
      <Draggable onMove={onMove} freezeY className={classes.mover}>
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
const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: {
    width: '100%',
    height: '100vh',

    position: 'relative',
  },

  mover: {
    height: '100%',
    width: '4rem',
    zIndex: 2, 
    cursor: 'pointer',

    '&:hover': {
      '& > span': {
        transform: 'translateX(-50%) scaleX(2)',
      }
    },

    '& > span': {
      display: 'block',
      content: '',
      width: '.8rem',
      height: '100%',
      position: 'absolute',
      left: '50%',
      zIndex: 2,
      top: 0,
      transform: 'translateX(-50%)',
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
    zIndex: 2,
    width: props => props.leftwidth
  },

  right: {
    backgroundColor: 'red', // STUB
    right: 0,
    zIndex: 1,
  }
});

// helper functions