import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { CSSDirection, CSSJustify } from 'utils/Types';

export interface Props extends IProps {
  justifyContent?: CSSJustify;
  alignItems?: CSSJustify;
  direction?: CSSDirection;
}

export const Flex: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <div style={props.style} className={[props.className, classes.root].join(' ')}>
      {props.children}
    </div>
  );
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: props => props.justifyContent,
    flexDirection: props => props.direction,
    alignItems: props => props.alignItems,
  },
});
// types & interfaces
type RuleName = 'root';

// helper functions