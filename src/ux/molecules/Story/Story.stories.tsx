import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Story } from '.'

export default {
  title: 'molecules/Story',
  component: Story,
} as ComponentMeta<typeof Story>;

const Template: ComponentStory<typeof Story> = (args) => <Story {...args} />;

export const Story1998 = Template.bind({});
Story1998.args = {
  date: 1998,
  texts: [
    "Amet fugiat consequat proident minim consectetur deserunt culpa esse ex nostrud exercitation excepteur irure aliquip. Aliqua velit ex dolor culpa dolor exercitation. Sunt non non ea sit velit fugiat non occaecat laboris. Est minim laboris adipisicing dolor id Lorem enim officia in. Amet officia non sit ad dolore cillum ipsum consectetur culpa. Duis aute laborum sunt eu consectetur incididunt id in fugiat reprehenderit minim dolore. Aliqua eu sunt amet labore aliquip eu adipisicing aute Lorem tempor.",
    "Occaecat Lorem duis velit eiusmod et laborum et deserunt et et consectetur dolore eiusmod. Adipisicing et ad eu aliqua id labore pariatur et amet non ea. Incididunt amet nostrud laborum cupidatat proident aliqua fugiat non nostrud adipisicing nulla excepteur. Qui est eiusmod cupidatat dolor irure aute esse anim cillum fugiat duis proident.",
    "Et irure aute aliqua Lorem aliquip nisi consectetur ut sint consectetur adipisicing sint laboris. Consequat fugiat aliquip sint qui cupidatat qui dolore eu deserunt. Labore ut consequat elit proident velit et cupidatat elit officia ut. Labore ad aliqua occaecat ex ipsum amet tempor.",
    "Id anim ex ut officia sunt dolore exercitation eiusmod eiusmod adipisicing excepteur sit nostrud nostrud. Officia consectetur esse quis nulla sunt. Mollit duis minim culpa pariatur veniam commodo.",
  ]
};

export const Story2006 = Template.bind({});
Story2006.args = {
  date: 2006,
  texts: [
    "Amet fugiat consequat proident minim consectetur deserunt culpa esse ex nostrud exercitation excepteur irure aliquip. Aliqua velit ex dolor culpa dolor exercitation. Sunt non non ea sit velit fugiat non occaecat laboris. Est minim laboris adipisicing dolor id Lorem enim officia in. Amet officia non sit ad dolore cillum ipsum consectetur culpa. Duis aute laborum sunt eu consectetur incididunt id in fugiat reprehenderit minim dolore. Aliqua eu sunt amet labore aliquip eu adipisicing aute Lorem tempor.",
    "Occaecat Lorem duis velit eiusmod et laborum et deserunt et et consectetur dolore eiusmod. Adipisicing et ad eu aliqua id labore pariatur et amet non ea. Incididunt amet nostrud laborum cupidatat proident aliqua fugiat non nostrud adipisicing nulla excepteur. Qui est eiusmod cupidatat dolor irure aute esse anim cillum fugiat duis proident.",
  ]
};

export const Story2018 = Template.bind({});
Story2018.args = {
  date: 2018,
  texts: [
    "Amet fugiat consequat proident minim consectetur deserunt culpa esse ex nostrud exercitation excepteur irure aliquip. Aliqua velit ex dolor culpa dolor exercitation. Sunt non non ea sit velit fugiat non occaecat laboris. Est minim laboris adipisicing dolor id Lorem enim officia in. Amet officia non sit ad dolore cillum ipsum consectetur culpa. Duis aute laborum sunt eu consectetur incididunt id in fugiat reprehenderit minim dolore. Aliqua eu sunt amet labore aliquip eu adipisicing aute Lorem tempor.",
    "Occaecat Lorem duis velit eiusmod et laborum et deserunt et et consectetur dolore eiusmod. Adipisicing et ad eu aliqua id labore pariatur et amet non ea. Incididunt amet nostrud laborum cupidatat proident aliqua fugiat non nostrud adipisicing nulla excepteur. Qui est eiusmod cupidatat dolor irure aute esse anim cillum fugiat duis proident.",
    "Et irure aute aliqua Lorem aliquip nisi consectetur ut sint consectetur adipisicing sint laboris. Consequat fugiat aliquip sint qui cupidatat qui dolore eu deserunt. Labore ut consequat elit proident velit et cupidatat elit officia ut. Labore ad aliqua occaecat ex ipsum amet tempor.",
    "Id anim ex ut officia sunt dolore exercitation eiusmod eiusmod adipisicing excepteur sit nostrud nostrud. Officia consectetur esse quis nulla sunt. Mollit duis minim culpa pariatur veniam commodo.",
    "Nisi magna ad ea tempor ex ipsum tempor dolore excepteur irure id culpa. Amet laboris sit cupidatat sunt. Irure irure occaecat officia et deserunt magna mollit proident. Tempor ad velit sit occaecat sunt sint cillum do nostrud duis ipsum excepteur Lorem.",
    "Id id aliqua laborum amet consectetur adipisicing pariatur eiusmod dolor laboris ea. Quis esse tempor laboris veniam consectetur. Excepteur deserunt amet aliqua aliqua aliqua.",
    "Mollit exercitation nulla reprehenderit consectetur id reprehenderit eiusmod do sunt ullamco quis adipisicing aute. Ullamco enim ad ea amet aliquip sunt consectetur occaecat ullamco aute sint et labore consectetur. Officia labore qui irure consectetur Lorem qui duis enim et nisi commodo ipsum ad. Ea consectetur et culpa magna deserunt enim pariatur nostrud sint aliquip qui. Do est dolor anim proident esse officia velit esse velit esse.",
  ]
};
