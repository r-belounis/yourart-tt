import { useEffect } from "react"

type TypeInfos = {
    data: any[]
    refs: any,
    position: number,
    state: string | boolean
}

/**
   * ScrollInfos
   * - A helper component to return values like state and scroll position, directly on render.
   * Can be mixed with various components like Slider, Accordion...
   * - It also provides diverses logs on console.log for getting scroll, refs objects and states infos.
   * @param {string[]} data - The main data passed to get diverses informations on console.log
   * @param {any} refs - A ref object to pass to get informations on console.log
   * @param {string} position - The scroll position of current scroll (can be coupled with window.addEventListener for better result).
   * @param {string | boolean} state - The current state of any triggered scroll position object. 
*/
export const ScrollInfos = ({ data, refs, position, state }: TypeInfos) => {

    // Logs
    useEffect(() => {
        console.group("ScrollInfos - Data and Ref Logs");
        console.groupCollapsed("Data - Infos");
        console.log("response from data =>\n", data)
        console.groupEnd();
        console.groupCollapsed('Scroll - Infos');
        console.log("ref current scroll =>\n", refs?.current?.scrollWidth, "width");
        console.log("ref current offset =>\n", refs?.current?.offsetWidth, "width");
        console.log("ref total scroll possible (scroll - offset) => \n", refs?.current?.scrollWidth - refs?.current?.offsetWidth, "total width");
        console.groupEnd();
        console.groupEnd();
    }, [])

    // Needs to be out of UseEffect because it re-renders if there is an eventListener
    console.group("ScrollInfos - Other Logs");
    console.groupCollapsed('States - Infos');
    console.log("Ref current object => ", refs.current)
    console.log("Current scroll position => \n", position);
    console.log(`Current state => \n`, state);
    console.groupEnd();
    console.groupEnd();

    return (
        <aside className="pt-2">
            <ul>
                <li><b>Scroll position: {position} </b></li >
                <li><b>Current state is {state} </b></li >
            </ul>
        </aside>
    )
}