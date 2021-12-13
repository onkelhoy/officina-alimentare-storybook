import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Knob } from '.'

export default {
  title: 'molecules/Knob',
  component: Knob,
} as ComponentMeta<typeof Knob>;

const Template: ComponentStory<typeof Knob> = (args) => (
  <Knob {...args} />
);

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  onMove: (x, y) => {
    // do something
  },
  src: "/lzllalala.svg"
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  ...WithoutLogo.args,
  src: "/assets/images/slider/logo.svg"
};