const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    const hidetabContent = () => {
        content.forEach(card => {
            card.style.display = 'none';
        });

        tab.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    }

    const shoowTabContent = (i = 0) => {
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

export  {tabs};