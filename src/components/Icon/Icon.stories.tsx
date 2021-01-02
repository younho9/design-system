import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

export const icon: Story<IconProps> = (args) => <Icon {...args} />;
icon.args = {
  icon: 'heart',
};

export const customSize: Story<IconProps> = (args) => <Icon {...args} />;
customSize.args = {
  icon: 'heart',
  size: '4rem',
};

export const customColor: Story<IconProps> = (args) => <Icon {...args} />;
customColor.args = {
  icon: 'heart',
  color: 'red',
};

export const customizedWithStyle: Story<IconProps> = (args) => (
  <Icon {...args} />
);
customizedWithStyle.args = {
  icon: 'heart',
};
