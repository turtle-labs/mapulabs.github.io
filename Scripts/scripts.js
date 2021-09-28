// ---------------------------------------------------------------------- //
// ---------------------- General Element Selector ---------------------- //
// ---------------------------------------------------------------------- //

const EL = (selectElement) => document.querySelector(selectElement);





// ---------------------------------------------------------------------- //
// ------------------- Main Page > Dropdown Navigation ------------------ //
// ---------------------------------------------------------------------- //


// If javascript are disabled or not being loaded, the whole navigation-menu will just be visible all the time.


// ----- Constants & Variables ----- //
const navExpandArrows = document.querySelectorAll(".navExpandArrow");
const navItemLists = document.querySelectorAll(".navItemList");
const navHeaderContainers = document.querySelectorAll(".navHeaderContainer");


// ----- Function -> ACTIVATE main dropdown menu ----- //
activateDropdown = () => {
    // Transition
    EL('#navbar').style.transition = '0.2s';
    EL('#dropdownBtn').style.transition = '0.2s';

    // Animations
    EL('#dropdownBtn').style.transform = 'rotate(90deg)';
    EL('#navbar').style.marginTop = '0px';
    EL('#navbar').style.transform = 'scaleY(1)';
}


// ----- Function -> DEACTIVATE main dropdown menu ----- //
deactivateDropdown = () => {
    // Transition
    EL('#navbar').style.transition = '0.2s';
    EL('#dropdownBtn').style.transition = '0.2s';

    // Animations
    EL('#dropdownBtn').style.transform = 'rotate(0deg)';
    EL('#navbar').style.marginTop = -EL('#navbar').offsetHeight + 'px';
    EL('#navbar').style.transform = 'scaleY(0)';
}


// ----- Function -> ACTIVATE item dropdown menu ----- //
activateItemDropdown = (expandArrow, itemList) => {

    // Transition
    for (let i = 0; i < navExpandArrows.length; i++) {
        navExpandArrows[i].style.transition = '0.2s';
    }
    for (let i = 0; i < navItemLists.length; i++) {
        navItemLists[i].style.transition = '0.2s';
    }

    // Animations
    expandArrow.style.transform = 'rotate(180deg)';
    itemList.style.marginTop = '0px';
    itemList.style.transform = 'scaleY(1)';
}


// ----- Function -> DEACTIVATE item dropdown menu ----- //
deactivateItemDropdown = (expandArrow, itemList) => {

    // Transition
    for (let i = 0; i < navExpandArrows.length; i++) {
        navExpandArrows[i].style.transition = '0.2s';
    }
    for (let i = 0; i < navItemLists.length; i++) {
        navItemLists[i].style.transition = '0.2s';
    }

    // Animations
    expandArrow.style.transform = 'rotate(0deg)';
    itemList.style.marginTop = -itemList.offsetHeight + 'px';
    itemList.style.transform = 'scaleY(0)';
}


// ----- Event -> TRIGGER main dropdown menu on CLICK ----- //
EL('#dropdownBtn').onclick = () => {

    //EL('#dropdownBtn').classList.toggle('active');
    
    if (!EL('#dropdownBtn').classList.contains('active') ) {
        EL('#dropdownBtn').classList.add('active');
    } else {
        EL('#dropdownBtn').classList.remove('active');
    }

    if ( EL('#dropdownBtn').classList.contains('active') ) {
        activateDropdown();
    } else {
        deactivateDropdown();
    }
}


// ----- Event -> TRIGGER main dropdown menu on HOVER ----- //

    // EL('#dropdownBtn').onmouseenter = () => {
    //     if (!EL('#dropdownBtn').classList.contains('active') ) {
    //         EL('#dropdownBtn').click();
    //     }
    // }

    // EL('header').children.onmouseout = () => {
    //     if (EL('#dropdownBtn').classList.contains('active') ) {
    //         EL('#dropdownBtn').click();
    //     }
    // }



    // navHeaderContainers[i].onmouseout = () => {
    //     if (navExpandArrows[i].classList.contains('active')) {
    //         navExpandArrows[i].click();
    //     }
    // }



// ----- Event -> TRIGGER item dropdown menu on CLICK ----- //
for (let i = 0; i < navExpandArrows.length; i++) {

    navExpandArrows[i].onclick = () => {

        navExpandArrows[i].classList.toggle('active');

        if (navExpandArrows[i].classList.contains('active')) {
            activateItemDropdown(navExpandArrows[i], navItemLists[i]);
        } else {
            deactivateItemDropdown(navExpandArrows[i], navItemLists[i]);
        }
    }
}


// ----- Event -> TRIGGER item dropdown menu on HOVER ----- //
for (let i = 0; i < navHeaderContainers.length; i++) {

    if (document.documentElement.clientWidth >= 1000) {
        navHeaderContainers[i].onmouseover = () => {
            navExpandArrows[i].click();
        }

        navHeaderContainers[i].onmouseout = () => {
            if (navExpandArrows[i].classList.contains('active')) {
                navExpandArrows[i].click();
            }
        }
    }

}


// ----- Event -> DEACTIVATE all dropdown menus (if clicked outside of it) ----- //
document.addEventListener('click', (event) => {

    let ignoreClickOnMeElement1 = EL('#dropdownBtn');
    let ignoreClickOnMeElement2 = EL('#navbar');

    let isClickInsideElement1 = ignoreClickOnMeElement1.contains(event.target);
    let isClickInsideElement2 = ignoreClickOnMeElement2.contains(event.target);

    if (!isClickInsideElement1 && !isClickInsideElement2) {

        // Close main dropdown menu
        EL('#dropdownBtn').classList.remove('active');
        deactivateDropdown();

        // Close item dropdown menu
        for (let i = 0; i < navExpandArrows.length; i++) {
            if (navExpandArrows[i].classList.contains('active')) {
                navExpandArrows[i].click();
            }
        }
    }
});


// ----- Event -> HIDES all dropdown menus / navigationbars on page load ----- //
window.onload = () => {

    // Hides item-list-menu
    for (let i = 0; i < navItemLists.length; i++) {
        navItemLists[i].style.marginTop = -navItemLists[i].offsetHeight + 'px';
        navItemLists[i].style.transform = 'scaleY(0)';
    }

    // Hides main dropdown-menu
    EL('#navbar').style.marginTop = -EL('#navbar').offsetHeight + 'px';
    EL('#navbar').style.transform = 'scaleY(0)';

    // Makes the dropdown menu roll down on top of page content
    if (document.documentElement.clientWidth < 1000) {
        EL('#navbarList').style.position = 'absolute';
        EL('#navbarList').style.width = '100%';
    }
}
