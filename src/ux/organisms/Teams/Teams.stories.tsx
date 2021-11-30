import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Teams } from '.'

export default {
  title: 'organisms/Teams',
  component: Teams,
} as ComponentMeta<typeof Teams>;

const Template: ComponentStory<typeof Teams> = (args) => <Teams {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Teams',
};