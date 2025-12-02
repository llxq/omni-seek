import { useState } from "react";
import "./checkbox.scss";

export const Checkbox = ({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: { name: string; value: string }[];
}) => {
  const [checkedIds, setCheckedIds] = useState(value);

  const onChangeHandler = (value: string) => {
    const newCheckedIds = checkedIds.includes(value)
      ? checkedIds.filter((id) => id !== value)
      : [...checkedIds, value];
    setCheckedIds(newCheckedIds);
    onChange?.(newCheckedIds);
  };

  return (
    <div className="checkbox__group">
      {options?.map((option) => {
        return (
          <>
            <label className="checkbox">
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={checkedIds.includes(option.value)}
                onChange={() => onChangeHandler(option.value)}
              />
              <span>{option.name}</span>
            </label>
          </>
        );
      })}
    </div>
  );
};
