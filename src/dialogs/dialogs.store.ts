import { DialogType } from "./types.ts";
import { makeAutoObservable } from "mobx";
import type { ISectionStore } from "../sections/types.ts";

export class DialogsStore {
  private _stack: DialogType[] = [];
  private _sectionStore?: ISectionStore;
  private _itemId?: string;

  constructor() {
    makeAutoObservable(this);
  }


  get visibleDialog(): DialogType {
    return this._stack[this._stack.length - 1];
  }

  openDialog<T extends DialogType>(dialog: T, store: ISectionStore, itemId?: string): void {
    this._stack.push(dialog);
    this._sectionStore = store;
    this._itemId = itemId;
  }

  closeAll(): void {
    this._stack = [];
  }

  goBack(): void {
    this._stack.pop();
  }

  get itemId(): string | undefined {
    return this._itemId;
  }

  get expectedSectionStore(): ISectionStore {
    if (!this._sectionStore) {
      throw new Error('Section store is not set');
    }
    return this._sectionStore;
  }
}

export const dialogsStore = new DialogsStore();
