import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { CSSJustify } from 'utils/Types';

export interface Props extends IProps {
  open: boolean;
  width?: number | string;
  justify?: CSSJustify;
}

// FIXME want the menu content to stay while the "toggle" effect trims it (instead of content animated up and down)
export const Menu: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <div className={[classes.container].join(' ')}>
      <div className={[props.className, classes.root].join(' ')}>
        {props.children}
      </div>
    </div>
  );
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  container: props => ({
    display: 'flex',
    justifyContent: props.justify,
    overflow: 'hidden',
    position: 'relative',
    width: '100%', 
  }),
  root: props => ({
    transform: props.open ? 'translateY(0)' : 'translateY(calc(-100% - 1rem))',
    width: props.width,
    position: 'relative',
    transition: 'transform 200ms ease-out',
    padding: '1rem',
    paddingBottom: '2rem',
    boxSizing: 'border-box',
    border: '2px solid orange',
    height: '100%',
  })
});

// types & interfaces
type RuleName = 'root' | 'container';

// helper functions