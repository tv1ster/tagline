import { makeObservable, observable, action } from "mobx";
import type { ISectionStore } from "../sections/types.ts";

export class BaseDialogStore {
  _isVisible = false;
  _sectionStore?: ISectionStore;

  constructor() {
    makeObservable(this, {
      open: action.bound,
      close: action.bound,
      _isVisible: observable,
    });
  }

  open(sectionStore: ISectionStore): void {
    this._isVisible = true;
    this._sectionStore = sectionStore;
  }

  close(): void {
    this._isVisible = false;
  }

  get isVisible(): boolean {
    return this._isVisible;
  }

  get sectionStore(): ISectionStore {
    if (!this._sectionStore) {
      throw new Error('Section store is not set');
    }
    return this._sectionStore;
  }
}
