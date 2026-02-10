import { Styles } from "./tagline/types.ts";

export const enum SectionFieldType {
  Label,
  Link,
}

export type SectionField = Readonly<{
  type: SectionFieldType;
  label: string;
  initialValue: string;
  required?: boolean;
}>;

export type FieldsRecord = Partial<Record<SectionFieldType, string>>;

export type SectionElement = Readonly<{
  id: string;
  fields: FieldsRecord;
}>

export interface ISectionStore {
  readonly items: readonly SectionElement[];
  addItem(fields: FieldsRecord): void;
  getItemById(id: string): SectionElement | undefined;
  editItem(id: string, data: FieldsRecord): void;
  readonly styles: Record<Styles, string>;
  getStyle(style: Styles): string
  setStyle(style: Styles, value: string): void;
  readonly fields: readonly SectionField[];
  getItemLabel(item: SectionElement): string;
}

export interface ISection {
  readonly headerLabel: string;
  readonly brandingPrefix: string;
  readonly store: ISectionStore;
}