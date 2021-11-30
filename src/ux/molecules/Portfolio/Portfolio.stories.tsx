import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Portfolio } from '.'

export default {
  title: 'molecules/Portfolio',
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = (args) => (
  <Portfolio {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'Conv SANA',
  x: 20,
  y: 50,
  angle: 0,
};