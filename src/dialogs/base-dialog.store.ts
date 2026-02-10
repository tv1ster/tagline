import type { ISectionStore } from "../sections/types.ts";

export abstract class BaseDialogStore {
  _sectionStore?: ISectionStore;

  open(sectionStore: ISectionStore): void {
    this._sectionStore = sectionStore;
  }

  get sectionStore(): ISectionStore {
    if (!this._sectionStore) {
      throw new Error('Section store is not set');
    }
    return this._sectionStore;
  }
}
