import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Draggable } from '.'

export default {
  title: 'atoms/Draggable',
  component: Draggable,
  decorators: [
    (Story) => (
      <div style={{ 
        height: '20rem', 
        margin: '5rem',
        position: 'relative', 
        outline: '2px solid red' 
      }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Draggable>;

const Template: ComponentStory<typeof Draggable> = (args) => (
  <Draggable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  style: {
    width: '5rem',
    height: '5rem',
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    lineHeight: '5rem', 
    fontSize: '14pt',
    borderRadius: '50%',
  },
  startPosition: { x: '50%', y: '0' },
  children: <div>DRAGGABLE</div>,
};

export const LockedX = Template.bind({});
LockedX.args = {
  freezeY: true,
  startPosition: { x: 'calc(50% - 2.5rem)', y: '0' },
  style: {
    ...Basic.args.style,
    backgroundColor: 'cornflowerblue',
  },
  children: <div>DRAGGABLE</div>,
};