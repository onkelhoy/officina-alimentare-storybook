import React from 'react';

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
  description: string;
}

export const Service: React.FC<Props> = props => {
  
  return (
    <Grid style={{ height: '100%' }} container rows="6rem 15rem 1fr">
      <Typography variant="subheader" align="center">{props.title}</Typography>
      <Image placeholderHeight={120} {...props.image} />
      <Typography align="justify">{props.description}</Typography>
    </Grid>
  )
}
