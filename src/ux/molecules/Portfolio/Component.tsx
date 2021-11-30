import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { Color } from 'utils/Enums';
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Link } from 'ux/atoms/Link';
import { Image } from 'ux/atoms/Image';


export interface Props extends IProps {
  name: string;
  x: number;
  y: number;
  angle: number;
}

export const Portfolio: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Link
      href={`assets/documents/portfolio/${props.name}.pdf`}
      target="_blank"
      className={classes.root}
    >
      <Image src={`/assets/images/portfolio/${props.name}.png`} alt={props.name} />
    </Link>
  );
}

// types & interfaces
type RuleName = 'root';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: props => ({
    transform: `translate(-50%, -50%) scale(1) rotate(${props.angle}deg)`,
    left: `${props.x}%`,
    top: `${props.y}%`,
    position: 'absolute',
    backgroundColor: Color.White,

    boxShadow: `1px 3px 3px ${Color.Shadow}`,
    transition: 'transform 200ms ease',
    zIndex: 1,

    '& img': {
      width: '70%',
      // height: '100%',
      minWidth: '100px',
    },

    '&:hover': {
      transform: 'translate(-50%, -50%) rotate(0) scale(1.05) !important',
      zIndex: 2
    }
  }),
});

// helper functions