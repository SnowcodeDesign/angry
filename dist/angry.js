/* Variables */
var angry_clicks = 0;

/* DOM Set/Get Funcs */
function getAngerCaptionTextElement() {
    return document.getElementById("caption-text");
}

function getAngerButtonElement() {
    return document.getElementById("button-image");
}

function setAngerCaptionText(text) {
    const element = getAngerCaptionTextElement();
    const uppercasedText = text.toUpperCase();
    element.textContent = uppercasedText;
}

function setAngerFontWeight(fontWeight) {
    const element = getAngerCaptionTextElement();
    element.style.fontWeight = fontWeight;
}

function setAngerShakiness(shakiness) {
    const element = getAngerButtonElement();
    if (!shakiness || shakiness < 1) {
        element.style.animation = "";
    } else {
        const duration = 10 / shakiness;
        element.style.animation = `shake ${duration}s ease-in-out 0s infinite`;
    }
}

/* Core Flow: Handlers for Anger Level */
function handleAngryAmount(amount) {
    // change text
    const dataForAngeryLevel = ANGRY_CAPTION_TEXTS[amount];

    if (!dataForAngeryLevel) {
        const sortedAngerLevels = Object.keys(ANGRY_CAPTION_TEXTS);
        sortedAngerLevels.sort();

        const maxAngerLevelWithText = sortedAngerLevels[0];
        dataForAngeryLevel = ANGRY_CAPTION_TEXTS[maxAngerLevelWithText];
    }

    const { text, fontWeight, shakiness } = dataForAngeryLevel;
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
    setAngerShakiness(shakiness);
}

/* Flow for Footer Attr/Credits */
function handleFooterClick() {
    const footerBodyElement = document.getElementById("footer-body");

    if (!footerBodyElement.style.display || footerBodyElement.style.display === 'none') {
        footerBodyElement.style.display = 'inherit';
    } else {
        const duplicated = footerBodyElement.cloneNode(true);
        duplicated.style.animation = 'reveal 0.55s ease-in-out 0s 1 reverse';
        footerBodyElement.parentNode.replaceChild(duplicated, footerBodyElement);

        setTimeout(() => {
            const original = duplicated.cloneNode(true);
            original.id = "footer-body";
            original.addEventListener("click", (event) => {
                handleFooterClick();
            });
            
            original.style.display = 'none';
            original.style.animation = 'reveal 0.55s ease-in-out';
            duplicated.parentNode.replaceChild(original, duplicated);
        }, 550);
    }

}

/* Init / Load Funcs */
function loadAngryFonts() {
    const preloadFontWeights = [200, 300, 400, 700];
    const preloadFontFamilies = ['Londrina'];
    for (let fontFamily of preloadFontFamilies) {
        for (let fontWeight of preloadFontWeights) {
            const preloadNode = document.createElement("div");
            preloadNode.textContent = "Preloading...";
            preloadNode.style.fontFamily = fontFamily;
            preloadNode.style.fontWeight = fontWeight;
            preloadNode.style.opacity = 0;
            preloadNode.style.position = "fixed";
            preloadNode.style.top = "100%";
            document.body.appendChild(preloadNode);
        }
    }
}

function loadAngry() {
    loadAngryFonts();

    const buttonElement = document.getElementById("button-image");
    
    buttonElement.addEventListener("click", (event) => {
        angry_clicks = angry_clicks + 1;
        handleAngryAmount(angry_clicks);
    });

    const { text, fontWeight, shakiness } = ANGRY_CAPTION_TEXTS[0];
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
    setAngerShakiness(shakiness);

    const footerElement = document.getElementById("footer-coffee");
    const footerBodyElement = document.getElementById("footer-body");

    footerElement.addEventListener("click", (event) => {
        handleFooterClick();
    });

    footerBodyElement.addEventListener("click", (event) => {
        handleFooterClick();
    });
}
