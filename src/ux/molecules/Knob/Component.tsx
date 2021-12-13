import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Image } from 'ux/atoms/Image';
import { Flex } from 'ux/atoms/Flex';
import { Draggable } from 'ux/atoms/Draggable';

export interface Props extends IProps {
  onMove: (x: number, y: number) => void;
  src: string;
}

export const Knob: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Draggable 
      onMove={props.onMove} 
      startPosition={{ x: '50%', y: '0' }}
      freezeY 
      className={classes.root}
    >
      <Flex justifyContent="center" alignItems="center">
        <span className="beam" />
        <span className="image">
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
    </Draggable>
  );
}

// types & interfaces
type RuleName = 'root';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    height: '100%',
    width: '4rem',
    zIndex: 2, 
    cursor: 'pointer',

    '&:hover': {
      '& .flex > span.beam': {
        transform: 'translate(-50%, -50%) scaleX(1.2)',
      }
    },

    "& .flex": {
      position: 'relative',

      '&>span.beam': {
        display: 'block',
        content: '',
        width: '6px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 2,
        transform: 'translate(-50%, -50%)',
        transition: 'all ease 80ms',
        backgroundColor: 'rgba(0,0,0, 0.9)',
      },
      '&>span.image': {
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
    }
  },
});

// helper functions