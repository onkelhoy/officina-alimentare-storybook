import React from 'react';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';
import { Image } from 'ux/atoms/Image';
import { Grid } from 'ux/atoms/Grid';

export interface Props {
  date: number;
  texts: string[];
}

export const Story: React.FC<Props> = props => {

  return (
    <Grid 
      container 
      cols={{
        default: "1fr 3fr 1fr",
        mobile: '1fr 5fr 1fr',
      }} 
      colGap="1rem"
      alignItems="center"
    >
      <Image style={{ transform: 'translateX(-0.5rem)' }} src={`/assets/images/story/${props.date}A.svg`} alt="story A"/>
      {props.texts.map((text, index) => (
        <Typography variant="body" key={index}>{text}</Typography>
      ))}
      <Image style={{ transform: 'translateX(0.5rem)' }} src={`/assets/images/story/${props.date}B.svg`} alt="story B"/>
    </Grid>
  )
}

// helper functions
