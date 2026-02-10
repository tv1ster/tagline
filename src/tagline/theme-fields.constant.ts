import {
  ThemeAlign,
  ThemeRadius,
  ThemeSize,
  ThemeStyle,
  ThemeProperties,
  type ThemeValueConfig,
  type ThemeConfig
} from "../theme";
import styles from './theme-fields.module.scss';

const themeStyles: readonly ThemeValueConfig[] = [
  {
    type: ThemeStyle.LightGrey,
    classname: styles.fields__style_1,
    specialValue: 'Aa',
  },
  {
    type: ThemeStyle.DarkBlue,
    classname: styles.fields__style_2,
    specialValue: 'Aa',
  },
  {
    type: ThemeStyle.LightBlue,
    classname: styles.fields__style_3,
    specialValue: 'Aa',
  },
  {
    type: ThemeStyle.Transparent,
    classname: styles.fields__style_4,
    specialValue: 'Aa',
  },
];

const sizes: readonly ThemeValueConfig[] = [
  { type: ThemeSize.XL },
  { type: ThemeSize.L },
  { type: ThemeSize.M },
  { type: ThemeSize.S },
  { type: ThemeSize.XS },
];

const radiuses: readonly ThemeValueConfig[] = [
  { type: ThemeRadius.Zero },
  { type: ThemeRadius.Four },
  { type: ThemeRadius.Eight },
  { type: ThemeRadius.Twelve },
  { type: ThemeRadius.Hundred },
];

const aligns: readonly ThemeValueConfig[] = [
  {
    type: ThemeAlign.Left,
    classname: styles.fields__align_left,
    specialValue: '',
  },
  {
    type: ThemeAlign.Center,
    classname: styles.fields__align_center,
    specialValue: '',
  },
  {
    type: ThemeAlign.Right,
    classname: styles.fields__align_right,
    specialValue: '',
  },
];

export const themeFields: readonly ThemeConfig[] = [
  {
    label: 'Style',
    values: themeStyles,
    type: ThemeProperties.Style,
    classname: styles.fields__style,
  },
  {
    label: 'Size',
    values: sizes,
    type: ThemeProperties.Size,
  },
  {
    label: 'Radius',
    values: radiuses,
    type: ThemeProperties.Radius,
  },
  {
    values: aligns,
    type: ThemeProperties.Align,
  }
];