<img width="500" src="https://user-images.githubusercontent.com/951011/113491542-95457480-949f-11eb-9639-c51e62f22a02.png">

# [howmadeareyou.today](howmadeareyou.today)

😡 how mad are you today!!

## 🚀 Live

we're already live! view the production site on the web here: https://howmadareyou.today/

you can also view our staging environment here: https://howmadareyou.netlify.app

## ⚒️ Usage

built with vanilla html, css, and js. very easy to extend and understand. all necessary files are in the `dist/` folder and prefixed with `angry_`. the most essential file to expand upon is the [angry_gameplay.js](dist/angry_gameplay.js) which supplies the underlying "gameplay" data:

```js
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
 * - degrees (degrees offset to use for position when displaying gif, calculated from center of thumbs down hand)
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
    ...
```

## 📝 Authors

```
Snowcode, LLC
snowcode.design
(c) 2021

Julian Weiss
Aaron Zehm
```

## ℹ️ Credits

- Sound Effects are from Zapsplat https://www.zapsplat.com/
   - human-boy-three-years-old-cry-002.mp3
   - human-boy-three-years-old-cry-003.mp3
   - tspt_vinyl_needle_scratch_01_095.mp3
- Sound Effects are also from FreeSound https://freesound.org/
   - Reitanna https://freesound.org/people/Reitanna/sounds/344003/
   - jorickhoofd https://freesound.org/people/jorickhoofd/sounds/180342/
- GIFs are from Giphy
   - Toca Boca https://giphy.com/gifs/tocaboca-no-angry-1yiPpiqnOINUovWlCq
   - https://media0.giphy.com/media/u0kxUtHbdCKs0/giphy.webp?cid=ecf05e47vrwbn1b53veth9y9870dzz9a95u7hs933xwhp3la&rid=giphy.webp
   - Alice Socal https://media4.giphy.com/media/fBGj9VkflVGgeMUbje/200w.webp?cid=ecf05e47bknfm5itemqf7mdbe0kz4bv161xl6mjfw7l0c817&rid=200w.webp
   - https://media4.giphy.com/media/3o7bu8mwh3U6SXtLjy/200.webp?cid=ecf05e47zl7h8euwj3emsup1v7i211s2gwvuwl1zfq18eoze&rid=200.webp
   - https://media2.giphy.com/media/XEVHFzjPzjQy1uCulo/200.webp?cid=ecf05e47q12zvl66osvdyh1kmv5xvxnrvh53unp9jpu5sbqg&rid=200.webp
   - Hopper https://media1.giphy.com/media/VgfPDtZemTEHLaHnP1/200w.webp?cid=ecf05e47997lr3mbetfg7a24rfxj2r0ujd709zpc2ov8clvy&rid=200w.webp
- Font is Londrina Solid from Google Fonts https://fonts.google.com/specimen/Londrina+Solid
- Icons are attribution-free via The Noun Project. Designed by Alex Muravev, RU https://thenounproject.com/alex2900
- Shake CSS animation inspired by https://css-tricks.com/snippets/css/shake-css-keyframe-animation
- Hosting via Netlify (free plan), which secures its own SSL via Let's Encrypt
- Domain via Namecheap

## 🔓 License

See [LICENSE](LICENSE). 

```
MIT License

Copyright (c) 2021 Snowcode

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
