import React from 'react';
import { createUseStyles } from 'react-jss';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';
import { Image } from 'ux/atoms/Image';
import { Grid } from 'ux/atoms/Grid';

export interface Props {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string[];
}

export const Service: React.FC<Props> = props => {
  const classes = useStyles(props);
  
  return (
    <Grid 
      style={{ height: '100%' }} 
      container 
      rows={{
        default: "8rem 15rem 1fr",
        mobile: "auto 8rem auto",
      }}
    >
      <Typography variant="subheader" align="center">{props.title}</Typography>
      <Image placeholderHeight={120} style={{ height: '100%' }} {...props.image} />
      <div className={classes.desc}>
        {props.description.map((text, index) => <Typography key={index} style={{ margin: 0 }} align="justify">{text}</Typography>)}
      </div>
    </Grid>
  )
}

// types & interfaces
type RuleName = 'desc';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  desc: {
    
  },
});

// helper functions
