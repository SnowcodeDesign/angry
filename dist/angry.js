/* Variables */
var angry_clicks = 0;
var angry_audio_players = {};
var angry_playing_audio = null;

/* DOM Set/Get Funcs */
function getAngerCaptionTextElement() {
    return document.getElementById("caption-text");
}

function getAngerButtonElement() {
    return document.getElementById("button-image");
}

function getAngerBackgroundElement() {
    return document.getElementById("background");
}

function getAngerButtonHandElement() {
    return document.getElementById("angry-3d"); // "button-hand"
}

function setAngerCaptionText(text) {
    const element = getAngerCaptionTextElement();
    const uppercasedText = text.toUpperCase();
    element.textContent = uppercasedText;
    document.title = text && text !== " " ? text : "how mad are you today";
}

function setAngerFontWeight(fontWeight) {
    const element = getAngerCaptionTextElement();
    element.style.fontWeight = fontWeight;
}

function setAngerBackgroundColor(color) {
    if (!color) {
        return;
    }

    const element = getAngerBackgroundElement();
    element.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
    document.body.parentElement.style.backgroundColor = color;

    const footerBody = document.getElementById("footer-body");
    footerBody.style.color = color;
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

/* SFX Flow */
function loadAllAudioTracks() {
    const recordScratchFilename = 'tspt_vinyl_needle_scratch_01_095.mp3';
    const record = new Audio(`sfx/${recordScratchFilename}`);
    record.volume = 0.4;
    record.load();

    const cryTwoFilename = 'human-boy-three-years-old-cry-002.mp3';
    const cryTwo = new Audio(`sfx/${cryTwoFilename}`);
    cryTwo.load();

    cryTwo.addEventListener('ended', (event) => {
        if (cryTwo === angry_playing_audio) {
            angry_playing_audio = null;
        }
    });

    const cryThreeFilename = 'human-boy-three-years-old-cry-003.mp3';
    const cryThree = new Audio(`sfx/${cryThreeFilename}`);
    cryThree.load();

    cryThree.addEventListener('ended', (event) => {
        if (cryThree === angry_playing_audio) {
            angry_playing_audio = null;
        }
    });

    const soAngerFilename = '344003__reitanna__so-anger.mp3';
    const soAnger = new Audio(`sfx/${soAngerFilename}`);
    soAnger.load();

    soAnger.addEventListener('ended', (event) => {
        if (soAnger === angry_playing_audio) {
            angry_playing_audio = null;
        }
    });

    const frustrationFilename = '180342__jorickhoofd__screams-of-frustration-2.mp3';
    const frustration = new Audio(`sfx/${frustrationFilename}`);
    frustration.load();

    frustration.addEventListener('ended', (event) => {
        if (frustration === angry_playing_audio) {
            angry_playing_audio = null;
        }
    });

    angry_audio_players = {
        record,
        cryTwo,
        cryThree,
        soAnger,
        frustration
    };
}

function playAngryRecordScratch() {
    const recordAudio = angry_audio_players.record;
    if (!recordAudio) {
        return; // not loaded yet
    }

    recordAudio.currentTime = 0;
    recordAudio.play();
}

/**
 * Play the given audio with the human-readable name from the `angry_audio_players` global var. 
 * This it NOT the filename, because the audio tracks are preloaded before use.
 * @param {*} name record, cryTwo, or cryTrhee
 */
function playAngrySFX(name) {
    if (angry_playing_audio) {
        playAngryRecordScratch();
        angry_playing_audio.pause();
        angry_playing_audio = null;
    }

    const audioToPlay = angry_audio_players[name];
    if (!audioToPlay) {
        return; // not loaded yet (or no audio is meant to be played)
    }

    angry_playing_audio = audioToPlay;
    
    audioToPlay.currentTime = 0;
    
    // const playingAudio = new Audio(`sfx/${audioToPlay}`);
    // angry_playing_audio = playingAudio;

    audioToPlay.play();
}

/* GIF Handling */
function playAngerGIF(name, mask=null, degrees=null, removeExistingGifs=false) {
    const gifsContainer = document.getElementById('anger-gifs');

    if (removeExistingGifs && removeExistingGifs === true) {
        while (gifsContainer.firstChild) {
            gifsContainer.removeChild(gifsContainer.firstChild);
        }
    }
    
    if (!name) {
        return;
    }

    const gifElement = document.createElement('img');
    gifElement.src = `/gif/${name}`;
    gifElement.style.userSelect = 'none';
    gifElement.style.position = 'absolute';
    gifElement.style.width = '120px';
    gifElement.style.height = '120px';

    const degreesNonNull = degrees ? degrees : 0;
    const radius = 170;
    const buttonRect = getAngerButtonHandElement().getBoundingClientRect();
    const centerX = buttonRect.x + (buttonRect.width / 2) - 50;
    const centerY = buttonRect.y + (buttonRect.height / 2) - 50;
    const degreesToRadians = degrees * (Math.PI / 180);
    const radiusX = radius * Math.cos(degreesToRadians);
    const radiusY = radius * Math.sin(degreesToRadians);
    const positionX = centerX + radiusX;
    const positionY = centerY + radiusY;
    gifElement.style.top = `${positionY}px`;
    gifElement.style.left  = `${positionX}px`;

    gifElement.style.objectFit = 'cover';
    gifElement.style.borderRadius = '10px';
    gifElement.style.backgroundColor = 'rgba(0,0,0,0.2)';
    // gifElement.style.animation = `shake 5s ease-in-out 0s infinite`;

    if (mask) {
        gifElement.style.webkitMaskImage = `url(/mask/${mask})`;
        gifElement.style.webkitMaskPosition = "center";
        gifElement.style.webkitMaskSize = "contain";
        gifElement.style.webkitMaskRepeat = "no-repeat";
    }

    gifsContainer.appendChild(gifElement);

    // TODO: lock height because the gifs do not layout relatively
    const rootContainer = document.getElementById("container");
    if (!rootContainer.getAttribute("locked")) {
        rootContainer.setAttribute("locked", true);
        rootContainer.style.width = `${window.innerWidth}px`;
        rootContainer.style.height = `${window.innerHeight}px`;
    }
}

/* Core Flow: Handlers for Anger Level */
function handleAngryAmount(amount) {
    // change text
    let dataForAngeryLevel = ANGRY_GAMEPLAY[amount];

    if (!dataForAngeryLevel) {
        const sortedAngerLevels = Object.keys(ANGRY_GAMEPLAY);
        sortedAngerLevels.map(key => parseInt(key, 10)).sort();

        const maxAngerLevelWithText = sortedAngerLevels[sortedAngerLevels.length-1];
        dataForAngeryLevel = ANGRY_GAMEPLAY[maxAngerLevelWithText];
    }

    const { text, fontWeight, shakiness, sfx, gif, mask, color, degrees } = dataForAngeryLevel;
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
    setAngerShakiness(shakiness);
    setAngerBackgroundColor(color);
    playAngrySFX(sfx);
    playAngerGIF(gif, mask, degrees);
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
        }, 540);
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
    loadAllAudioTracks();

    const threeDElement = getAngerButtonHandElement();

    threeDElement.addEventListener("click", (event) => {
        angry_clicks = angry_clicks + 1;
        handleAngryAmount(angry_clicks);
    });

    const { text, fontWeight, shakiness, gif, mask, color, degrees } = ANGRY_GAMEPLAY[0];
    setAngerCaptionText(text);
    setAngerFontWeight(fontWeight);
    setAngerShakiness(shakiness);
    setAngerBackgroundColor(color);
    playAngerGIF(gif, mask, degrees, true);

    const footerElement = document.getElementById("footer-coffee");
    const footerBodyElement = document.getElementById("footer-body");

    footerElement.addEventListener("click", (event) => {
        handleFooterClick();
    });

    footerBodyElement.addEventListener("click", (event) => {
        handleFooterClick();
    });
}
