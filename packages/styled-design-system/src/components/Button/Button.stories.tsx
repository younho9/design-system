import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'PRIMARY',
  variants: 'primary',
  onClick: action("I'm Primary!"),
};

export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;
Secondary.args = {
  children: 'SECONDARY',
  variants: 'secondary',
  onClick: action("I'm Secondary!"),
};

export const Tertiary: Story<ButtonProps> = (args) => <Button {...args} />;
Tertiary.args = {
  children: 'Tertiary',
  variants: 'tertiary',
  onClick: action("I'm Tertiary!"),
};

const StyledButtonWrapper = styled.div`
  .description {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Sizes = () => {
  return (
    <StyledButtonWrapper>
      <div>
        <div className="description">Small</div>
        <Button size="small" variants="primary">
          SMALL
        </Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium" variants="primary">
          MEDIUM
        </Button>
      </div>
      <div>
        <div className="description">Large</div>
        <Button size="large" variants="primary">
          LARGE
        </Button>
      </div>
    </StyledButtonWrapper>
  );
};
