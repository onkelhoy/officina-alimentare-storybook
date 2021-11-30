import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Draggable } from '.'

export default {
  title: 'atoms/Draggable',
  component: Draggable,
} as ComponentMeta<typeof Draggable>;

const Template: ComponentStory<typeof Draggable> = (args) => (
  <Draggable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Draggable',
};