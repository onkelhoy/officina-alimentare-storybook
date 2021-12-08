import React, { ReactChild } from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

interface Position {
  x: number;
  y: number;
}

interface Props extends IProps<HTMLDivElement> {
  startPosition?: Position;
  freezeX?: Boolean,
  freezeY?: Boolean,

  onMove?: (x: number, y: number) => void;
}

interface CSSProps {
  pos: Position;
  x: Boolean,
  y: Boolean;
}

export const Draggable: React.FC<Props> = (props) => {
  const info = React.useRef<Info>({
    offset: { x: 0, y: 0 },
    mouse: false,
    touch: false,
    clicked: false,
  });

  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 })
  const classes = useStyles({ 
    pos: position, 
    x: !props.freezeX, 
    y: !props.freezeY 
  });
  const ref = React.useRef<HTMLDivElement>(null);

  // mouse functions
  function mousedown(ev: MouseEvent) {
    info.current.clicked = true;
    const x = ev.pageX;
    const y = ev.pageY;

    setOffset(x, y);
    move(x, y);
  }

  function mousemove(event: Event) {
    const ev = event as MouseEvent;
    if (info.current.clicked) {
      move(ev.pageX, ev.pageY);
    }
  }

  // touch functions
  function touchstart (event: TouchEvent) {
    info.current.clicked = true;
    info.current.touchindex = event.touches.length - 1;

    const touch = event.touches[info.current.touchindex];
    const x = touch.pageX;
    const y = touch.pageY;

    setOffset(x, y);
    move(x, y);
  }

  function touchmove (event: TouchEvent) {
    if (info.current.clicked) {
      if (typeof info.current.touchindex === "number") {
        const touch = event.touches[info.current.touchindex];
        const x = touch.pageX;
        const y = touch.pageY;
        move(x, y);
      }
    }
  }

  // common functions (mouse/touch)
  function eventup() {
    if (info.current.clicked) {
      // move last spot
      // move(ev.pageX, ev.pageY); // looks too snappy
      // then reset
      info.current.clicked = false;
      info.current.offset = { x: 0, y: 0 };
    }
  }

  function setOffset(x:number, y:number) {
    if (ref.current) {
      const box = ref.current.getBoundingClientRect();

      info.current.offset.x = box.x - x;
      info.current.offset.y = box.y - y;
    }
  }

  function move(x:number, y:number) {
    if (ref.current) {
      const parentBoundary = ref.current.parentElement?.getBoundingClientRect();
      const boundary = ref.current.getBoundingClientRect();

      if (parentBoundary) {
        const pos: Position = { 
          x: x + info.current.offset.x, 
          y: y + info.current.offset.y,
        };

        if (!props.freezeY) {
          if (pos.y < parentBoundary.y) pos.y = parentBoundary.y;
          if (pos.y > (parentBoundary.y + parentBoundary.height)) pos.y = parentBoundary.y + parentBoundary.height;
        }
        
        if (!props.freezeX) {
          if (pos.x < parentBoundary.x) pos.x = parentBoundary.x;
          if (pos.x > (parentBoundary.x + parentBoundary.width)) pos.x = parentBoundary.x + parentBoundary.width;
        }
        
        console.log({parentBoundary, pos, boundary});
        setPosition(pos);
        if (props.onMove) props.onMove(pos.x, pos.y)
      }
    }
  }

  React.useEffect(() => {
    setPosition({ x: props.startPosition?.x || 0, y: props.startPosition?.y || 0 });

    return () => {
      // cleanup events
      if (!ref.current) return;
      if (!ref.current.parentNode) throw new Error('[DOM] Draggable needs parentNode');

      // clear mouse
      if (info.current.mouse) {
        ref.current.removeEventListener('mousedown', mousedown);
        window.document.documentElement.removeEventListener('mouseup', eventup);
        window.document.documentElement.removeEventListener('mousemove', mousemove);
      }
      // clear touch
      if (info.current.touch) {
        ref.current.removeEventListener('touchstart', touchstart);
        window.document.documentElement.removeEventListener('touchmove', touchmove);
        window.document.documentElement.removeEventListener('touchend', eventup);
      }
    }
  }, []);

  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.parentNode) throw new Error('[DOM] Draggable needs parentNode');

    // touch
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(any-hover: none)').matches
    ) {
      info.current.touch = true;
      if (!info.current.touch) {
        // add touch listeners
        ref.current.addEventListener('touchstart', touchstart);
        window.document.documentElement.addEventListener('touchmove', touchmove);
        window.document.documentElement.addEventListener('touchend', eventup);
      }
    }

    // mouse
    if (
      window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(any-hover: hover)').matches ||
      window.matchMedia('(hover: hover)').matches
    ) {
      if (!info.current.mouse) {
        info.current.mouse = true;
        ref.current.addEventListener('mousedown', mousedown);
        window.document.documentElement.addEventListener('mouseup', eventup);
        window.document.documentElement.addEventListener('mousemove', mousemove);
      }
    }
  }, [ref.current]);

  const { startPosition, className, ...rest } = props;
  return (
    <div
      ref={ref}
      {...rest}
      className={[className || '', classes.root, 'noselect'].join(' ')}
    >
      {props.children}
    </div>
  )
}

// css design
type RuleName = 'root';
const useStyles = createUseStyles<RuleName, CSSProps, unknown>({
  root: {
    position: 'absolute',
    left: props => props.x ? props.pos.x + 'px' : '',
    top: props => props.y ? props.pos.y + 'px' : '',
  }
});

// types & interfaces
interface Info {
  clicked: Boolean;
  offset: {
    x: number;
    y: number;
  };
  touchindex?: number;
  mouse: Boolean;
  touch: Boolean;
}

// helper functions