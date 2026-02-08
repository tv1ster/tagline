import { makeAutoObservable } from "mobx";

export type Tagline = Readonly<{
  label: string;
  link: string;
}>;

class TaglineStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const taglineStore = new TaglineStore();