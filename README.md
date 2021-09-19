# Scriptable Word Clock Widget

[![Download with ScriptDude](https://scriptdu.de/download.svg)](https://scriptdu.de/?name=Word%20Clock%20Widget&source=https%3A%2F%2Fraw.githubusercontent.com%2FbitKrakenCode%2FScriptableWordClockWidget%2Fmain%2FWord%2520Clock%2520Widget.js&docs=https%3A%2F%2Fgithub.com%2FbitKrakenCode%2FScriptableWordClockWidget#generator)


I made a pretty much useless word clock widget inspired by QlockTwo.

Features:

- 21 supported languages + 4 variations
- 18 themes + custom themes
- Support for dark/light mode themes
- Background images from file or url
- DOT Clock Face mode
- Nonsense Clock Face
- Support for Large and Small widgets

Useless, because it may not refresh the way you would hope (I did my best, more later).

But: this is my first javascript project. I did love the journey, I love the result! I hope some of you do too.

If you find any bugs or or have a suggestion, please let me know.

## Language

I was able to replicate ALL of the original QlockTwo faces / languages, except for Arabic.

Every language got it's rules, how the time is written. Like when do you name the next hour. For English it is 35 (twentyfive to X), for German it is 25 (five bevore half to X) and as far as I understand Chinese does not. Also in some languages there are a ton of exceptions. German for example is writing "one" different on a full hour then in between (fünf vor ein"S" / ein Uhr). Some languages are more exceptions then anything else, like Chinese Traditional for example.

All of this is kindly provided by QlockTwo, as I found it in their demo web app.

List:

- CA-Catalan
- CH-Swiss-German
- CN-Chinese-traditional
- CT-Chinese-simplified
- CZ-Czech
- DE-German
- D2-German-Variant
- D3-Swabian (German)
- D4-German-Variant
- DK-Danish
- EN-English
- E2-English-Variant
- ES-Spanish
- FR-French
- GR-Greek
- HE-Hebrew
- IT-Italian
- JP-Japanese
- NL-Dutch
- NO-Norwegian
- PE-Portugese
- RO-Romanian
- RU-Russian
- SE-Swedish
- TR-Turkish

Explanation of the vatiants here: [https://qlocktwo.com/eu/timecheck](https://qlocktwo.com/us/timecheck)

### DOT Face

The DOT Language Face is displaying the full hour as digits, using the characters as pixels. I added some extra rows/columns to it, so it looks pretty. You can apply this to any language face by setting dot_view to true in a custom theme (may needs adjusting by changing the dot_shift_* variables).

## Themes

I created some themes you can use, but you can also create your own.

auto dark/light Themes:
- iosAuto

simple:
- iosDark
- iosLight
- red
- blue
- lime
- gold
- yellow
- vintage
- carrotBlue
- apolloPurple
- pureBlack
- pureBlackXL
- matrixGreen

image from URL:
- RawIron
- VintageCopper
- Metamorphite

image from file:
- ocean

special:
- random (well ... it will select a random one each refresh)

You can override ANY widget_config setting with your theme.

Side note: there are also language fixes, so some theme settings may get overwritten by them.

## Widget Parameters

To create multiple widgets with unique language and theme parameters.

`E2,carrotBlue` will use the English variant language with the "carrotBlue" theme. The order of parameters is not strict and both are optional, but case sensitive.

Extra parameter: `hh:mm` / `red,4:50,EN` > set a fixed time, if you want to. Also useful to debug stuf.

## Widget Refresh

iOS only lets widgets update a limited amount a day. (This is NOT an issue on macOS)

I did my best to push the next refresh time on the upcoming full 5 minute.

After playing around with it for a while they update pretty well. Sometimes even right at the 5min mark while you are actively looking at it.

Also you can add an offset to it (default 1 minute), so you get "ten to" at 49 already (next update time will be on 55).

If you set the widget "When Interacting" to "Run Script" it will update it when you click on the widget.

"THIS IS USELESS, IF IT IS SHOWING ME THE WRONG TIME!!!" Ok, I get you and I got a wonderful solution for you: the Nonsense Clock Face! You will be greeted with stuff like "IT IS WHATEVER TO TEN", "IT IS IDK PAST ONE" and a very special one for 0:00 ;) Now the information is useless but not wrong.

You can also use the DOT face, that only updates once every hour so should be always display the right hour.