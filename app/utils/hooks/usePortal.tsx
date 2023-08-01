import { useEffect, useRef } from "react";

export const usePortal = () => {
    if (typeof document !== "undefined") {
        let element = document.createElement("div");
        const portal = useRef(element);

        useEffect(() => {
            const current = portal.current;
            document.body.appendChild(portal.current);
            return () => void document.body.removeChild(current);
        }, []);

        return portal;
    }
};