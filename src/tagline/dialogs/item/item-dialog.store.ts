import { BaseDialogStore } from "../base-dialog.store.ts";
import { makeObservable, observable } from "mobx";

class ItemDialogStore extends BaseDialogStore {
  _itemId: string | undefined = undefined;

  constructor() {
    super();
    makeObservable(this, {
      _itemId: observable,
    })
  }

  override open(itemId: string | undefined = undefined) {
    this._itemId = itemId;
    super.open();
  }

  get itemId() {
    return this._itemId;
  }
}

export const itemDialogStore = new ItemDialogStore();