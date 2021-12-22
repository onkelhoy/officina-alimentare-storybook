import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Image } from 'ux/atoms/Image';
import { Flex } from 'ux/atoms/Flex';

export interface Props extends IProps {
  src: string;
  flipped?: Boolean;
}

export const Knob: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Flex 
      justifyContent="center" 
      alignItems="center" 
      className={classes.flex}
    >
      <span className={classes.beam} />
      <Flex 
        justifyContent="center" 
        alignItems="center"
        className={classes.left}>
          {props.flipped ? '▲' : '◀︎'}
      </Flex>
      <Flex 
        justifyContent="center" 
        alignItems="center"
        className={classes.right}>
          {props.flipped ? '▼' : '►'}
      </Flex>
      <span className={classes.image}>
        <Image 
          className="noselect" 
          draggable={false} 
          src={props.src} 
          width={100} 
          height={100} 
          alt="slider-mover"
        />
      </span>
    </Flex>
  );
}

// types & interfaces
type RuleName = 'beam'|'image'|'flex'|'left'|'right';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  flex: {
    position: 'relative',

    '&:hover': {
      beam: {
        transform: 'translate(-50%, -50%) scaleX(1.5)',
      }
    }
  },
  beam: {
    display: 'block',
    width: props => props.flipped ? '100%' : '6px',
    height: props => props.flipped ? '6px' : '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    transition: 'all ease 80ms',
    backgroundColor: 'rgba(0,0,0, 0.9)',
  },
  image: {
    zIndex: 3,
    height: 100,
    position: "relative",
    cursor: props => props.flipped ? 'row-resize' : 'col-resize',
  },
  left: props => ({
    ...box(props),
  }),
  right: props => ({
    ...box(props, true),
  }),
});

// helper functions

function box(props: Props, second?: Boolean) {
  return {
    zIndex: 4,
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: transform(!!props.flipped, second),

    width: 150,
    height: 150,

    // opacity: '0',
    transition: 'opacity ease-out 200ms',
    fontSize: '18pt',

    // '&:hover': {
    //   opacity: 1,
    // }
  }
}

function transform(flipped: Boolean, second?: Boolean) {
  return `translate(${left(flipped, second)}, ${top(flipped, second)})`
}

function top(flipped: Boolean, second?: Boolean): string {
  if (flipped) return second ? '0' : '-100%';

  return '-50%';
}

function left(flipped: Boolean, second?: Boolean): string {
  if (flipped) return '-50%';

  return second ? '0' : '-100%';
}