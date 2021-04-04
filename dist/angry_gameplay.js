
/**
 * JSON representation of the ANGER level.
 * Once the max level is reached, the text will be stuck there, but the sfx will continue to be played each click.
 * If the user clicks to play the next sfx before the previous is completed, a preset record scratch sound will play.
 * Note: no sfx can be played for the first item (before user click).
 * Currently controls:
 * - text (that shows in caption & site title)
 * - fontWeight (200, 300, 400, or 700)
 * - shakiness (x/10 amount of seconds)
 * - sfx (name of audio track, cryTwo, cryThree, soAnger, or frustration)
 * - gif (name of gif or compatible <img> track, filename from /gif/ directory)
 * - mask (name of png or compatible <img> mask used via -webkit-mask on the gif, filename from /mask/ directory, requires gif to be visible)
 * - color (hex code of background color of site, will be stuck on last value if none given)
 */
const ANGRY_GAMEPLAY = {
    0: {
        text: "how mad are you today?",
        fontWeight: 200,
        shakiness: 0,
        sfx: "",
        color: "var(--angry-bg)"
    },
    1: {
        text: "oh angry, much?",
        fontWeight: 300,
        shakiness: 1,
        sfx: "frustration",
        gif:  "u0kxUtHbdCKs0.webp",
        mask: "irregular1.png",
        color: "C0CC0C",
        degrees: 270
    },
    2: {
        text: "you're angry.",
        fontWeight: 300,
        shakiness: 2,
        sfx: "soAnger",
        gif:  "1yiPpiqnOINUovWlCq.gif",
        mask: "irregular2.png",
        color: "C4A613",
        degrees: 180
    },
    3: {
        text: "ok, very angry?",
        fontWeight: 400,
        shakiness: 3,
        sfx: "cryTwo",
        gif:  "3o7bu8mwh3U6SXtLjy.webp",
        mask: "irregular3.png",
        color: "C5801F",
        degrees: 90
    },
    4: {
        text: "confirmed: super angry",
        fontWeight: 400,
        shakiness: 6,
        sfx: "cryThree",
        gif:  "fBGj9VkflVGgeMUbje.webp",
        mask: "irregular4.png",
        color: "C75927",
        degrees: 0
    },
    5: {
        text: "red alert red alert how angry can you get",
        fontWeight: 700,
        shakiness: 8,
        sfx: "cryTwo",
        gif:  "VgfPDtZemTEHLaHnP1.webp",
        mask: "irregular5.png",
        color: "CA3230",
        degrees: 130
    },
    6: {
        text: "activated emergency angry mode",
        fontWeight: 700,
        shakiness: 10,
        sfx: "soAnger",
        gif: "XEVHFzjPzjQy1uCulo.webp",
        mask: "irregular1.png",
        color: "CC0D39",
        degrees: 320
    },
    7: {
        text: "unlocked: nothing",
        fontWeight: 200,
        shakiness: 0,
        sfx: ""
    },
    8: {
        text: "now you have a tomato",
        fontWeight: 400,
        shakiness: 11,
        sfx: "frustration"
    },
    9: {
        text: " ",
        fontWeight: 400,
        shakiness: 0,
        sfx: ""
    },
    10: {
        text: "alright you reached max angertude for now",
        fontWeight: 200,
        shakiness: 100,
        sfx: "cryThree"
    }
};
