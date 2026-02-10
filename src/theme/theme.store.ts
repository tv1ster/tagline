import { makeAutoObservable } from "mobx";
import type { SectionTheme } from "./types.ts";
import type { CSSProperties } from "react";
import { themeToCSSVariables } from "./mappers.ts";

class ThemeStore {
  private _themes: Record<string, CSSProperties> = {};

  constructor() {
    makeAutoObservable(this);
  }

  provideTheme(sectionSuffix: string, theme: SectionTheme): void {
    this._themes = {
      ...this._themes,
      sectionSuffix: themeToCSSVariables(theme, sectionSuffix),
    };
  }

  get allCssVariables(): CSSProperties {
    return Object.values(this._themes).reduce((acc, theme) => ({ ...acc, ...theme }), {});
  }
}

export const themeStore = new ThemeStore();