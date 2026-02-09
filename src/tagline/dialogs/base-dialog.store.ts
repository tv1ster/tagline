import { makeObservable, observable, action } from "mobx";

export class BaseDialogStore {
  _isVisible = false;

  constructor() {
    makeObservable(this, {
      open: action.bound,
      close: action.bound,
      _isVisible: observable,
    });
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
