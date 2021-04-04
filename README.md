<img width="500" src="https://user-images.githubusercontent.com/951011/113491542-95457480-949f-11eb-9639-c51e62f22a02.png">

# [howmadeareyou.today](howmadeareyou.today)

😡 how mad are you today!!

## 🚀 Live

we're already live! view the production site on the web here: https://howmadareyou.today/

you can also view our staging environment here: https://howmadareyou.netlify.app

## ⚒️ Usage

built with vanilla html, css, and js. very easy to extend and understand. all necessary files are in the `dist/` folder and prefixed with `angry_`. the most essential file to expand upon is the `angry_caption_texts.js` which supplies the underlying "gameplay" data:

```js
const ANGRY_CAPTION_TEXTS = {
    
    /* JSON for Anger Level: Caption it Displays */
    /* Once the max level is reached, the text will be stuck there */

    0: {
        text: "am i angry?",
        fontWeight: 200,
        shakiness: 0
    },
    1: {
        text: "oh angry, much?",
        fontWeight: 300,
        shakiness: 1
    },
    2: {
        text: "you're angry.",
        fontWeight: 300,
        shakiness: 2
    },
    3: {
        text: "ok, very angry?",
        fontWeight: 400,
        shakiness: 3
    },
    4: {
        text: "confirmed: super angry",
        fontWeight: 400,
        shakiness: 6
    },
    5: {
        text: "red alert red alert how angry can you get",
        fontWeight: 700,
        shakiness: 8
    },
    6: {
        text: "activated emergency angry mode",
        fontWeight: 700,
        shakiness: 10
    },
    7: {
        text: "unlocked: nothing",
        fontWeight: 200,
        shakiness: 0
    },
    8: {
        text: "now you have a tomato",
        fontWeight: 400,
        shakiness: 11
    },
    9: {
        text: " ",
        fontWeight: 400,
        shakiness: 0
    },
    10: {
        text: "alright you reached max angertude for now",
        fontWeight: 200,
        shakiness: 100
    }

};
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
