import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from '.'

export default {
  title: 'molecules/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Section',
  name: 'base_section',
  title: 'Title of Section',
  description: 'Description for this section',
};