import type { Meta, StoryObj } from "@storybook/react";

import SideNavBar from "./SideNavBar";

const meta: Meta<typeof SideNavBar> = {
  title: "Components/SideNavBar",
  component: SideNavBar,
};

export default meta;

type Story = StoryObj<typeof SideNavBar>;

export const Main: Story = {
  args: {
    primary: true,
    label: "Click",
    background: "red",
  },
};
