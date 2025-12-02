import type { ReactNode } from "react";
import "./form-item.scss";

export const FormItem = ({
  label,
  tips,
  children,
}: {
  label: string;
  tips?: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <div className="form-item">
      <div className="form-item__label">
        {label}
        {tips && <span className="form-item__tips">{tips}</span>}
      </div>
      <div className="form-item__content">{children}</div>
    </div>
  );
};
