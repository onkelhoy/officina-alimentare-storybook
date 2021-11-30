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
    <Grid container cols="1fr 3fr 1fr" colGap="1rem">
      <Image src={`/assets/images/story/${props.date}A.svg`} alt="story A"/>
      <div className="text">
        {props.texts.map((text, index) => (
          <Typography key={index}>{text}</Typography>
        ))}
      </div>
      <Image src={`/assets/images/story/${props.date}B.svg`} alt="story B"/>
    </Grid>
  )
}
