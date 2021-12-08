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

interface Size {
  width: number;
  height: number;
}

interface CSSProps {
  leftwidth: number;
  panelsize: Size;
}

export const Slider: React.FC<Props> = (props) => {
  const [leftwidth, setLeftwidth] = React.useState(0);
  const [panelsize, setPanelSize] = React.useState<Size>({ width: 0, height: 0 });
  
  const timerRef = React.useRef<number>(0);
  const ref = React.useRef<HTMLImageElement>(null);
  const classes = useStyles({ leftwidth, panelsize });

  function onMove(x: number, _y: number) {
    setLeftwidth(x);
  }

  function resize () {
    if (ref.current) {
      const box = ref.current.getBoundingClientRect();
      setPanelSize({ width: box.width, height: box.height });
    }
  }

  React.useEffect(() => {
    init();
    window.onresize = resize;

    return () => {
      window.onresize = null;
    }
  }, []);

  function init() {
    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      if (ref.current && panelsize.width === 0) {
        resize();
      }
      else init();
    }, 100);
  }

  return (
    <div className={[props.className, classes.root].join(' ')}>
      <div className={[classes.left, classes.panel].join(' ')}>
        <Image draggable={false} src={props.source} alt="source" />
      </div>
      <Draggable onMove={onMove} freezeY className={classes.mover}>
        <span />
        <Image draggable={false} src={props.logo} width={100} height={100} alt="slider-mover" />
      </Draggable>
      <div className={[classes.right, classes.panel].join(' ')}>
        <Image ref={ref} draggable={false} src={props.overlay} alt="overlay" />
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
    height: props => props.panelsize.height || '100vh',

    position: 'relative',
  },

  mover: {
    height: '100%',
    width: '4rem',
    zIndex: 2, 
    cursor: 'pointer',

    '&:hover': {
      '& > span': {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        transform: 'translateX(-50%) scaleX(1.2)',
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
      transition: 'all ease 80ms',
      backgroundColor: 'rgba(0,0,0, 0.1)',
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
    overflow: 'hidden',
    backgroundColor: Color.White,

    '& > img': {
      position: 'absolute',
      top: 0,
      left: 0,
    }
  },

  left: {
    left: 0,
    zIndex: 2,
    width: props => `calc(${props.leftwidth}px + 2rem)`,

    '& > img': {
      width: props => props.panelsize.width,
    }
  },

  right: {
    right: 0,
    zIndex: 1,
  }
});

// helper functions