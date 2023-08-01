// type focusTypesGeneric = { elements: HTMLElement[] }
// interface focusTypes extends focusTypesGeneric {
//     parent?: HTMLElement | null,
//     getFocusableElements: () => void | HTMLElement[]
// }

/**
 * Gets keyboard-focusable elements within a specified element.
 * @url code from this repository : https://gist.github.com/tadeaspetak/a36f6a4058ba71462f2ecac1ff667fb8
 * @param {HTMLElement} [parent=document] element
 * @returns {Array}
 */
export const getFocusableElements = (parent?: HTMLElement | null): HTMLElement[] => {
    if (!parent) return [];
    return (
        Array.from(parent.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]"))
            .filter((el) => el.getAttribute("tabindex") !== "-1" && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"))
            .sort((a, b) => {
                // sort tabindexes following querySelectorAll method
                // no `tabindex` means `tabindex=0` on a focusable element
                const aIndex = Number(a.getAttribute("tabindex")) ?? 0;
                const bIndex = Number(b.getAttribute("tabindex")) ?? 0;
                if (aIndex === bIndex) return 0;
                if (aIndex === 0) return 1;
                if (bIndex === 0) return -1;
                return aIndex < bIndex ? -1 : 1;
            }) as HTMLElement[]
    );
};

/**
 * Helper function to get next element to focus like a carrousel.
 * - Made to be coupled with getFocusElement().
 * @url code from this repository : https://gist.github.com/tadeaspetak/83117b16ccca0856b09e73eb9b61fe55
 * @param {HTMLElement[]} elements
 * @param {boolean} forward
 */
export const nextFocus = (elements: HTMLElement[], forward = true) => {
    const currentIndex = elements.findIndex((e) => e === document.activeElement);
    let nextIndex = 0;

    if (currentIndex > -1) {
        if (forward) nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
        else nextIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
    }

    elements[nextIndex]?.focus();
};
