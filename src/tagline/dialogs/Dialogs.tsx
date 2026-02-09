import type { FC } from "react";
import { MainDialog } from "./main";
import { ItemDialog } from "./item/ItemDialog.tsx";

export const Dialogs: FC = () => {
  return (
    <>
      <MainDialog />
      <ItemDialog />
    </>
  )
}