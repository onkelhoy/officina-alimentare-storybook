import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { IProps } from 'utils/Types';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';

export interface Props extends IProps {
  name: string;
  title: string;
  description?: string;
  classes?: { 
    body: string;
    root: string;
  };
  children?: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const classes = useStyles(props);

  return (
    <div 
      ref={ref} 
      className={[
        'section', 
        props.className, 
        props.classes?.root, 
        classes.root].join(' ')} 
      id={props.name} 
      aria-label={`${props.name}-section`}
    >
      <Typography className={classes.header} align="center" variant="header">{props.title}</Typography>
      {props.description && <Typography className={classes.subheader} align="justify">{props.description}</Typography>}
      <div className={props.classes?.body}>
        {props.children}
      </div>
    </div>
  )
});

// css design
type RuleName = 'root' | 'header' | 'subheader';
const useStyles = createUseStyles<RuleName, Props, unknown>({
  root: {
    paddingTop: '6rem'
  },
  header: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subheader: {
    marginBottom: '3rem',
  }
});

// types & interfaces

// helper functions