import {
  ThemeStyle,
  ThemeSize,
  ThemeRadius,
  ThemeAlign,
  ThemeProperties,
  isThemeStyle,
  isThemeSize,
  isThemeRadius,
  isThemeAlign, type SectionTheme
} from "./types.ts";
import { assertNever } from "../assert.ts";
import type { CSSProperties } from "react";

export function themeToCSSVariables(
  theme: SectionTheme,
  cssVariablesPrefix: string,
): CSSProperties {
  const cssVars: Record<string, string> = {};

  if (theme[ThemeProperties.Style] !== undefined) {
    const styleValue = theme[ThemeProperties.Style];
    if (isThemeStyle(styleValue)) {
      cssVars[`--${cssVariablesPrefix}-background-color`] = themeStyleToBackgroundColor(styleValue);
      cssVars[`--${cssVariablesPrefix}-color`] = themeStyleToColor(styleValue);
      const border = themeStyleToBorder(styleValue);
      if (border !== undefined) {
        cssVars[`--${cssVariablesPrefix}-border`] = border;
      }
    }
  }

  if (theme[ThemeProperties.Size] !== undefined) {
    const sizeValue = theme[ThemeProperties.Size];
    if (isThemeSize(sizeValue)) {
      cssVars[`--${cssVariablesPrefix}-padding`] = themeSizeToPadding(sizeValue);
      cssVars[`--${cssVariablesPrefix}-font-size`] = themeSizeToFontSize(sizeValue);
    }
  }

  if (theme[ThemeProperties.Radius] !== undefined) {
    const radiusValue = theme[ThemeProperties.Radius];
    if (isThemeRadius(radiusValue)) {
      cssVars[`--${cssVariablesPrefix}-border-radius`] = themeRadiusToBorderRadius(radiusValue);
    }
  }

  if (theme[ThemeProperties.Align] !== undefined) {
    const alignValue = theme[ThemeProperties.Align];
    if (isThemeAlign(alignValue)) {
      cssVars[`--${cssVariablesPrefix}-justify-content`] = themeAlignToJustifyContent(alignValue);
    }
  }

  return cssVars as CSSProperties;
}

export function themeStyleToBackgroundColor(style: ThemeStyle): string {
  switch (style) {
    case ThemeStyle.LightGrey:
      return '#FFFFFF1A';
    case ThemeStyle.DarkBlue:
      return '#157BDA33';
    case ThemeStyle.LightBlue:
      return '#157BDAED';
    case ThemeStyle.Transparent:
      return 'transparent';
    default:
      return assertNever(style);
  }
}

export function themeStyleToColor(style: ThemeStyle): string {
  switch (style) {
    case ThemeStyle.LightGrey:
      return '#FFFFFF';
    case ThemeStyle.DarkBlue:
      return '#56ADFF';
    case ThemeStyle.LightBlue:
      return '#FFFFFF';
    case ThemeStyle.Transparent:
      return '#FFFFFF';
    default:
      return assertNever(style);
  }
}

export function themeRadiusToBorderRadius(radius: ThemeRadius): string {
  switch (radius) {
    case ThemeRadius.Zero:
      return '0px';
    case ThemeRadius.Four:
      return '4px';
    case ThemeRadius.Eight:
      return '8px';
    case ThemeRadius.Twelve:
      return '12px';
    case ThemeRadius.Hundred:
      return '100%';
    default:
      return assertNever(radius);
  }
}

export function themeSizeToPadding(size: ThemeSize): string {
  switch (size) {
    case ThemeSize.XL:
      return '16px 20px';
    case ThemeSize.L:
      return '14px 18px';
    case ThemeSize.M:
      return '12px 16px';
    case ThemeSize.S:
      return '10px 14px';
    case ThemeSize.XS:
      return '8px 12px';
    default:
      return assertNever(size);
  }
}

export function themeSizeToFontSize(size: ThemeSize): string {
  switch (size) {
    case ThemeSize.XL:
      return '18px';
    case ThemeSize.L:
      return '16px';
    case ThemeSize.M:
      return '14px';
    case ThemeSize.S:
      return '12px';
    case ThemeSize.XS:
      return '10px';
    default:
      return assertNever(size);
  }
}

export function themeStyleToBorder(style: ThemeStyle): string | undefined {
  switch (style) {
    case ThemeStyle.LightGrey:
    case ThemeStyle.DarkBlue:
    case ThemeStyle.LightBlue:
      return undefined;
    case ThemeStyle.Transparent:
      return '1px solid #FFFFFF40';
    default:
      return assertNever(style);
  }
}

export function themeAlignToJustifyContent(align: ThemeAlign): string {
  switch (align) {
    case ThemeAlign.Left:
      return 'start';
    case ThemeAlign.Center:
      return 'center';
    case ThemeAlign.Right:
      return 'end';
    default:
      return assertNever(align);
  }
}
