import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '.'

export default {
  title: 'organisms/Slider',
  component: Slider,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  source: '/assets/images/slider/source.svg',
  overlay: '/assets/images/slider/overlay.svg',
  logo: '/assets/images/slider/logo.svg',
};