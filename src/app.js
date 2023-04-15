import "./style/style.scss";
import "@fontsource/manrope";
import $ from "jquery";

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.header__burger-menu_button', '.header__burger-menu_lines');
    let links = menu.find('.header__burger-menu_link');
    let overlay = menu.find('.header__burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('header__burger-menu_active');

        if (menu.hasClass('header__burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.header__burger-menu');