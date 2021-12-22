import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Partnership } from '.'

export default {
  title: 'organisms/Partnership',
  component: Partnership,
} as ComponentMeta<typeof Partnership>;

const Template: ComponentStory<typeof Partnership> = (args) => (
  <Partnership {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Partnership',
};