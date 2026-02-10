import { type ThemeConfig, ThemeProperties } from "../theme";

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
  reorderItems(fromIndex: number, toIndex: number): void;
  readonly themeFields: readonly ThemeConfig[];
  readonly theme: Partial<Record<ThemeProperties, string>>;
  getThemeProperty(style: ThemeProperties): string | undefined;
  setThemeProperty(style: ThemeProperties, value: string): void;
  readonly fields: readonly SectionField[];
  getItemLabel(item: SectionElement): string;
}

export interface ISection {
  readonly headerLabel: string;
  readonly key: string;
  readonly store: ISectionStore;
}

export type WithSectionStore = Readonly<{ sectionStore: ISectionStore }>;