import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // ...
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {
  argTypes: {
    label: {
      control: 'text'},
    type: {
      options: ["default", "primary", "dashed", "text", "link"],
      control: { type: "select" },
    },
    loading:{
      control: { type: "boolean" }
    },
    disabled:{
      control: { type: "boolean" }
    },
    size: {
      options: ["large", "default", "small"],
      control: { type: "select" },
    },
    shape: {
      options: ["default", "circle", "round"],
      control: { type: "select" },
    },
  },
};
