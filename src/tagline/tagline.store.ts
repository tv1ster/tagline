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

  addTagline(label: string, link: string): void {
    this._taglines.push({ label, link });
  }
}

export const taglineStore = new TaglineStore();