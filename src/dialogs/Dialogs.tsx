import type { FC } from "react";
import { MainDialog } from "./main";
import { ItemDialog } from "./item";
import { StylesDialog } from "./styles";

export const Dialogs: FC = () => {
  return (
    <>
      <MainDialog />
      <ItemDialog />
      <StylesDialog />
    </>
  )
}