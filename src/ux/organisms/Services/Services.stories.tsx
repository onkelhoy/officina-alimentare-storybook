import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Services } from '.'

export default {
  title: 'organisms/Services',
  component: Services,
} as ComponentMeta<typeof Services>;

const Template: ComponentStory<typeof Services> = (args) => <Services {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Services',
};