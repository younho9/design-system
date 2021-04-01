import styled from 'styled-components';

import icons from './icons';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
};

const Svg = styled.svg<Partial<IconProps>>`
  width: ${({ size }) => size};
  height: auto;
`;

const Path = styled.path`
  fill: ${({ color }) => color || 'currentColor'};
`;

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
export function Icon({ icon, color, size }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width="24" height="24" size={size}>
      <Path color={color} d={icons[icon]} />
    </Svg>
  );
}
