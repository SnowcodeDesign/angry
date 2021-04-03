/* Variables */
var angry_clicks = 0;

/* DOM Set/Get Funcs */
function getAngerCaptionTextElement() {
    return document.getElementById("caption-text");
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

    const { text, fontWeight } = dataForAngeryLevel;
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
}

/* Init / Load Funcs */
function loadAngry() {
    const buttonElement = document.getElementById("button-image");
    
    buttonElement.addEventListener("click", (event) => {
        angry_clicks = angry_clicks + 1;
        handleAngryAmount(angry_clicks);
    });

    const { text, fontWeight } = ANGRY_CAPTION_TEXTS[0];
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
}