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
  private _style = Style.LightGrey;
  private _size = Size.M;
  private _radius = Radius.Eight;
  private _align = Align.Left;

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

  get style(): Style {
    return this._style;
  }

  set style(value: Style) {
    this._style = value;
  }

  get size(): Size {
    return this._size;
  }

  set size(value: Size) {
    this._size = value;
  }

  get radius(): Radius {
    return this._radius;
  }

  set radius(value: Radius) {
    this._radius = value;
  }

  get align(): Align {
    return this._align;
  }

  set align(value: Align) {
    this._align = value;
  }

  getStyle(style: Styles): string {
    switch (style) {
      case Styles.Style:
        return this.style;
      case Styles.Size:
        return this.size;
      case Styles.Radius:
        return this.radius;
      case Styles.Align:
        return this.align;
    }
  }
}

export const taglineStore = new TaglineStore();