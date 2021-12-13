import React from 'react';
import { createUseStyles } from 'react-jss';
import { Color } from 'utils/Enums';

// utils
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Image } from 'ux/atoms/Image';

// Molecules *️⃣
import { Knob } from 'ux/molecules/Knob';


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
  const isfirst = React.useRef<boolean>(true);
  const classes = useStyles({ leftwidth, panelsize });

  function onMove(x: number, _y: number) {
    setLeftwidth(x);
  }

  function resize () {
    if (ref.current) {
      const box = ref.current.getBoundingClientRect();
      setPanelSize({ width: box.width, height: box.height });

      if (isfirst.current) {
        setLeftwidth(box.width / 2);
        isfirst.current = false;
      }
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
        <Image className="noselect" draggable={false} src={props.source} alt="source" />
      </div>
      <Knob src="/assets/images/slider/logo.svg" onMove={onMove} />
      <div className={[classes.right, classes.panel].join(' ')}>
        <Image className="noselect" ref={ref} draggable={false} src={props.overlay} alt="overlay" />
      </div>
    </div>
  );
}

// types & interfaces
type RuleName = 'root'|'left'|'right'|'panel';

// css design

const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: {
    width: '100%',
    height: props => props.panelsize.height || '100vh',

    position: 'relative',
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