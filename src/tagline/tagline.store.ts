import { makeAutoObservable } from "mobx";
import { Align, Radius, Size, Style, Styles } from "./types.ts";

export type Tagline = Readonly<{
  id: string;
  label: string;
  link: string;
}>;

class TaglineStore {
  private readonly _taglines: Tagline[] = [];
  private _nextId = 0;
  private _styles: Record<Styles, string> = {
    [Styles.Style]: Style.LightGrey,
    [Styles.Size]: Size.M,
    [Styles.Radius]: Radius.Four,
    [Styles.Align]: Align.Left,
  }

  constructor() {
    makeAutoObservable(this);
  }

  get taglines(): Tagline[] {
    return this._taglines;
  }

  addTagline(label: string, link: string): void {
    const id = String(this._nextId++);
    this._taglines.push({ id, label, link });
  }

  getItemById(id: string): Tagline | undefined {
    return this._taglines.find(item => item.id === id);
  }

  editTagline(id: string, label: string, link: string): void {
    const itemIndex = this._taglines.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      this._taglines[itemIndex] = { id, label, link };
    }
  }

  get styles(): Record<Styles, string> {
    return this._styles;
  }

  getStyle(style: Styles): string {
    return this._styles[style];
  }

  setStyle(style: Styles, value: string): void {
    this._styles = {
      ...this._styles,
      [style]: value,
    };
  }
}

export const taglineStore = new TaglineStore();