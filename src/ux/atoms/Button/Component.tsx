import React from 'react';
import { createUseStyles } from 'react-jss';
import { Color } from 'utils/Enums';

// utils
import { IProps } from 'utils/Types';

export interface Props extends IProps<HTMLButtonElement> {
  variant?: 'icon'|'text';
}

export const Button: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  function click (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (props.onClick) props.onClick(event);
  }

  return (
    <button 
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={[props.className, classes.root].join(' ')}
      onClick={click}
    >
        {props.children}
    </button>
  );
}

// types & interfaces
type RuleName = 'root';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: props => ({
    border: props.variant === 'icon' ? 'none' : undefined,
    backgroundColor: Color.Transparent,
    cursor: 'pointer',
    padding: props.variant === 'icon' ? 0 : undefined,
  }),
});

// helper functions