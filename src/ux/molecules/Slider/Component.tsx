import React from 'react';
import { createUseStyles } from 'react-jss';
import { Color } from 'utils/Enums';

// utils
import { IProps } from 'utils/Types';

export interface Props extends IProps {
  overlay: string;
  logo: string;
  source: string;
}

export const Slider: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const moverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    
    return () => {

    }
  }, []);

  return (
    <div className={[props.className, classes.root].join(' ')}>
      <div className={[classes.left, classes.panel].join(' ')}>
        left
      </div>
      <div ref={moverRef} className={classes.mover}>

      </div>
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
    position: 'absolute',
    left: '50%',
    top: 0,
    height: '100%',
    width: '1rem',
    zIndex: 2, 
    backgroundColor: Color.Shadow,
    transition: 'transform ease 80ms',

    '&:hover': {
      transform: 'translatescale(1.2)',
    }
  },

  panel: {
    position: 'absolute',
    width: '50%',
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