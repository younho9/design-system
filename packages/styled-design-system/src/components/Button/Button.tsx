import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '../../styles/theme';

export type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼의 생김새를 설정합니다. */
  variants?: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'large';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonSizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 2.5rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const DefaultButton = styled.button<ButtonProps>`
  ${({ size }) => buttonSizes[size]}
  width: ${({ width }) => width};
  outline: none;
  border: none;
  border-radius: ${theme.border.radius.small};
  box-sizing: border-box;
  line-height: 1;
  font-family: ${theme.typography.type.primary};
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: ${theme.shadow.weak};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(DefaultButton)`
  background: ${theme.colors.purple700};
  color: ${theme.colors.white};
  &:hover {
    background: ${theme.colors.purple800};
  }
  &:active {
    background: ${theme.colors.purple600};
  }
  &:disabled {
    background: ${theme.colors.purple300};
  }
`;

const SecondaryButton = styled(DefaultButton)`
  background: ${theme.colors.gray100};
  color: ${theme.colors.purple800};
  &:hover {
    background: ${theme.colors.purple600};
  }
  &:active {
    background: ${theme.colors.purple300};
  }
  &:disabled {
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray800};
  }
`;

const TertiaryButton = styled(DefaultButton)`
  background: none;
  color: ${theme.colors.purple800};
  &:hover {
    background: ${theme.colors.purple200};
  }
  &:active {
    background: ${theme.colors.purple300};
  }
  &:disabled {
    background: none;
    color: ${theme.colors.purple200};
  }
`;

export function Button({
  variants = 'primary',
  size = 'small',
  ...props
}: ButtonProps) {
  switch (variants) {
    case 'primary':
      return <PrimaryButton size={size} {...props} />;
    case 'secondary':
      return <SecondaryButton size={size} {...props} />;
    case 'tertiary':
      return <TertiaryButton size={size} {...props} />;
    default:
      return <PrimaryButton size={size} {...props} />;
  }
}
