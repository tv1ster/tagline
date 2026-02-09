import { Align, Radius, Size, Style, Styles } from "../../types.ts";
import styles from './styles-dialog.module.scss';

const allStyles: readonly StyleItemValue[] = [
  {
    type: Style.LightGrey,
    classnames: [styles.styles__item_style, styles.styles__item_style_lightgrey],
    specialValue: 'Aa',
  },
  {
    type: Style.DarkBlue,
    classnames: [styles.styles__item_style, styles.styles__item_style_darkblue],
    specialValue: 'Aa',
  },
  {
    type: Style.LightBlue,
    classnames: [styles.styles__item_style, styles.styles__item_style_lightblue],
    specialValue: 'Aa',
  },
  {
    type: Style.Transparent,
    classnames: [styles.styles__item_style, styles.styles__item_style_transparent],
    specialValue: 'Aa',
  },
];

const allSizes: readonly StyleItemValue[] = [
  {
    type: Size.XL,
    classnames: [styles.styles__item_size, styles.styles__item_size_xl],
  },
  {
    type: Size.L,
    classnames: [styles.styles__item_size, styles.styles__item_size_l],
  },
  {
    type: Size.M,
    classnames: [styles.styles__item_size, styles.styles__item_size_m],
  },
  {
    type: Size.S,
    classnames: [styles.styles__item_size, styles.styles__item_size_s],
  },
  {
    type: Size.XS,
    classnames: [styles.styles__item_size, styles.styles__item_size_xs],
  },
];

const allRadiuses: readonly StyleItemValue[] = [
  {
    type: Radius.Zero,
    classnames: [styles.styles__item_radius, styles.styles__item_radius_zero],
  },
  {
    type: Radius.Four,
    classnames: [styles.styles__item_radius, styles.styles__item_radius_four],
  },
  {
    type: Radius.Eight,
    classnames: [styles.styles__item_radius, styles.styles__item_radius_eight],
  },
  {
    type: Radius.Twelve,
    classnames: [styles.styles__item_radius, styles.styles__item_radius_twelve],
  },
  {
    type: Radius.Hundred,
    classnames: [styles.styles__item_radius, styles.styles__item_radius_hundred],
  },
];

const allAligns: readonly StyleItemValue[] = [
  {
    type: Align.Left,
    classnames: [styles.styles__item_align, styles.styles__item_align_left],
    specialValue: '',
  },
  {
    type: Align.Center,
    classnames: [styles.styles__item_align, styles.styles__item_align_center],
    specialValue: '',
  },
  {
    type: Align.Right,
    classnames: [styles.styles__item_align, styles.styles__item_align_right],
    specialValue: '',
  },
];

export type StyleItemValue = Readonly<{
  type: string;
  classnames: readonly string[];
  specialValue?: string;
}>;

type StyleItem = Readonly<{
  type: Styles;
  label?: string;
  values: readonly StyleItemValue[];
}>;

export const stylesItems: readonly StyleItem[] = [
  {
    label: 'Style',
    values: allStyles,
    type: Styles.Style,
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