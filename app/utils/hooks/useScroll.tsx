/**
   * handleScroll
   * - A helper function to handle scroll behavior and directions (for onClick buttons purpose for exemple in mind)
   * @param {string[]} element - The main element to pass to scroll to position
   * @param {number} x - X-Axis position to scroll to horizontally
   * @param {number} y - Y-Axis position to scroll to vertically
*/
export const useScroll = (element: any, x: number, y: number) => {
    element.scrollBy({
        top: y,
        left: x,
        behavior: "smooth",
    });
};