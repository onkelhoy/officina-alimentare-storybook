import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from '.'

export default {
  title: 'atoms/Flex',
  component: Flex,
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