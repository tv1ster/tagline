import { makeAutoObservable, reaction } from "mobx";
import { Align, Radius, Size, Style, Styles } from "./types.ts";
import {
  type FieldsRecord,
  type ISectionStore,
  type SectionElement,
  type SectionField,
  SectionFieldType
} from "../sections/types.ts";

class TaglineStore implements ISectionStore {
  private readonly _elements: SectionElement[] = [{
    id: '0',
    fields: {
      [SectionFieldType.Label]: 'Marketing',
      [SectionFieldType.Link]: 'https://example.com/marketing',
    }
  },{
    id: '1',
    fields: {
      [SectionFieldType.Label]: 'Design',
      [SectionFieldType.Link]: 'https://example.com/design',

    }
    }, {
    id: '2',
    fields: {
      [SectionFieldType.Label]: 'Development',
      [SectionFieldType.Link]: 'https://example.com/development',
    }},
    {
      id: '3',
      fields: {
        [SectionFieldType.Label]: 'Front',
        [SectionFieldType.Link]: 'https://example.com/front',


      }}, {
      id: '4',
      fields: {
        [SectionFieldType.Label]: 'AI engineering',
        [SectionFieldType.Link]: 'https://example.com/ai-engineering',

      }
    }];
  private _nextId = 5;
  private _styles: Record<Styles, string> = {
    [Styles.Style]: Style.LightGrey,
    [Styles.Size]: Size.M,
    [Styles.Radius]: Radius.Four,
    [Styles.Align]: Align.Left,
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


  constructor() {
    makeAutoObservable(this);

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
      }
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

  getItemLabel(item: SectionElement): string {
    return item.fields[SectionFieldType.Label] ?? '';
  }
}

export const taglineStore = new TaglineStore();