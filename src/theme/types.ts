export const enum ThemeProperties {
  Style,
  Size,
  Radius,
  Align,
}

export const enum ThemeStyle {
  LightGrey = 'light-grey',
  DarkBlue = 'dark-blue',
  LightBlue = 'light-blue',
  Transparent = 'transparent',
}

export const enum ThemeSize {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
}

export const enum ThemeRadius {
  Zero = '0',
  Four = '4',
  Eight = '8',
  Twelve = '12',
  Hundred = '100'
}

export const enum ThemeAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}


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
