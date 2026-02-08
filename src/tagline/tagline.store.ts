import { makeAutoObservable } from "mobx";

export type Tagline = Readonly<{
  label: string;
  link: string;
}>;

class TaglineStore {
  private readonly _taglines: Tagline[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get taglines(): Tagline[] {
    return this._taglines;
  }
}

export const taglineStore = new TaglineStore();