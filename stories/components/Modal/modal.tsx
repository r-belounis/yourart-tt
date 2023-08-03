import {
    useEffect, useRef,
    // MouseEvent, MutableRefObject 
} from "react";
// import { createPortal } from "react-dom";
import GenericComponent from "~/utils/generics/genericComponent"

// Utilities
// import { usePortal } from "~/utils/hooks/usePortal";
// import { getFocusableElements, nextFocus } from "~/utils/helpers/focus";
import type { ChildrenInterface } from "~/utils/types/globalTypes";

interface modalTypes extends ChildrenInterface {
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    open?: boolean;
    onClose: () => void;
}

const ModalContainer = ({ children, closeOnClickOutside = true, closeOnEsc = true, onClose, open = true }: modalTypes) => {
    const container = useRef<HTMLDivElement>(null);
    const onOverlayClick = (e: React.MouseEvent) => {
        if (!container.current?.contains(e.target as Node)) onClose();
    };

    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (closeOnEsc && open && e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyPress);
        return () => window.removeEventListener("keydown", onKeyPress);
    }, [closeOnEsc, onClose, open]);

    return (
        <GenericComponent onClick={closeOnClickOutside ? onOverlayClick : undefined} className={`fixed inset-0 z-10 text-white bg-gray-600/90 ${open ? "visible" : "invisible"}`}>
            <GenericComponent as="button" onClick={() => onClose()} title="Close" className="absolute z-10 h-8 w-8 top-4 right-4 flex justify-center rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-xl">
                <GenericComponent as="span" className="text-2xl text-black leading-7 select-none">&times;</GenericComponent >
            </GenericComponent>
            <div className="relative w-fit mx-auto" ref={container}>
                <GenericComponent className="overflow-hidden">{children}</GenericComponent>
            </div>
        </GenericComponent>
    );
};

const ModalHeader = ({ children }: ChildrenInterface) => (
    <GenericComponent className="block px-4 py-2 bg-gray-900">
        <GenericComponent as="h1" className="text-lg">{children}</GenericComponent>
    </GenericComponent>
);

const ModalBody = ({ children }: ChildrenInterface) => <><GenericComponent className="flex place-content-center place-items-center h-screen">{children}</GenericComponent></>;

export { ModalContainer as default, ModalHeader, ModalBody };
