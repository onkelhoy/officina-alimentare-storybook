import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';
import { Color } from 'utils/Enums';

export interface Props extends Omit<IProps, 'size'> {
  variant?: 'body'|'header'|'subheader'|'logo';
  align?: 'center'|'left'|'right'|'justify';
  color?: Color;
  size?: 'small'|'smaller';
}

export const Typography: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  switch (props.variant) {
    default: 
      return (
        <p 
          style={props.style} 
          className={[props.className, classes.body, classes.root].join(' ')}
        >
          {props.children}
        </p>
      )
    case 'header': 
      return (
        <h2 
          style={props.style} 
          className={[props.className, classes.header, classes.root].join(' ')}
        >
          {props.children}
        </h2>
      )
    case 'subheader': 
      return (
        <h4 
          style={props.style} 
          className={[props.className, classes.subheader, classes.root].join(' ')}
        >
          {props.children}
        </h4>
      )
    case 'logo': 
      return (
        <h1 
          className={[classes.logo, classes.root].join(' ')}
        >
          {props.children}
        </h1>
      )
  }
}

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: props => ({
    textAlign: props.align,
    color: props.color,
    fontSize: props.size,
  }),

  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: Color.BodyText,
  },

  logo: {
    margin: 0,
    height: '100%',
    fontSize: '20pt',
    marginLeft: '4rem',
    fontFamily: '"Nobile", sans-serif',
  },

  header: {
    fontSize: '3rem',
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: '1rem',
  },

  subheader: {
    fontSize: '1.5rem',
    marginBottom: '.5rem',
    fontWeight: 500,
    lineHeight: 1.2,
  }
})

// types & interfaces
type RuleName = 'root' | 'body' | 'logo' | 'subheader' | 'header';

// helper functions