import React from "react";
interface WpFileUploaderProps {
    frameButtonTitle: string;
    frameHeaderTitle: string;
    uploadButtonText: string;
    containerClassName?: string;
    onSelect: (imageObject: {
        url: string;
    } | null) => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    render?: (openModal: () => void) => React.ReactNode | null;
}
declare const WpFileUploader: React.FC<WpFileUploaderProps>;
export default WpFileUploader;
