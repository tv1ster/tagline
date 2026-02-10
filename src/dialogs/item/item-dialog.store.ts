import { BaseDialogStore } from "../base-dialog.store.ts";
import { makeObservable, observable } from "mobx";
import type { ISectionStore } from "../../sections/types.ts";

class ItemDialogStore extends BaseDialogStore {
  _itemId: string | undefined = undefined;

  constructor() {
    super();
    makeObservable(this, {
      _itemId: observable,
    })
  }

  override open(sectionStore: ISectionStore, itemId: string | undefined = undefined) {
    this._itemId = itemId;
    super.open(sectionStore);
  }

  get itemId() {
    return this._itemId;
  }
}

export const itemDialogStore = new ItemDialogStore();