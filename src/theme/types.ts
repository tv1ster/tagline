export enum ThemeProperties {
  Style,
  Size,
  Radius,
  Align,
}

export enum ThemeStyle {
  LightGrey = 'light-grey',
  DarkBlue = 'dark-blue',
  LightBlue = 'light-blue',
  Transparent = 'transparent',
}

export enum ThemeSize {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
}

export enum ThemeRadius {
  Zero = '0',
  Four = '4',
  Eight = '8',
  Twelve = '12',
  Hundred = '100'
}

export enum ThemeAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

function isStringEnum<T extends Record<string, string>>(
  enumObj: T,
  value: string
): value is T[keyof T] {
  return Object.values(enumObj).includes(value);
}

export function isThemeStyle(value: string): value is ThemeStyle {
  return isStringEnum(ThemeStyle, value);
}

export function isThemeSize(value: string): value is ThemeSize {
  return isStringEnum(ThemeSize, value);
}

export function isThemeRadius(value: string): value is ThemeRadius {
  return isStringEnum(ThemeRadius, value);
}

export function isThemeAlign(value: string): value is ThemeAlign {
  return isStringEnum(ThemeAlign, value);
}

export type SectionTheme = Partial<Record<ThemeProperties, string>>;

export type ThemeValueConfig = Readonly<{
  type: string;
  classname?: string;
  specialValue?: string;
}>;

export type ThemeConfig = Readonly<{
  type: ThemeProperties;
  label?: string;
  classname?: string;
  values: readonly ThemeValueConfig[];
}>;
