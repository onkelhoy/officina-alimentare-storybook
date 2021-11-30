import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from '.'

export default {
  title: 'molecules/Container',
  component: Container,
  argTypes: {
    justifyContent: {
      options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-evenly', 'space-between'],
  
      control: { 
        type: 'select'
      } 
    },
    alignItems: {
      options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-evenly', 'space-between'],
  
      control: { 
        type: 'select'
      } 
    },
    direction: {
      options: ['column', 'row', 'row-reverse', 'column-reverse', 'revert'],

      control: { 
        type: 'select'
      } 
    }
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <div key="1" style={{  padding: '1rem', height: '2rem',backgroundColor: 'orange' }}>Container 1</div>,
    <div key="2" style={{  padding: '1rem', height: '5rem',backgroundColor: 'blue' }}>Container 2</div>,
    <div key="3" style={{  padding: '1rem', height: '14rem',backgroundColor: 'red' }}>Container 3</div>,
    <div key="4" style={{  padding: '1rem', height: '7rem', backgroundColor: 'yellow' }}>Container 4</div>,
    <div key="5" style={{  padding: '1rem', height: '10rem', backgroundColor: 'orange' }}>Container 5</div>
  ],
  justifyContent: 'space-between',
  alignItems: 'flex-end'
};