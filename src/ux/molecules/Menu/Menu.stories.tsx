import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from '.'

export default {
  title: 'molecules/Menu',
  component: Menu,

  argTypes: {
    justify: {
      options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-evenly', 'space-between'],
  
      control: { 
        type: 'select'
      } 
    },
  }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Menu',
  open: true,
  width: '40%'
};