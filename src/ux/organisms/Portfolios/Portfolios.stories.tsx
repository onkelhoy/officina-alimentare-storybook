import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Portfolios } from '.'

export default {
  title: 'organisms/Portfolios',
  component: Portfolios,
} as ComponentMeta<typeof Portfolios>;

const Template: ComponentStory<typeof Portfolios> = (args) => <Portfolios {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Portfolios',
};