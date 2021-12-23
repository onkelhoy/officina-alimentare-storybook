import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from '.'

export default {
  title: 'atoms/Flex',
  component: Flex,
  
  argTypes: {
    justifyContent: {
      options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-evenly', 'space-between'],
  
      control: { 
        type: 'select'
      } 
    },

    alignItems: {
      options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-evenly', 'space-between'],
  
      control: { 
        type: 'select'
      } 
    },

    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse', 'revert'],

      control: { 
        type: 'select'
      }
    }
  }
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Basic Flex',
};

export const Centered = Template.bind({});
Centered.args = {
  children: 'Centered Flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const column = Template.bind({});
column.args = {
  children: ['Row Direction Flex', 'This is the second row'].map(p => <p>{p}</p>),
  direction: 'column',
};