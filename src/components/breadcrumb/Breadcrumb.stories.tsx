import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Main: Story = {
  // args: {
  //   items: [
  //     {
  //       title: 'Home',
  //     },
  //     {
  //       title: <a href="">Application Center</a>,
  //     },
  //     {
  //       title: <a href="">Application List</a>,
  //     },
  //     {
  //       title: 'An Application',
  //     },
  //   ]
  // },
};
