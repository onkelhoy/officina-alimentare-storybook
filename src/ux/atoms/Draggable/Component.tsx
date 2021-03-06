import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps, Position } from 'utils/Types';

interface Props extends IProps<HTMLDivElement> {
  startPosition?: Position<string>;
  freezeX?: Boolean,
  freezeY?: Boolean,

  onMove?: (x: number, y: number) => void;
}

interface CSSProps {
  pos: Position<string|number>;
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

  const [position, setPosition] = React.useState<Position<string|number>>({ x: props.startPosition?.x || 0, y: props.startPosition?.y || 0 })
  const classes = useStyles({ 
    pos: position, 
    x: !props.freezeX, 
    y: !props.freezeY 
  });
  const ref = React.useRef<HTMLDivElement>(null);

  // mouse functions
  function mousedown(ev: MouseEvent) {
    info.current.clicked = true;
    const pos = getPosition(ev);

    setOffset(pos);
    move(pos);
  }

  function mousemove(event: Event) {
    if (info.current.clicked) {
      const pos = getPosition(event as MouseEvent);
      move(pos);
    }
  }

  // touch functions
  function touchstart (event: TouchEvent) {
    event.preventDefault();
    info.current.clicked = true;
    info.current.touchindex = event.touches.length - 1;

    const touch = event.touches[info.current.touchindex];
    const pos = getPosition(touch);

    setOffset(pos);
    move(pos);
  }

  function touchmove (event: TouchEvent) {
    if (info.current.clicked) {
      event.preventDefault();
      if (typeof info.current.touchindex === "number") {
        const touch = event.touches[info.current.touchindex];
        const pos = getPosition(touch);
        move(pos);
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

  function getPosition(event: MouseEvent | Touch): Position {
    const x = event.pageX;
    const y = event.pageY;

    return { x, y };
  }

  function setOffset(pos: Position) {
    if (ref.current) {
      const box = ref.current.getBoundingClientRect();

      info.current.offset.x = box.x - pos.x;
      info.current.offset.y = box.y - pos.y;
    }
  }

  function move(pos: Position) {
    const { x, y } = pos;

    if (ref.current) {
      const parentBoundary = ref.current.parentElement?.getBoundingClientRect();
      const boundary = ref.current.getBoundingClientRect();

      if (parentBoundary) {
        const pos: Position = { 
          x: x + info.current.offset.x - parentBoundary.x, 
          y: y + info.current.offset.y - parentBoundary.y,
        };

        if (!props.freezeY) {
          if (pos.y < 0) pos.y = 0;
          if (pos.y + boundary.height > parentBoundary.height) pos.y = parentBoundary.height - boundary.height;
        }

        if (!props.freezeX) {
          if (pos.x < 0) pos.x = 0;
          if (pos.x + boundary.width > parentBoundary.width) pos.x = parentBoundary.width - boundary.width;
        }
        
        setPosition(pos);
        if (props.onMove) props.onMove(pos.x, pos.y);
      }
    }
  }

  // cleans events 
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

  // adds & cleans events 
  React.useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.parentNode) throw new Error('[DOM] Draggable needs parentNode');

    // touch
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(any-hover: none)').matches
    ) {
      if (!info.current.touch) {
        // add touch listeners
        info.current.touch = true;
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

  React.useEffect(() => {
    const s = props.startPosition;

    if (s) {
      const pos: Position = { x: -1, y: -1 };
      if (typeof s.x === 'number') pos.x = s.x;
      else if (s.x.endsWith('px')) pos.x = Number(s.x.slice(0, s.x.length - 2));

      if (typeof s.y === 'number') pos.y = s.y;
      else if (s.y.endsWith('px')) pos.y = Number(s.y.slice(0, s.y.length - 2));

      if (pos.x !== -1 && pos.y !== -1) {
        move(pos);
      }
    }
  }, [props.startPosition]);

  const { startPosition, className, onMove, freezeY, freezeX, ...rest } = props;
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
    left: props => props.x ? props.pos.x : '',
    top: props => props.y ? props.pos.y : '',
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