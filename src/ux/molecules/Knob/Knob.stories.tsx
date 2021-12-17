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

const standardArgs = {
  onMove: (x:number, y:number) => {
    // do something
  },
  flipped: false,
};

export const MobileView = Template.bind({});
MobileView.args = {
  ...standardArgs,
  flipped: true,
  src: "/assets/images/slider/logo.svg"
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  ...standardArgs,
  src: "/lzllalala.svg"
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  ...standardArgs,
  src: "/assets/images/slider/logo.svg"
};