const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const   header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

    function hidetabContent() {
        content.forEach(el => {
            el.style.display = 'none';
        });

        tab.forEach(el => {
            el.classList.remove(activeClass);
        })
    }

    function shoowTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hidetabContent();
    shoowTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target &&
            (target.classList.contains(tabSelector.replace(/\./,"")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./,"")))) {
                tab.forEach((el, i) => {
                    if (target == el || target.parentNode == el) {
                    hidetabContent();
                    shoowTabContent(i);
                    } 
                });
        }
    });
};

export default tabs;