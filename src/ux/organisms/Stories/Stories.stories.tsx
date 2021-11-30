import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stories } from '.'

export default {
  title: 'organisms/Stories',
  component: Stories,
} as ComponentMeta<typeof Stories>;

const Template: ComponentStory<typeof Stories> = (args) => <Stories {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Story',
};