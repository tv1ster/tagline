import type { FC, ReactNode } from "react";
import { observer } from "mobx-react-lite";

export const Theme: FC<Readonly<{ children: ReactNode; className: string }>> = observer(({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
})