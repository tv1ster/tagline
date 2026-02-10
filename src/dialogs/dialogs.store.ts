import { DialogStores, DialogType } from "./types.ts";
import { makeAutoObservable } from "mobx";
import type { ISectionStore } from "../sections/types.ts";

export class DialogsStore {
  private _stack: DialogType[] = [];

  constructor() {
    makeAutoObservable(this);
  }


  get visibleDialog(): DialogType {
    return this._stack[this._stack.length - 1];
  }

  openDialog<T extends DialogType>(dialog: T, store: ISectionStore, itemId?: string): void {
    this._stack.push(dialog);
    DialogStores[dialog].open(store, itemId);
  }

  closeAll(): void {
    this._stack = [];
  }

  closeDialog(dialog: DialogType): void {
    const index = this._stack.indexOf(dialog);
    if (index !== -1) {
      this._stack.splice(index, 1);
    }
  }

  goBack(): void {
    this._stack.pop();
  }
}

export const dialogsStore = new DialogsStore();
