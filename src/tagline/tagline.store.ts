import { makeAutoObservable, reaction } from "mobx";
import { ThemeAlign, ThemeRadius, ThemeSize, ThemeStyle, ThemeProperties } from "../theme";
import {
  type FieldsRecord,
  type ISectionStore,
  type SectionElement,
  type SectionField,
  SectionFieldType
} from "../sections/types.ts";
import { DEFAULT_ELEMENTS } from "./default-elements.constant.ts";
import { themeFields } from "./theme-fields.constant.ts";
import { themeStore } from "../theme/theme.store.ts";

class TaglineStore implements ISectionStore {
  private readonly _elements: SectionElement[] = DEFAULT_ELEMENTS;
  private _nextId = 5;
  private _styles: Record<ThemeProperties, string> = {
    [ThemeProperties.Style]: ThemeStyle.LightGrey,
    [ThemeProperties.Size]: ThemeSize.M,
    [ThemeProperties.Radius]: ThemeRadius.Eight,
    [ThemeProperties.Align]: ThemeAlign.Center,
  }
  readonly fields: SectionField[] = [
    {
      type: SectionFieldType.Label,
      label: 'Label',
      initialValue: '',
      required: true,
    }, {
      type: SectionFieldType.Link,
      label: 'Link',
      initialValue: '',
    },
  ];
  readonly themeFields = themeFields;


  constructor() {
    makeAutoObservable(this);
    themeStore.provideTheme('tagline', this._styles);

    reaction(
      () => JSON.stringify(this._elements),
      (taglinesJson) => {
        console.log('taglines saved to server:', {taglines: JSON.parse(taglinesJson)});
      }
    );

    reaction(
      () => this._styles,
      (styles) => {
        console.log('styles saved to server:', styles);
        themeStore.provideTheme('tagline', styles);
      },
    );
  }

  get items(): readonly SectionElement[] {
    return this._elements;
  }

  addItem(fields: FieldsRecord): void {
    const id = String(this._nextId++);
    this._elements.push({id, fields});
  }

  getItemById(id: string): SectionElement | undefined {
    return this._elements.find(item => item.id === id);
  }

  editItem(id: string, fields: FieldsRecord): void {
    const itemIndex = this._elements.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      this._elements[itemIndex] = {id, fields};
    }
  }

  reorderItems(fromIndex: number, toIndex: number): void {
    if (fromIndex < 0 || fromIndex >= this._elements.length || toIndex < 0 || toIndex >= this._elements.length) {
      return;
    }
    const [removed] = this._elements.splice(fromIndex, 1);
    this._elements.splice(toIndex, 0, removed);
  }

  get theme(): Record<ThemeProperties, string> {
    return this._styles;
  }

  getThemeProperty(style: ThemeProperties): string {
    return this._styles[style];
  }

  setThemeProperty(style: ThemeProperties, value: string): void {
    this._styles = {
      ...this._styles,
      [style]: value,
    };
  }

  getItemLabel(item: SectionElement): string {
    return item.fields[SectionFieldType.Label] ?? '';
  }
}

export const taglineStore = new TaglineStore();