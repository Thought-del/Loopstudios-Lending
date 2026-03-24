import { SELECTORS } from "./constantins.js";

export function initMenu() {
    SELECTORS.OpenBTN.addEventListener('click', () => {
        SELECTORS.MENU.hidden = false;
        document.querySelector('body').classList.add('no-scroll');
    });

    SELECTORS.CloseBTN.addEventListener('click', () => {
        SELECTORS.MENU.hidden = true;
        document.querySelector('body').classList.remove('no-scroll');
    });

    document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !SELECTORS.MENU.hidden) {
            SELECTORS.MENU.hidden = true;
            document.body.classList.remove('no-scroll');
        }
    });
}