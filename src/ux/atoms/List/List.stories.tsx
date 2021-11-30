import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List, ListItem } from '.'

export default {
  title: 'atoms/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: ['First', 'Second', 'Third'].map(name => <ListItem>{name}</ListItem>),
};