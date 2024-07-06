import React from "react";
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
declare const MultiButtonControl: React.FC<MultiButtonControlProps>;
export default MultiButtonControl;
