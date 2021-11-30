import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

export interface Props extends IProps {
 
}

export interface ItemProps extends IProps {
 
}

export const List: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <ul className={[props.className, classes.list].join(' ')}>
      {props.children}
    </ul>
  );
}

export const ListItem: React.FC<ItemProps> = props => {
  const classes = useStyles(props);

  return (
    <li className={[props.className, classes.item].join(' ')}>{props.children}</li>
  )
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  list: {
    listStyle: 'none'
  },
  item: {
    padding: '1rem'
  }
})

// types & interfaces
type RuleName = 'list' | 'item';

// helper functions