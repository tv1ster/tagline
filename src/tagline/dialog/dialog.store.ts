import { makeAutoObservable } from "mobx";

class DialogStore {
  private _isVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  open(): void {
    this._isVisible = true;
  }

  close(): void {
    this._isVisible = false;
  }

  get isVisible(): boolean {
    return this._isVisible;
  }
}

export const dialogStore = new DialogStore();