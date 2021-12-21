import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps, Dimensions, Position } from 'utils/Types';
import { Color, Size } from 'utils/Enums';
import { AppContext } from 'AppContext';

// Atoms ⚛️
import { Image } from 'ux/atoms/Image';
import { Draggable } from 'ux/atoms/Draggable';

// Molecules *️⃣
import { Knob } from 'ux/molecules/Knob';

export interface Props extends IProps {
  overlay: string;
  logo: string;
  source: string;
}

interface CSSProps {
  size: Dimensions;
  panelsize: Dimensions;
  smallscreen: boolean;
}

export const Slider: React.FC<Props> = (props) => {
  const { windowWidth } = React.useContext(AppContext);
  
  const [size, setSize] = React.useState<Dimensions>({ width: 0, height: 0 });
  const [panelsize, setPanelSize] = React.useState<Dimensions>({ width: 0, height: 0 });
  const [startpos, setStartpos] = React.useState<Position<string>>({ x: '50%', y: '50%' });
  const [smallscreen, setSmallscreen] = React.useState<boolean>(window.innerWidth < Size.PadMax);
  
  const ref = React.useRef<HTMLImageElement>(null);
  const classes = useStyles({ size, panelsize, smallscreen });

  function onmove(x: number, y: number) {
    setSize({ height: y, width: x });
  }

  function resize () {
    if (ref.current) {
      const box = ref.current.getBoundingClientRect();
      setPanelSize({ width: box.width, height: box.height });

      let w = 0, h = 0;
      if (window.innerWidth < Size.PadMax) 
        h = box.height / 2;
      else 
        w = box.width / 2;

      setSize({ width: w, height: h });
      setStartpos({ x: w.toString().concat('px'), y: h.toString().concat('px') });
    }
  }

  React.useEffect(() => {
    const sm = window.innerWidth < Size.PadMax;

    if (smallscreen !== sm) {
      setSmallscreen(sm);
    } 

    resize();
  }, [windowWidth]);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (ref.current) {
        resize();
        window.clearInterval(interval);
      }
    }, 100);

    return () => {
      window.clearInterval(interval);
    }
  }, [])
  
  return (
    <div className={[props.className, classes.root].join(' ')}>
      <div className={[classes.left, classes.panel].join(' ')}>
        <Image className="noselect" draggable={false} src={props.source} alt="source" />
      </div>
      <Draggable 
        onMove={onmove} 
        startPosition={startpos}
        freezeY={!smallscreen} 
        freezeX={smallscreen}
        className={classes.drag}
      >
        <Knob 
          flipped={smallscreen} 
          src="/assets/images/slider/logo.svg" 
        />
      </Draggable>
      <div className={[classes.right, classes.panel].join(' ')}>
        <Image className="noselect" ref={ref} draggable={false} src={props.overlay} alt="overlay" />
      </div>
    </div>
  );
}

// types & interfaces
type RuleName = 'root'|'left'|'right'|'panel'|'drag';

// css design

const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: {
    width: '100%',
    height: props => props.panelsize.height || '100vh',

    position: 'relative',
  },

  drag: {
    width: props => props.smallscreen ? '100%' : '4rem',
    height: props => props.smallscreen ? '4rem' : '100%',
    zIndex: 2, 
    cursor: 'pointer',
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

  left: props => {
    const w = `calc(${props.size.width}px + 2rem)`;
    const h = `calc(${props.size.height}px + 2rem)`;

    return {
      left: 0,
      zIndex: 2,
      width: props.smallscreen ? '100%' : w,
      height: props.smallscreen ? h : '100%',
  
      '& > img': {
        width: props.panelsize.width,
      }
    }
  },

  right: {
    right: 0,
    zIndex: 1,
  }
});

// helper functions