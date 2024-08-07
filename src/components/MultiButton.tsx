import React from "react";
import Container from "./Container";
import { color as colorsVar, multiButton as multiButtonVars } from "../css-variables";

interface MultiButtonControlProps {
  controlStyle?: "outline" | "filled";
  width?: "fit-content" | "full-width";
  onClick: (id: string) => void;
  activeItem: string;
  items: {
    id: string;
    label: string;
  }[];
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  className?: string;
}

const MultiButtonControl: React.FC<MultiButtonControlProps> = ({
  controlStyle = "filled",
  width = "fit-content",
  onClick,
  activeItem,
  items,
  backgroundColor = multiButtonVars.background,
  color = multiButtonVars.color,
  hoverColor = multiButtonVars.hoverColor,
  className = "",
}) => {
  let containerClass = "bsf-multi-button-control";

  // If the className prop is passed, add it to the containerClass
  if (className) {
    containerClass += " " + className;
  }

  let buttonCss = {};

  const buttonItemCss = {
    fontWeight: 500,
    fontSize: multiButtonVars.fontSize,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (controlStyle === "outline") {
    buttonCss = {
      border: multiButtonVars.outlineBorder,
      borderRadius: multiButtonVars.outlineBorderRadius,
      overflow: "hidden",

      "& > div": {
        padding: multiButtonVars.outlinePadding,
        color: color,
        borderRight: multiButtonVars.outlineBorder,
        ...buttonItemCss,
        "&:last-child": {
          borderRight: "none",
        },
        "&.active": {
          backgroundColor: multiButtonVars.outlineActiveBackground,
        },
      },
    };
  } else {
    buttonCss = {
      padding: multiButtonVars.filledPadding,
      borderRadius: multiButtonVars.filledBorderRadius,
      backgroundColor: backgroundColor,

      "& > div": {
        padding: multiButtonVars.filledInnerPadding,
        color: color,
        backgroundColor: "transparent",
        borderRadius: multiButtonVars.filledBorderRadiusInner,
        ...buttonItemCss,

        "&.active": {
          color: hoverColor,
          backgroundColor: colorsVar.background,
        },
      },
    };
  }

  buttonCss =
    width === "full-width"
      ? {
          ...buttonCss,
          ...{
            width: "100%",
          },
        }
      : {
          ...buttonCss,
          ...{
            width: "fit-content",
          },
        };

  const buttonItemClass = (id: string) =>
    "bsf-multi-button-control__item" + (activeItem === id ? " active" : "");

  return (
    <Container
      {...{
        columns: items.length,
        className: containerClass,
        style: buttonCss,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={buttonItemClass(item.id)}
          onClick={() => item.id !== activeItem && onClick(item.id)}
        >
          {item.label}
        </div>
      ))}
    </Container>
  );
};

export default MultiButtonControl;
