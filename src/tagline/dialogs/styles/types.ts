import { Align, Radius, Size, Style, Styles } from "../../types.ts";
import styles from './styles-dialog.module.scss';

const allStyles: readonly StyleItemValue[] = [
  {
    type: Style.LightGrey,
    classname: styles.styles__item_style_lightgrey,
    specialValue: 'Aa',
  },
  {
    type: Style.DarkBlue,
    classname: styles.styles__item_style_darkblue,
    specialValue: 'Aa',
  },
  {
    type: Style.LightBlue,
    classname: styles.styles__item_style_lightblue,
    specialValue: 'Aa',
  },
  {
    type: Style.Transparent,
    classname: styles.styles__item_style_transparent,
    specialValue: 'Aa',
  },
];

const allSizes: readonly StyleItemValue[] = [
  {
    type: Size.XL,
  },
  {
    type: Size.L,
  },
  {
    type: Size.M,
  },
  {
    type: Size.S,
  },
  {
    type: Size.XS,
  },
];

const allRadiuses: readonly StyleItemValue[] = [
  {
    type: Radius.Zero,
  },
  {
    type: Radius.Four,
  },
  {
    type: Radius.Eight,
  },
  {
    type: Radius.Twelve,
  },
  {
    type: Radius.Hundred,
  },
];

const allAligns: readonly StyleItemValue[] = [
  {
    type: Align.Left,
    classname: styles.styles__item_align_left,
    specialValue: '',
  },
  {
    type: Align.Center,
    classname: styles.styles__item_align_center,
    specialValue: '',
  },
  {
    type: Align.Right,
    classname: styles.styles__item_align_right,
    specialValue: '',
  },
];

export type StyleItemValue = Readonly<{
  type: string;
  classname?: string;
  specialValue?: string;
}>;

type StyleItem = Readonly<{
  type: Styles;
  label?: string;
  classname?: string;
  values: readonly StyleItemValue[];
}>;

export const stylesItems: readonly StyleItem[] = [
  {
    label: 'Style',
    values: allStyles,
    type: Styles.Style,
    classname: styles.styles__item_style,
  },
  {
    label: 'Size',
    values: allSizes,
    type: Styles.Size,
  },
  {
    label: 'Radius',
    values: allRadiuses,
    type: Styles.Radius,
  },
  {
    values: allAligns,
    type: Styles.Align,
  }
];