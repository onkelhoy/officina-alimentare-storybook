import React from 'react';

// utils
import { Color } from 'utils/Enums';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';
import { Image } from 'ux/atoms/Image';
import { Link } from 'ux/atoms/Link';

export interface Props {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  linkedin: string;
}

export const Profile: React.FC<Props> = props => {

  return (
    <div>
      <Image {...props.image} height={150} />
      <Typography variant="subheader" align="center">{props.name}</Typography>
      <Typography align="center">{props.role}</Typography>
      <Typography align="center">
        <Link color={Color.Blue} href={props.linkedin}>ln</Link>
      </Typography>
    </div>
  )
}
