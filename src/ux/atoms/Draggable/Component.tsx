import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

export interface Props extends IProps {
  x: boolean;
  y: boolean;
}

export const Draggable: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const info = React.useRef<MouseTouchInfo>(defaultMouseTouchInfo);
  const ref = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState<number>(1);
  const [height, setHeight] = React.useState<number>(1);

  function mousedown() {
    console.log('mousedown');
    
  }

  function mouseup() {
console.log('mouseup');

  }

  function mousemove() {
console.log('mousemove');

  }

  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.parentNode) throw new Error('[DOM] Draggable needs parentNode');

    // touch
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(any-hover: none)').matches
    ) {
      info.current.touch.active = true;
    }

    // mouse
    if (
      window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(any-hover: hover)').matches ||
      window.matchMedia('(hover: hover)').matches
    ) {
      info.current.mouse.active = true;
      ref.current.addEventListener('mousedown', mousedown);
      ref.current.parentNode.addEventListener('mouseup', mouseup);
      ref.current.parentNode.addEventListener('mousemove', mousemove);
    }

    return () => {
      if (!ref.current) return;
      if (!ref.current.parentNode) throw new Error('[DOM] Draggable needs parentNode');

      // clear event listeners
      if (info.current.mouse.active) {
        ref.current.removeEventListener('mousedown', mousedown);
        ref.current.parentNode.removeEventListener('mouseup', mouseup);
        ref.current.parentNode.removeEventListener('mousemove', mousemove);
      }
      if (info.current.touch.active) {

      }
    }
  }, [ref.current])

  return (
    <div ref={ref} className={[props.className, classes.container].join(' ')}>
      
    </div>
  );
}

// data & variables
const defaultMouseTouchInfo: MouseTouchInfo = {
  mouse: {
    active: false,
    clicked: false,
  },
  touch: {
    active: false,
    clicked: false,
  },
}

// css design
type RuleName = 'container';
const useStyles = createUseStyles<RuleName, Props, unknown>({
  container: {
    height: '100%',
    width: '100%',

    minHeight: '10rem'
  },
});

// types & interfaces
interface MouseTouchInfo {
  mouse: Info;
  touch: Info;
}

interface Info {
  active: boolean;
  clicked: boolean;
}

// helper functions