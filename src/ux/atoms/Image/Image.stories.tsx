import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from ".";

export default {
  title: "Atoms/Image",
  component: Image,
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 150 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  src: "http://placehold.ita/700x300",
  alt: "not valid link",
};

export const Loaded = Template.bind({});
Loaded.args = {
  src: "http://placehold.it/700x300",
  alt: "valid link",
};
