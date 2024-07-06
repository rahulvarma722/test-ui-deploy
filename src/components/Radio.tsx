import React from "react";
import { css, cx } from "@emotion/css";
import Container from "./Container";
import { ICONS } from "../utility";
import { radio as radioVars } from "../css-variables";

interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  radioBoxGap?: number;
  radioType?: "radio" | "checkbox";
}

const RadioLabel: React.FC<RadioProps> = ({
  label,
  checked,
  onChange,
  disabled,
  radioBoxGap = radioVars.gap,
  style,
  className = "",
  radioType,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  const containerStyle = {
    padding: radioVars.padding,
    border: checked ? radioVars.checkedBorder : radioVars.containerBorder,
    borderRadius: radioVars.borderRadius,
    cursor: "pointer",
  };

  style = {
    ...containerStyle,
    ...style,
  };

  const radioStyleForRadio = radioType === "radio"
  ? {
      content: "''",
      height: radioVars.radioInnerSize,
      width: radioVars.radioInnerSize,
      borderRadius: "50%",
      display: "block",
      backgroundColor: radioVars.backgroundColor,
    }
  : {};

  const radioStyle = css({
    input: {
      display: "none",
    },
    "&> div": {
      width: radioVars.size,
      height: radioVars.size,
      borderRadius: radioType === "radio" ? "50%" : "4px",
      boxShadow: radioVars.boxShadow,
      border: radioVars.innerBorder,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "&.radio-checked": {
      "&> div": {
        borderColor: radioType === "checkbox" ? "transparent" : radioVars.backgroundColor,
        backgroundColor: radioType === "checkbox" ? radioVars.backgroundColor : "transparent",
        "&::before": radioStyleForRadio,
      },
      "& label": {
        color: radioVars.backgroundColor,
      },
    },
    " svg": {
      height: radioVars.checkBoxSize,
      width: radioVars.checkBoxSize,
      color: radioVars.checkMarkColor,
    },
    label: {
      lineHeight: 1,
    },
  });

  return (
    <Container
      {...{
        gap: radioBoxGap,
        containerType: "flex",
        alignItems: "center",
        className: cx(
          radioStyle,
          {
            disabled,
          },
          checked ? "radio-checked" : "",
          className,
        ),
        style: style,
        extraProps: {
          onClick: () => handleChange(),
        },
      }}
    >
      <input type="radio" checked={checked} disabled={disabled} />
      <div>{radioType === "checkbox" && checked ? ICONS.checkMark : null}</div>
      <label>{label}</label>
    </Container>
  );
};

interface RadioGroupProps {
  group: {
    id: string;
    label: React.ReactNode;
    checked?: boolean;
  }[];
  checked?: string; // Checked id
  onChange?: (checked: string) => void;
  disabled?: boolean;
  gap?: number;
  columns?: number;
  groupStyle?: React.CSSProperties;
  radioBoxStyle?: React.CSSProperties;
  className?: string;
  groupClassName?: string;
  radioType?: "radio" | "checkbox";
  isMultiple?: boolean;
}

const Radio: React.FC<RadioGroupProps> = ({
  radioType = "radio",
  group,
  checked,
  onChange,
  gap,
  columns,
  groupStyle,
  radioBoxStyle,
  groupClassName = "",
  className = "",
  isMultiple = false,
}) => {
  return (
    <Container
      {...{
        columns: columns,
        gap: gap,
        style: groupStyle,
        className: groupClassName,
      }}
    >
      {group.map((item) => (
        <RadioLabel
          key={item.id}
          radioType={radioType}
          label={item.label}
          checked={checked === item.id || (isMultiple && item?.checked)}
          style={radioBoxStyle}
          className={className}
          onChange={() => {
            if (onChange) {
              onChange(item.id);
            }
          }}
        />
      ))}
    </Container>
  );
};

export default Radio;