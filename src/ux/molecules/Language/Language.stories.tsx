import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Language } from '.';

export default {
  title: 'molecules/Language',
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = (args) => <Language {...args} />;

export const Italian = Template.bind({});
Italian.args = {
  prefix: 'it',
};

export const English = Template.bind({});
English.args = {
  prefix: 'en',
};