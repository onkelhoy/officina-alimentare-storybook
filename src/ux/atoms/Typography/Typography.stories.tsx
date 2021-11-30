import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '.'
import { brotliDecompressSync } from 'zlib';

export default {
  title: 'atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Body = Template.bind({});
Body.args = {
  children: 'Proident dolor eu nisi cillum sint qui nisi sit excepteur.',
  variant: 'body',
};

export const Header = Template.bind({});
Header.args = {
  children: 'Proident dolor eu nisi cillum sint qui nisi sit excepteur.',
  variant: 'header',
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  children: 'Proident dolor eu nisi cillum sint qui nisi sit excepteur.',
  variant: 'subheader',
};

export const Logo = Template.bind({});
Logo.args = {
  children: 'Officina Alimentare',
  variant: 'logo',
};


