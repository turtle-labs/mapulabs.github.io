// ---------------------------------------------------------------------- //
// -------------------- Toybox-Page > Card app popup -------------------- //
// ---------------------------------------------------------------------- //

// Show the application and/or code in a popup windown, when the buttons on the backside of cards are clicked

const toyboxBtnApp = document.querySelectorAll('.cardBtn.previewApp');
const toyboxBtnCode = document.querySelectorAll('.cardBtn.previewCode');
const toyboxToyItem = document.querySelectorAll('.toyItem');

const toyboxCodeUrl = "../Toybox-apps/iframe-preview/app-html.html"
const toyboxAppUrl =  "../Toybox-apps/app.html"


// ----- Function -> Creates the popup element ----- //
let createToyboxPopup = urlPath => {

    // Creates the main popup element
    let toyboxPopup = document.createElement("DIV");

    // Inserts child-elements into the main popup element
    toyboxPopup.innerHTML = `
        <div
            id="toyboxPopup"
            style="
                position: fixed;
                width: 100vw;
                height: 100vh;
                top: 0px;
                left: 0px;
                background-color: pink;
                z-index: 99;
                background-color: rgba(0,0,0,0.6);

                display: flex;
                justify-content: center;
                align-items: center;"
        >
            <img
                id="toyboxPopupClose"
                src="../Images_Videos/Navigation/close-white.png"
                style="
                    top: 10px;
                    right: 10px;
                    width: 50px;
                    height: 50px;
                    padding: 5px;
                    position: absolute;
                    cursor: pointer;"
            >
            <iframe
                id="toyboxIframe"
                width="100"
                height="100"
                src="${urlPath}"
                loading="lazy"
                style="
                    width: 80vw;
                    height: 80vh;
                    background-color: rgba(245, 250, 251, 1);

                    transform: scaleX(0);
                    transition: 0.3s;"
            ></iframe>
        </div>
    `;

    // Tells where to insert the main element in the document
    EL('#toybox').appendChild(toyboxPopup);

    // Iframe popup animation
    setTimeout( () => {
        EL('#toyboxIframe').style.transform = 'scaleX(1)';
    }, 100);

    // Onclick -> Close and remove popup window
    EL('#toyboxPopupClose').onclick = () => {
        EL('#toyboxPopup').remove();
    }

    // Press Escape-key -> Close and remove popup window
    document.onkeydown = (e) => {
        if (e.keyCode == '27') {
            EL('#toyboxPopup').remove();
        }
    }
}

// ----- Event -> TRIGGER popup on CLICK ----- //
for (let i = 0; i < toyboxBtnApp.length; i++) {

    toyboxBtnApp[i].onclick = () => {
        createToyboxPopup(toyboxAppUrl);

        // This prevents the card from "staying flipped"
        toyboxToyItem[i].click();
    }
}

// ----- Event -> TRIGGER popup on CLICK ----- //
for (let i = 0; i < toyboxBtnCode.length; i++) {

    toyboxBtnCode[i].onclick = () => {
        createToyboxPopup(toyboxCodeUrl);

        // This prevents the card from "staying flipped"
        toyboxToyItem[i].click();
    }
}





// ---------------------------------------------------------------------- //
// ----------------------- Toybox-Page > Card Flip ---------------------- //
// ---------------------------------------------------------------------- //

// This ensures the card-flip function also works on touchscreens (onclick) -> Also see CSS Code

const toyItemCards = document.querySelectorAll('.toyItemCard');

for (let i = 0; i < toyItemCards.length; i++) {

    toyItemCards[i].onclick = () => {

        toyItemCards[i].firstElementChild.classList.toggle('cardFlipped');

    }
}
