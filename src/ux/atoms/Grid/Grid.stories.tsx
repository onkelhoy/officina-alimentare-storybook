import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from '.'
import { Color } from 'utils/Enums';

export default {
  title: 'atoms/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Basic: ComponentStory<typeof Grid> = (args) => (
  <Grid container cols="repeat(12, 1fr)">
    <Grid col={{
      default: { from: 1, to: 2 },
      mobile: { from: 1, to: 12 },
      pad: { from: 1, to: 9 },
      laptop: { from: 1, to: 6 },
      desktop: { from: 1, to: 3 }
    }}>
      <div style={{ color: 'white', backgroundColor: 'blue', width: '100%', height: '100%' }}>Hello</div>
    </Grid>
  </Grid>
);

export const Extensive: ComponentStory<typeof Grid> = (args) => (
  <Grid container cols="repeat(6, 1fr)" rows="repeat(6, 1fr)">
    <Grid 
      row={{ from: 1, to: 2 }} 
      col={{ from: 1, to: 2 }}
    >
      <Div color="blue" >Item 1</Div>
    </Grid>
    <Grid 
      row={{ from: 2, to: 7 }} 
      col={{ from: 2, to: 3 }}
    >
      <Div color="orange" >Item 2</Div>
    </Grid>
    <Grid 
      row={{ from: 4, to: 6 }} 
      col={{ from: 2, to: 6 }}
    >
      <Div color="cornflowerblue" >Item 3</Div>
    </Grid>
    <Grid 
      row={{ from: 5, to: 7 }} 
      col={{ from: 5, to: 7 }}
    >
      <Div color="red" >Item 4</Div>
    </Grid>
  </Grid>
);

interface DivProps {
  color: string
}
const Div:React.FC<DivProps> = (props) => {
  return <div style={{ color: 'white', backgroundColor: props.color, width: '100%', height: '100%' }}>{props.children}</div>
}