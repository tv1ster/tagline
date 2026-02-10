import type { ISection } from "./types.ts";
import { taglineStore } from "../tagline/tagline.store.ts";


export class SectionsStore {
  get sections(): ISection[] {
    return [{
      headerLabel: 'Tagline element',
      key: 'tagline',
      store: taglineStore,
    }];
  }
}

export const sectionsStore = new SectionsStore();