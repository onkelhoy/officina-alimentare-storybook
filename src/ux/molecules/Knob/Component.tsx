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
type RuleName = 'beam'|'image'|'flex';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  flex: {
    position: 'relative',

    '&:hover': {
      beam: {
        transform: 'translate(-50%, -50%) scaleX(1.2)',
      }
    }
  },
  beam: {
    display: 'block',
    content: '',
    width: props => props.flipped ? '100%' : '6px',
    height: props => props.flipped ? '6px' : '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 2,
    transform: 'translate(-50%, -50%)',
    transition: 'all ease 80ms',
    backgroundColor: 'rgba(0,0,0, 0.9)',
  },
  image: {
    zIndex: 3,
    height: 100,
    position: "relative",

    '&::before': {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "50%",
      height: "100%",
      cursor: "w-resize"
    },
    '&::after': {
      content: '""',
      position: "absolute",
      right: 0,
      top: 0,
      width: "50%",
      height: "100%",
      cursor: "e-resize"
    }
  },
});

// helper functions