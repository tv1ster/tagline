import { BaseDialogStore } from "../base-dialog.store.ts";

class ItemDialogStore extends BaseDialogStore {
  _itemId?: string;

  constructor() {
    super();
  }

  override open(itemId?: string) {
    this._itemId = itemId;
    super.open();
  }

  get itemId() {
    return this._itemId;
  }
}

export const itemDialogStore = new ItemDialogStore();