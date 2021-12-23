import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { Color } from 'utils/Enums';

// Atoms ⚛️
import { Flex, Props as FlexProps } from 'ux/atoms/Flex';

export interface Props extends FlexProps {
  open: boolean;
  width?: number | string;
}

// FIXME want the menu content to stay while the "toggle" effect trims it (instead of content animated up and down)
export const Menu: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { open, width, className, children, ...rest } = props;

  return (
    <Flex {...rest} className={[classes.container].join(' ')}>
      <div className={[className, classes.root].join(' ')}>
        {children}
      </div>
    </Flex>
  );
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  container: props => ({
    overflow: 'hidden',
    position: 'relative',
    width: '100%', 
    height: 'auto',
    paddingBottom: '5px', // for shadow
    pointerEvents: props.open ? 'auto' : 'none',
  }),
  root: props => ({
    transform: props.open ? 'translateY(0)' : 'translateY(calc(-100% - 1rem))',
    width: props.width,
    position: 'relative',
    transition: 'transform 200ms ease-out',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: Color.White,
    boxShadow: `0 3px 10px ${Color.Glow}`,
    // height: '100%',
  })
});

// types & interfaces
type RuleName = 'root' | 'container';

// helper functions