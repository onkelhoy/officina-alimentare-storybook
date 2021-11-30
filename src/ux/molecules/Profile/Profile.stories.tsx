import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Profile } from '.'

export default {
  title: 'molecules/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Profile',
  image: {
    src: 'placeit.com/300x200',
    alt: 'Profile Picture',
  },
  role: 'Profile Picture',
  linkedin: '#linkedin-url',
};