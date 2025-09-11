import { createContext, type ReactNode, useContext, useState } from "react";
import type { TBooleanValue } from "../../shared/types.ts";
import "./radio.scss";

interface IRadioContext {
  value: TBooleanValue;
  name: string;
  onChange: (value: TBooleanValue) => void;
}

const RadioContext = createContext<IRadioContext>({
  value: "0",
  name: "",
  onChange: (_: TBooleanValue) => {},
});

export const RadioGroup = ({
  children,
  name,
  value,
  onChange,
}: {
  children: ReactNode[];
  name: string;
  value: TBooleanValue;
  onChange: (value: TBooleanValue) => void;
}) => {
  const [radioValue, setRadioValue] = useState(value);

  const onChildrenRadioChange = (value: TBooleanValue) => {
    setRadioValue(value);
    onChange?.(value);
  };

  return (
    <RadioContext.Provider
      value={{ value: radioValue, name, onChange: onChildrenRadioChange }}
    >
      <div className="radio-group">{children}</div>
    </RadioContext.Provider>
  );
};

export const Radio = ({
  value,
  children,
}: {
  value: TBooleanValue;
  children: ReactNode;
}) => {
  // 默认content有
  const { value: radioValue, name, onChange } = useContext(RadioContext);

  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={radioValue === value}
        onChange={(e) => onChange(e.target.value as TBooleanValue)}
      />
      <span>{children}</span>
    </label>
  );
};
