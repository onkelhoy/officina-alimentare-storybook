import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Service } from '.'

export default {
  title: 'molecules/Service',
  component: Service,
} as ComponentMeta<typeof Service>;

const Template: ComponentStory<typeof Service> = (args) => (
  <Service {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Service',
  image: {
    src: 'http://placehold.it/200x200',
    alt: 'service placeholder picture',
  },
  description: ['Commodo est cillum consequat anim. Aliqua quis velit in nisi ipsum adipisicing ad quis nulla magna laborum fugiat occaecat. Sint occaecat fugiat mollit commodo tempor adipisicing. Tempor est occaecat sint ad sit Lorem dolor nostrud culpa proident.'],
};