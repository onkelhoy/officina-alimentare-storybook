import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { Color } from 'utils/Enums';

export interface Props extends IProps {
  href: string;
  color?: Color;
  target?: string;
  passive?: boolean;
}

export const Link: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <a 
      style={props.style}
      target={props.target}
      className={[props.className, classes.root].join(' ')} 
      href={props.href}>
        {props.children}
    </a>
  );
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: props => ({
    color: props.passive ? 'inherit' : props.color ? props.color : Color.Black,
    textDecoration: 'none',
    
    '&:hover': {
      fontWeight: !props.passive ? 800 : 'normal',
    }
  }),
})

// types & interfaces
type RuleName = 'root';

// helper functions