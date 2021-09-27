// ---------------------------------------------------------------------- //
// ----------------------- Home-Page > Banner Text ---------------------- //
// ---------------------------------------------------------------------- //

// See CSS code for the blinking character

let wordIndexCounter = 1;   // BannerText word -> 1 - 4

let wordCharLength = 0;     // The total character length of current object-word

let wordCharCounter = 0;    // Counting the character index of current word

let direction = true;       // Direction -> If to delete or print a character

let bannerWord = '';        // The current text to insert into the HTML element

const bannerText = {
    1:  '  Web Developer  ',
    2:  '  Applications  ',
    3:  '  Consulting  ',
    4:  '  Lego Master  '
};

setInterval( () => {

    wordCharLength = bannerText[wordIndexCounter].length;

    // Check direction aka. spelling or deleting
    if (wordCharCounter >= wordCharLength) {
        direction = false;
    }

    if (wordCharCounter == 0) {
        direction = true;
    }

    // Adding or removing characters
    if (direction == true) {
        bannerWord += bannerText[wordIndexCounter].charAt(wordCharCounter);
        wordCharCounter++;
    }

    if (direction == false) {
        bannerWord = bannerWord.slice(0, bannerWord.length - 1);
        wordCharCounter--;
    }

    // Checks if a word has been fully spelled, if so, moving on to next word
    if (wordCharCounter == 0) {
        wordIndexCounter++;
    }

    if (wordIndexCounter > 4) {
        wordIndexCounter = 1;
    }

    // Inserts the text into the HTML element
    EL('#homeBannerText').innerHTML = bannerWord;

}, 250);
