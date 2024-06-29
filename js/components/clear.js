import { clearContainer } from "./rockets.js";

export const clearInformation = () => {
    clearContainer("#header__title");
    clearContainer("#description__item");
    clearContainer(".section__information__1");
    // clearContainer(".information__table__1");
    clearContainer(".section__information__2")
    clearContainer(".section__information__3")
    clearContainer(".stage1");
    clearContainer(".stage2");
    clearContainer(".information__table__2");
    clearContainer(".information__item")
    clearContainer(".section__image");
    clearContainer("#paginacion");

    const elementsToResetClasses = [
        "#header__title",
        "#description__item",
        // ".section__information__1",
        // ".information__table__1",
        ".stage1",
        ".stage2",
        ".information__item",
        // ".information__table__2",
        ".section__image",
        "#paginacion"
    ];

    elementsToResetClasses.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.className = selector.slice(1); 
        }
    });
}
