import type { FC } from "react";
import { observer } from "mobx-react-lite";
import { dialogStore } from "./dialog.store";

export const Dialog: FC = observer(() => {
  if (!dialogStore.isVisible) {
    return null;
  }

  return (
    <div>
      Dialog
    </div>
  )
})