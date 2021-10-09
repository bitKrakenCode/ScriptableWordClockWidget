// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: th;

///////////////////////////////////////////////////////
// WIDGET DEFAULT CONFIGURATIONS
////////////////////////////////////////

// this is only the default config, that is loaded
// everything will be overwritten by themes and "language fix" (CS, CT, JP, HE)

let widget_config = {
  // general settings
  language: "E2",
  theme: "iosAuto",
  fixedTime: "",

  // how many minutes you want to add to the current time
  // that way the clock will display "five oclock" if set between 4:59 - 5:04
  offset_minutes: 1,

  // TRY to UPDATE widget every full 5 min
  // can be adjusted by DOT theme to every 60min
  // we try to steer ios to update next, when the value actually changes
  update_full_minutes: 5,


  // DOT VIEW /////
  // if you want to use dot view 
  dot_view: false,
  dot_view_24: true,
  // add shift for digits in DOT view, starting from row 0
  // each digit is 5 characters wide
  dot_shift_xa: 0,
  dot_shift_xb: 6,
  // shift horizontaly from the top, starting from line 2 (third line)
  dot_shift_y: 0,
  
  // use an image as background ... from the scriptable icloud directory or from url (starts with http:// or https://)
  background_image: false,

  // default color to display, if no valid theme is set
  backgroundColor: [
    "#1c1c1e", 
    "#1c1c1e"
  ],
  backgroundColorLight: [],

  // gradient for BG color (in what direction the )
  backgroundGradientValue: [0.0, 1.0],
  
  // The font to use for the words in the word clock
  font: "Menlo",

  // The font size to use for the words in the word clock
  fontSize: 18,

  // The color to use for the "highlighted" words.
  // The "highlighted" words tells the time
  textColorHighlighted: "#fefffe",
  textColorHighlightedLight: null,
  
  // The color of the highlighted text shadow
  textShadowHighlighted: "#fefffe",
  textShadowHighlightedLight: null,
  
  // The color of the words that are NOT highlighted
  textColorBackground: "#404043",
  textColorBackgroundLight: null,

  // The radius of the highlighted text shadow
  textShadowHighlightedRadius: 0,


  // The opacity of the non-highlighted words 
  // 1 -> opaque; 0 -> transparent
  textAlphaBackground: 0.5,

  // The spacing between the lines of words of the clock
  spacingBetweenLines: 4.5,

  // The spacing between each individual word, within the
  // same line
  spacingBetweenWords: 11,
}

const themes = {
  iosAuto: {
    backgroundColor: ["#1c1c1e", "#1c1c1e",],
    backgroundColorLight: ["#ffffff", "#ffffff",],
    textColorHighlighted: "#fefffe",
    textColorHighlightedLight: "#000000",
    textColorBackground: "#404043",
    textColorBackgroundLight: "#cccccc",
  },
  iosDark: {
    backgroundColor: ["#1c1c1e", "#1c1c1e"],
    textColorHighlighted: "#fefffe",
    textColorBackground: "#404043",
  },
  iosLight: {
    backgroundColor: ["#ffffff", "#ffffff"],
    textColorHighlighted: "#000000",
    textColorBackground: "#cccccc",
  },
  red: {
    backgroundColor: ["#D94036", "#D41F29"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#E2745A",
  },
  blue: {
    backgroundColor: ["#00A6D4", "#0093C9"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#65BFDF",
  },
  lime: {
    backgroundColor: ["#D4DA52", "#C8D200"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#D8DD67",
  },
  gold: {
    backgroundColor: ["#E1D2B5", "#A48B66"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#5C5C50",
  },
  yellow: {
    backgroundColor: ["#deb714", "#c39009"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#9d7600",
  },
  vintage: {
    backgroundColor: ["#538687", "#194e56"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#16383d",
  },
  carrotBlue: {
    backgroundColor: ["#0088F4", "#0151E4"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#2284ed",
  },
  apolloPurple: {
    backgroundColor: ["#4981D4", "#6E5DF5"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#848ccc",
  },
  pureBlack: {
    backgroundColor: ["#000000", "#000000"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#151515",
  },
  pureBlackXL: {
    backgroundColor: ["#000000", "#000000"],
    textColorHighlighted: "#FFFFFF",
    textColorBackground: "#151515",
    fontSize: 25,
    spacingBetweenLines: 2.8,
    spacingBetweenWords: 13,
  },
  matrixGreen: {
    backgroundColor: ["#000000", "#000000"],
    textColorHighlighted: "#9DF7A4",
    textColorBackground: "#233E27",
    font: "Courier New",
  },
  RawIron: {
    textColorHighlighted: "#fefffe",
    textColorBackground: "#696969",
    background_image: "https://qlocktwo.com/pub/media/wysiwyg/timecheck/Q2CE_L_RAW_IRON_frontal_background.png",
    textShadowHighlightedRadius: 0.5,
  },
  VintageCopper: {
    textColorHighlighted: "#fefffe",
    textColorBackground: "#404043",
    background_image: "https://qlocktwo.com/pub/media/wysiwyg/timecheck/Q2CE_VINTAGE_COPPER-web.jpg",
  },
  Metamorphite: {
    textColorHighlighted: "#fefffe",
    textColorBackground: "#696969",
    background_image: "https://qlocktwo.com/pub/media/wysiwyg/timecheck/Q2CE_METAMORPHITE_2019-web.jpg",
  },
  ocean: {
    textColorHighlighted: "#fefffe",
    textColorBackground: "#74BCE1",
    textShadowHighlightedRadius: 0.5,
    background_image: "ocean.jpeg",
  },
}

// fix for languages to make everything looking good. 
const language_layout_fix = {
  CS: {
    fontSize: 18,
    spacingBetweenWords: 3.5,
  },
  CT: {
    fontSize: 18,
    spacingBetweenWords: 3.5,
  },
  JP: {
    fontSize: 18,
    spacingBetweenWords: 3.5,
  },
  HE: {
    fontSize: 20,
    spacingBetweenLines: 1.5,
    spacingBetweenWords: 9.5,
  },
  DOT: {
    fontSize: 14,
    spacingBetweenLines: 6,
    spacingBetweenWords: 9,
    dot_view: true,
    dot_shift_xa: 1,
    dot_shift_xb: 7,
    update_full_minutes: 60,
  }
}


///////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////


//////////////////////
// LOAD PARAMETERS
if (args.widgetParameter) {
  let widget_param_list = args.widgetParameter.split(",");

  for (let i = 0; i < widget_param_list.length; i++) {
    param = widget_param_list[i]
    
    if (getMatrixForLanguage(param) != null) {
      widget_config.language = param
    } else if (param in themes || param == "random") {
      widget_config.theme = param
    } else if (param.match(/\d{1,2}:\d{2}/gm)[0]) {
      widget_config.fixedTime = param
    } else {
      throw new Error("param invalid: " + param)
    }
  }
}



// theme config

if (widget_config.theme == "random") {
  console.log("random selected")
  var keys = Object.keys(themes)
  widget_config.theme = keys[ Math.floor(Math.random() * keys.length)]
  console.log("random result: " + widget_config.theme)
}

// merge theme with config
Object.assign(widget_config, themes[widget_config.theme]);



Object.assign(widget_config, language_layout_fix[widget_config.language]);

set_colors();

////////////////////////////////
// LOAD MATRIX FOR LANGUAGE

let widget_matrix = getMatrixForLanguage(widget_config.language)
let widget_word_matrix = widget_matrix.a
let time_map = widget_matrix.r
let hour_display_limit = widget_matrix.b

// create status grid for clock face
// to store on or off state
const onOffMap = []
for (let i = 0; i < widget_word_matrix.length; i++) {
  onOffMap[i] = [] // rows
  for (let j = 0; j < widget_word_matrix[i].length; j++) {
    onOffMap[i][j] = false;   // cells
  }
}

////////////////////////////////
// CREATE WIDGET

const widget = new ListWidget();



// todo: font for small widget
console.log(widget.widgetFamily)
if (config.widgetFamily == "small" || config.widgetFamily == "medium"){
  widget_config.fontSize = 9
  widget_config.spacingBetweenLines = 1.5
  widget_config.spacingBetweenWords = 5.5
}



await setBackground();

drawWidget();

if (!(config.runsInWidget)) {
  widget.presentLarge();
}

// set next refresh time
var refreshIntervalMS = widget_config.update_full_minutes * 60 * 1000 // min>seconds>milliseconds
var refreshOffset = widget_config.offset_minutes * 60 * 1000
var refreshDate = Date.now() + refreshIntervalMS + refreshOffset;
refreshDate = refreshDate - (refreshDate % refreshIntervalMS);
widget.refreshAfterDate = new Date(refreshDate);
console.log(refreshDate);
console.log("Next Update: " + new Date(refreshDate));

Script.setWidget(widget);
Script.complete();


///////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////

/**
 * Main widget rendering function.
 * 
 * Lays out the widget as a vertical list of stacks, 
 * containing texts.
 */

function set_colors(){
  // Background Color
  if (widget_config.backgroundColorLight.length == 0) {
    widget_config.backgroundColor = [new Color(widget_config.backgroundColor[0]), new Color(widget_config.backgroundColor[1])]
  } else {
    widget_config.backgroundColor = [
      Color.dynamic(
        new Color(widget_config.backgroundColorLight[0]), 
        new Color(widget_config.backgroundColor[0])
      ), 
      Color.dynamic(
        new Color(widget_config.backgroundColorLight[1]), 
        new Color(widget_config.backgroundColor[1])
      )
    ]
  }
  // Highlight Text Color
  if (widget_config.textColorHighlightedLight == null) {
    widget_config.textColorHighlighted = new Color(widget_config.textColorHighlighted)
  } else {
    widget_config.textColorHighlighted = Color.dynamic(
        new Color(widget_config.textColorHighlightedLight), 
        new Color(widget_config.textColorHighlighted)
      )
  }
  // Background Text Color
  if (widget_config.textColorBackgroundLight == null) {
    widget_config.textColorBackground = new Color(widget_config.textColorBackground)
  } else {
    widget_config.textColorBackground = Color.dynamic(
        new Color(widget_config.textColorBackgroundLight), 
        new Color(widget_config.textColorBackground)
      )
  }
  // Text Shadow Color
  if (widget_config.textShadowHighlightedLight == null) {
    widget_config.textShadowHighlighted = new Color(widget_config.textShadowHighlighted)
  } else {
    widget_config.textShadowHighlighted = Color.dynamic(
        new Color(widget_config.textShadowHighlightedLight), 
        new Color(widget_config.textShadowHighlighted)
      )
  }
}


function drawWidget() {

  const mainStack = widget.addStack();
  mainStack.layoutVertically();
  mainStack.centerAlignContent()
  mainStack.spacing = widget_config.spacingBetweenLines;
  // mainStack.size = new Size(200, 300)

  const highlightedWords = getHighlightedWords();

  for (let i = 0; i < widget_word_matrix.length; i++) {
    const numWords = widget_word_matrix[i].length;

    const textStack = mainStack.addStack();
    textStack.layoutHorizontally();
    textStack.spacing = widget_config.spacingBetweenWords;

    for (let j = 0; j < numWords; j++) {
      
      const text = textStack.addText(widget_word_matrix[i][j]);
      text.font = new Font(widget_config.font, widget_config.fontSize);
      text.minimumScaleFactor = 0.5
      text.centerAlignText()

      if (highlightedWords[i] && highlightedWords[i][j]) {
        text.textColor = widget_config.textColorHighlighted;
        text.shadowColor = widget_config.textShadowHighlighted;
        text.shadowRadius = widget_config.textShadowHighlightedRadius;
      } else {
        text.textColor = widget_config.textColorBackground;
        text.alpha = widget_config.textAlphaBackground;
      }
    }
  }
}



//function highlightFrom(from, to)
function highlightCells(cells) {
  for (let cell_nr in cells) {
    line = cells[cell_nr][0]
    start = cells[cell_nr][1]
    end = cells[cell_nr][2]
    for (let i = start; i <= end; i++) {
      onOffMap[line][i] = true;
    }
  }
}

function onCells(cells, offset_x=0, offset_y=0) {
  for (let cell_nr in cells) {
    line = cells[cell_nr][0] + offset_y
    start = cells[cell_nr][1] + offset_x
    length = cells[cell_nr][2]

    if (length === undefined) {
      length = 0
    }
    for (let i = start; i <= (start+length); i++) {
      onOffMap[line][i] = true;
    }
  }
}

function setDotDisplayLayout(hour){
  dotMap = {
    0: [[2, 1, 2], [3, 0], [3, 4], [4, 0], [4, 3], [4, 4], [5, 0], [5, 2], [5, 4], [6, 0], [6, 1], [6, 4], [7, 0], [7, 4], [8, 1, 2]],
    1: [[2, 2], [3, 1], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 1, 2]],
    2: [[2, 1, 2], [3, 0], [3, 4], [4, 4], [5, 3], [6, 2], [7, 1], [8, 0, 4]],
    3: [[2, 0, 4], [3, 3], [4, 2], [5, 3], [6, 4], [7, 0], [7, 4], [8, 1, 2]],
    4: [[2, 3], [3, 2], [3, 3], [4, 1], [4, 3], [5, 0], [5, 3], [6, 0, 4], [7, 3], [8, 3]],
    5: [[2, 0, 4], [3, 0], [4, 0, 3], [5, 4], [6, 4], [7, 0, 0], [7, 4], [8, 1, 2]],
    6: [[2, 2, 1], [3, 1], [4, 0], [5, 0, 3], [6, 0], [6, 4], [7, 0], [7, 4], [8, 1, 2]],
    7: [[2, 0, 4], [3, 4], [4, 3], [5, 2], [6, 1], [7, 1], [8, 1]],
    8: [[2, 1, 2], [3, 0], [3, 4], [4, 0], [4, 4 ], [5, 1, 2], [6, 0], [6, 4], [7, 0], [7, 4], [8, 1, 2]],
    9: [[2, 1, 2], [3, 0], [3, 4], [4, 0], [4, 4], [5, 1, 3], [6, 4], [7, 3], [8, 1, 1]]
  }

  if (widget_config.dot_view_24) {
    hour = hour || 24
  } else {
    hour = (hour % 12) || 12;
  }

  // first digit
  onCells(dotMap[(hour - (hour % 10)) / 10], widget_config.dot_shift_xa, widget_config.dot_shift_y)
  // second digit
  onCells(dotMap[hour % 10], widget_config.dot_shift_xb, widget_config.dot_shift_y)
}

/**
 * Based on the input time, returns an array of arrays of
 * which "time" words should be highlighted.
 * 
 * This is used as a look-up when adding texts to the 
 * stack.
 */
function getHighlightedWords() {
  // get current Time
  const date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  
  // get fixed time if set in config/params
  if (widget_config.fixedTime != ""){
    console.log("actual time: " + hour + ":" + minute)
    hour = Number(widget_config.fixedTime.split(":")[0])
    minute = Number(widget_config.fixedTime.split(":")[1])
    console.log("fixed time set: " + hour + ":" + minute)
  }

  // apply offset
  minute = minute + widget_config.offset_minutes
  if (minute >= 60) {
    minute = minute % 60
    hour = hour + 1
  }

  
  if (widget_config.dot_view === true){
    setDotDisplayLayout(hour);
    return onOffMap;
  }
  
  // get minute to display
  minute = minute - (minute % 5)

  // highlight IT & IS
  onCells(time_map.i);


  // check, if special format applies
  if (typeof(time_map.c[hour]) != "undefined") {
    if (typeof(time_map.c[hour][minute]) != "undefined") {
    
      onCells(time_map.c[hour][minute]);
      return onOffMap;
    }
  }

  if (minute >= hour_display_limit) {
    hour = hour + 1;
  }

  // trim hours by 12 if needed
  if (Object.keys(time_map.e).length == 12) {
    hour = hour % 12;
  }
  else {
    hour = hour % 24;
  }

  // display minute
  onCells(time_map.d[minute]);

  // display hour
  onCells(time_map.e[hour])


  return onOffMap;
}

/**
 * Sets the background on the widget.
 * 
 * If the script/widget is running as a widget, 
 * set the background from the cache. 
 * 
 * If no background image is in the cache,
 * default to the gray gradient.
 * 
 * If running in the app, prompt the user to select a 
 * background image. Persist in cache.
 */ 
async function setBackground() {
  if (widget_config.background_image) {
    const rx_url = /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if ((rx_url.exec(widget_config.background_image)) !== null) {
      // url found > getting image from url
      const image_url = widget_config.background_image;
      var rx_file_name = /\w*(\.)\w*$/gm;
      var image_name = "wordclock_" + rx_file_name.exec(image_url)[0];
      const files = FileManager.local();
      const path = files.joinPath(
        files.documentsDirectory(), 
        image_name
      );
      console.log(path)
      const exists = files.fileExists(path);
      if (!exists || !config.runsInWidget) {
        const req = new Request(image_url)
        const img = await req[`loadImage`](image_url)
        widget.backgroundImage = img;
        files.writeImage(path, img);
      } else {
        widget.backgroundImage = files.readImage(path);
      }
    } else {
      // no url found > checking icloud
      // Determine if our image exists
      const files = FileManager.iCloud();
      const path = files.joinPath(
        files.documentsDirectory(), 
        widget_config.background_image
      );
      const exists = files.fileExists(path);

      if (exists) {
        widget.backgroundImage = files.readImage(path);
      } else {
        throw new Error("file not found: " + widget_config.background_image)
      }
    }
  } else {
    
    // COLOR BACKGROUND

    var bgColor = new LinearGradient();
    bgColor.colors = widget_config.backgroundColor
    bgColor.locations = widget_config.backgroundGradientValue;
    widget.backgroundGradient = bgColor;
  }
}



///////////////////////////////////////////////////////
// WIDGET LAYOUT / PRESENTATION
////////////////////////////////////////



// The words and map for all languages what to display on the widget.
// See: https://qlocktwo.com/us/timecheck?color=Metamorphite&controls=false&language=E2&size=600
// 

function getMatrixForLanguage(language) {
  const full_matrix = {
    DOT: {
      a: [
        ["X", "E", "S", "K", "I", "S", "C", "H", "A", "F", "U", "L", "Y"], ["T", "V", "I", "E", "R", "T", "U", "B", "F", "Z", "A", "O", "B"], ["C", "Z", "W", "A", "N", "Z", "G", "S", "I", "V", "O", "R", "E"], ["N", "A", "B", "O", "H", "A", "U", "B", "I", "E", "P", "M", "Z"], ["O", "E", "I", "S", "Z", "W", "O", "I", "S", "D", "R", "U", "M"], ["U", "V", "I", "E", "R", "I", "F", "U", "F", "I", "Q", "T", "Y"], ["B", "S", "A", "C", "H", "S", "I", "S", "I", "B", "N", "I", "A"], ["L", "A", "C", "H", "T", "I", "N", "U", "N", "I", "E", "L", "P"], ["S", "Z", "A", "N", "I", "E", "R", "B", "E", "U", "F", "I", "H"], ["D", "Z", "W", "O", "U", "F", "I", "A", "M", "U", "H", "R", "W"],["Y", "F", "I", "V", "X", "H", "L", "F", "S", "T", "E", "N", "F"]],  
    },
    NS: {
      f: "NS",
      a: [["I", "T", "L", "I", "S", "A", "S", "A", "I", "D", "K"], ["W", "H", "A", "T", "E", "V", "E", "R", "R", "P", "A"], ["A", "S", "D", "F", "L", "I", "P", "P", "I", "N", "G"], ["S", "O", "M", "E", "T", "H", "I", "N", "G", "A", "O"], ["P", "A", "S", "T", "O", "R", "U", "N", "I", "N", "E"], ["O", "N", "E", "S", "I", "X", "T", "H", "R", "E", "E"], ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"], ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"], ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"], ["T", "E", "N", "S", "E", "O'C", "L", "O", "C", "K"]],
      b: 35,
      r: {
          i: [[0, 0, 1], [0, 3, 1]],
          c: {
            0: {0: [[2, 0, 3], [3, 0], [3, 4], [4, 0], [4, 4], [5, 0, 3], [6, 0], [6, 4], [7, 0], [7, 4], [8, 0, 3], [2, 7, 2], [3, 6], [3, 10], [4, 6], [4, 10], [5, 6], [5, 10], [6, 6], [6, 10], [7, 6], [7, 10], [8, 7, 2]]},
          },
          e: {
              0: [[8, 5, 5]],
              1: [[5, 0, 2]],
              2: [[6, 8, 2]],
              3: [[5, 6, 4]],
              4: [[6, 0, 3]],
              5: [[6, 4, 3]],
              6: [[5, 3, 2]],
              7: [[8, 0, 4]],
              8: [[7, 0, 4]],
              9: [[4, 7, 3]],
              10: [[9, 0, 2]],
              11: [[7, 5, 5]]
          },
          d: {
              0: [[2, 3, 7], [9, 5, 5]],
              5: [[1, 0, 7], [9, 5, 5]],
              10: [[0, 8, 2], [4, 0, 3]],
              15: [[2, 0, 3], [4, 0, 3]],
              20: [[1, 0, 7], [4, 0, 3]],
              25: [[3, 0, 8], [4, 0, 3]],
              30: [[1, 0, 7], [4, 0, 3]],
              35: [[0, 8, 2], [4, 3, 1]],
              40: [[0, 7], [1, 2], [1, 10], [2, 0], [3, 9], [4, 1], [4, 3, 1]],
              45: [[3, 0, 8], [4, 3, 1]],
              50: [[2, 0, 3], [4, 3, 1]],
              55: [[1, 0, 7], [9, 5, 5]]
          }
      }
    },
    E3: {
      a: [["I", "T", "L", "I", "S", "A", "E", "I", "G", "H", "T"],["F", "O", "U", "R", "I", "T", "E", "N", "I", "N", "E"],["T", "W", "E", "L", "F", "E", "X", "F", "I", "V", "E"],["E", "L", "E", "V", "E", "N", "S", "E", "V", "E", "N"],["T", "W", "O", "N", "E", "U", "T", "H", "R", "E", "E"],["S", "I", "X", "P", "F", "I", "F", "T", "E", "E", "N"],["U", "P", "G", "T", "W", "E", "N", "T", "Y", "S", "K"],["U", "Z", "B", "Q", "T", "H", "I", "R", "T", "Y", "R"],["F", "O", "R", "T", "Y", "E", "F", "I", "F", "T", "Y"],["E", "T", "E", "N", "E", "O", "F", "I", "V", "E", "X"]],
      f: "E3",
      b: 60,
      r: {
          i: [[0, 0, 1], [0, 3, 1]],
          c: {},
          e: {
              0: [[2, 0, 5]],
              1: [[4, 2, 2]],
              2: [[4, 0, 2]],
              3: [[4, 6, 4]],
              4: [[1, 0, 3]],
              5: [[2, 7, 3]],
              6: [[5, 0, 2]],
              7: [[3, 6, 4]],
              8: [[0, 6, 4]],
              9: [[1, 7, 3]],
              10: [[1, 5, 2]],
              11: [[3, 0, 5]]
          },
          d: {
              0: [],
              5: [[9, 6, 3]],
              10: [[9, 1, 2]],
              15: [[5, 4, 6]],
              20: [[6, 3, 5]],
              25: [[6, 3, 5], [9, 6, 3]],
              30: [[7, 4, 5]],
              35: [[7, 4, 5], [9, 6, 3]],
              40: [[8, 0, 4]],
              45: [[8, 0, 4], [9, 6, 3]],
              50: [[8, 6, 4]],
              55: [[8, 6, 4], [9, 6, 3]]
          }
      }
    },
    CA: {
        f: "CA",
        a: [["É", "S", "Ó", "N", "R", "L", "A", "M", "U", "N", "A"], ["D", "O", "S", "L", "E", "S", "N", "T", "R", "E", "S"], ["C", "I", "N", "C", "Q", "U", "A", "R", "T", "S", "U"], ["M", "E", "N", "Y", "S", "I", "E", "C", "I", "N", "C"], ["D", "E", "D'R", "U", "N", "A", "O", "N", "Z", "E"], ["D", "U", "E", "S", "T", "R", "E", "S", "E", "T", "D"], ["Q", "U", "A", "T", "R", "E", "D", "O", "T", "Z", "E"], ["V", "U", "I", "T", "N", "O", "U", "O", "N", "Z", "E"], ["S", "I", "S", "A", "M", "D", "E", "U", "N", "P", "M"], ["M", "E", "N", "Y", "S", "I", "A", "C", "I", "N", "C"]],
        b: 10,
        r: {
            i: [],
            c: {
                0: {
                    0: [[0, 1, 2], [1, 3, 2], [6, 6, 4]],
                    10: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 0, 4], [3, 7, 3], [4, 2], [4, 4, 2]],
                    15: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [4, 2], [4, 4, 2]],
                    20: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 5], [3, 7, 3], [4, 2], [4, 4, 2]],
                    25: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 2], [4, 4, 2]],
                    30: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [4, 2], [4, 4, 2]],
                    35: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 5], [3, 7, 3], [4, 2], [4, 4, 2]],
                    40: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 2], [4, 4, 2]],
                    45: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [4, 2], [4, 4, 2]],
                    50: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 5], [3, 7, 3], [4, 2], [4, 4, 2]],
                    55: [[0, 0, 1], [0, 5, 1], [4, 4, 2], [9, 0, 4], [9, 7, 3]]
                },
                1: {0: [[0, 0, 1], [0, 5, 1], [4, 4, 2]], 5: [[0, 0, 1], [0, 5, 1], [4, 4, 2], [9, 5], [9, 7, 3]]},
                2: {0: [[0, 1, 2], [1, 3, 2], [5, 0, 3]]},
                3: {0: [[0, 1, 2], [1, 3, 2], [5, 4, 3]]},
                4: {0: [[0, 1, 2], [1, 3, 2], [6, 0, 5]], 55: [[0, 1, 2], [1, 3, 2], [3, 7, 3], [9, 0, 4], [9, 7, 3]]},
                5: {0: [[0, 1, 2], [1, 3, 2], [9, 7, 3]], 5: [[0, 1, 2], [1, 3, 2], [3, 7, 3], [9, 5], [9, 7, 3]]},
                6: {0: [[0, 1, 2], [1, 3, 2], [8, 0, 2]]},
                7: {0: [[0, 1, 2], [1, 3, 2], [5, 7, 2]]},
                8: {0: [[0, 1, 2], [1, 3, 2], [7, 0, 3]]},
                9: {0: [[0, 1, 2], [1, 3, 2], [7, 4, 2]]},
                10: {
                    0: [[0, 1, 2], [1, 3, 2], [8, 5, 2]],
                    10: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 0, 4], [3, 7, 3], [4, 2], [4, 7, 3]],
                    15: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [4, 2], [4, 7, 3]],
                    20: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 5], [3, 7, 3], [4, 2], [4, 7, 3]],
                    25: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 2], [4, 7, 3]],
                    30: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [4, 2], [4, 7, 3]],
                    35: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 5], [3, 7, 3], [4, 2], [4, 7, 3]],
                    40: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 2], [4, 7, 3]],
                    45: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [4, 2], [4, 7, 3]],
                    50: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 5], [3, 7, 3], [4, 2], [4, 7, 3]]
                },
                11: {0: [[0, 1, 2], [1, 3, 2], [4, 7, 3]]}
            },
            e: {
                0: [[6, 6, 4]],
                1: [[4, 4, 2]],
                2: [[5, 0, 3]],
                3: [[5, 4, 3]],
                4: [[6, 0, 5]],
                5: [[9, 7, 3]],
                6: [[8, 0, 2]],
                7: [[5, 7, 2]],
                8: [[7, 0, 3]],
                9: [[7, 4, 2]],
                10: [[8, 5, 2]],
                11: [[4, 7, 3]]
            },
            d: {
                5: [[0, 1, 2], [1, 3, 2], [9, 5], [9, 7, 3]],
                10: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 0, 4], [3, 7, 3], [4, 0, 1]],
                15: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [4, 0, 1]],
                20: [[0, 0, 1], [0, 8, 1], [2, 4, 4], [3, 5], [3, 7, 3], [4, 0, 1]],
                25: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 0, 1]],
                30: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [4, 0, 1]],
                35: [[0, 1, 2], [1, 0, 2], [2, 4, 5], [3, 5], [3, 7, 3], [4, 0, 1]],
                40: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 0, 4], [3, 7, 3], [4, 0, 1]],
                45: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [4, 0, 1]],
                50: [[0, 1, 2], [1, 7, 3], [2, 4, 5], [3, 5], [3, 7, 3], [4, 0, 1]],
                55: [[0, 1, 2], [1, 3, 2], [9, 0, 4], [9, 7, 3]]
            }
        }
    },
    CH: {
        f: "CH",
        a: [["E", "S", "K", "I", "S", "C", "H", "A", "F", "Ü", "F"], ["V", "I", "E", "R", "T", "U", "B", "F", "Z", "Ä", "Ä"], ["Z", "W", "Ä", "N", "Z", "G", "S", "I", "V", "O", "R"], ["A", "B", "O", "H", "A", "U", "B", "I", "E", "P", "M"], ["E", "I", "S", "Z", "W", "Ö", "I", "S", "D", "R", "Ü"], ["V", "I", "E", "R", "I", "F", "Ü", "F", "I", "Q", "T"], ["S", "Ä", "C", "H", "S", "I", "S", "I", "B", "N", "I"], ["A", "C", "H", "T", "I", "N", "Ü", "N", "I", "E", "L"], ["Z", "Ä", "N", "I", "E", "R", "B", "E", "U", "F", "I"], ["Z", "W", "Ö", "U", "F", "I", "A", "M", "U", "H", "R"]],
        b: 25,
        r: {
            i: [[0, 0, 1], [0, 3, 3]],
            c: {},
            e: {
                0: [[9, 0, 5]],
                1: [[4, 0, 2]],
                2: [[4, 3, 3]],
                3: [[4, 8, 2]],
                4: [[5, 0, 4]],
                5: [[5, 5, 3]],
                6: [[6, 0, 5]],
                7: [[6, 6, 4]],
                8: [[7, 0, 4]],
                9: [[7, 5, 3]],
                10: [[8, 0, 3]],
                11: [[8, 7, 3]]
            },
            d: {
                5: [[0, 8, 2], [3, 0, 1]],
                10: [[1, 8, 2], [3, 0, 1]],
                15: [[1, 0, 5], [3, 0, 1]],
                20: [[2, 0, 5], [3, 0, 1]],
                25: [[0, 8, 2], [2, 8, 2], [3, 3, 4]],
                30: [[3, 3, 4]],
                35: [[0, 8, 2], [3, 0, 1], [3, 3, 4]],
                40: [[2, 0, 5], [2, 8, 2]],
                45: [[1, 0, 5], [2, 8, 2]],
                50: [[1, 8, 2], [2, 8, 2]],
                55: [[0, 8, 2], [2, 8, 2]]
            }
        }
    },
    CS: {
        a: [["现", "在", "是", "时", "间", "昼", "上", "午", "下", "午", "夜"], ["十", "一", "点", "半", "四", "点", "五", "点", "半", "六", "八"], ["七", "点", "半", "一", "九", "点", "半", "四", "十", "五", "分"], ["四", "十", "分", "三", "十", "五", "分", "零", "五", "分", "七"], ["六", "二", "十", "五", "分", "二", "十", "分", "五", "十", "分"], ["五", "三", "点", "半", "六", "点", "十", "二", "点", "半", "点"], ["十", "点", "八", "点", "三", "十", "分", "一", "零", "五", "分"], ["六", "三", "五", "十", "五", "分", "二", "十", "五", "分", "整"], ["三", "四", "十", "五", "分", "五", "十", "分", "二", "十", "分"], ["二", "十", "分", "八", "四", "十", "分", "三", "十", "五", "分"]],
        b: 80,
        r: {
            i: [[0, 0, 1], [0, 3, 1]],
            c: {
                0: {
                    0: [[0, 9, 1], [5, 6, 2]],
                    5: [[0, 9, 1], [5, 6, 2], [6, 8, 2]],
                    10: [[0, 9, 1], [5, 6, 2], [8, 9, 1]],
                    15: [[0, 9, 1], [5, 6, 2], [7, 7, 2]],
                    20: [[0, 9, 1], [5, 6, 2], [8, 8, 2]],
                    25: [[0, 9, 1], [5, 6, 2], [7, 6, 3]],
                    30: [[0, 9, 1], [5, 6, 3]],
                    35: [[0, 9, 1], [5, 6, 2], [9, 7, 3]],
                    40: [[0, 9, 1], [5, 6, 2], [9, 4, 2]],
                    45: [[0, 9, 1], [5, 6, 2], [8, 1, 3]],
                    50: [[0, 9, 1], [5, 6, 2], [8, 5, 2]],
                    55: [[0, 9, 1], [5, 6, 2], [7, 2, 3]]
                },
                1: {30: [[0, 6, 1], [1, 1, 2]]},
                2: {
                    0: [[0, 6, 1], [5, 7, 1]],
                    5: [[0, 6, 1], [5, 7, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 7, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 7, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 7, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 7, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 7, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [5, 7, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 7, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 7, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 7, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 7, 1], [7, 2, 3]]
                },
                3: {
                    0: [[0, 6, 1], [5, 1, 1]],
                    5: [[0, 6, 1], [5, 1, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 1, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 1, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 1, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 1, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 1, 2]],
                    35: [[0, 6, 1], [5, 1, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 1, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 1, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 1, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 1, 1], [7, 2, 3]]
                },
                4: {30: [[0, 6, 1], [1, 4, 1], [6, 4, 2]]},
                5: {30: [[0, 6, 1], [1, 6, 2]]},
                6: {
                    0: [[0, 6, 1], [5, 4, 1]],
                    5: [[0, 6, 1], [5, 4, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 4, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 4, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 4, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 4, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 4, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [5, 4, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 4, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 4, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 4, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 4, 1], [7, 2, 3]]
                },
                7: {30: [[0, 6, 1], [2, 0, 2]]},
                8: {
                    0: [[0, 6, 1], [6, 2, 1]],
                    5: [[0, 6, 1], [6, 2, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [6, 2, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [6, 2, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [6, 2, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [6, 2, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [6, 2, 4]],
                    35: [[0, 6, 1], [6, 2, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [6, 2, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [6, 2, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [6, 2, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [6, 2, 1], [7, 2, 3]]
                },
                9: {30: [[0, 6, 1], [2, 4, 2]]},
                10: {
                    0: [[0, 6, 1], [6, 0, 1]],
                    5: [[0, 6, 1], [6, 0, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [6, 0, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [6, 0, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [6, 0, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [6, 0, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [6, 0, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [6, 0, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [6, 0, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [6, 0, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [6, 0, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [6, 0, 1], [7, 2, 3]]
                },
                11: {30: [[0, 6, 1], [1, 0, 3]]},
                12: {
                    0: [[0, 8, 1], [5, 6, 2]],
                    5: [[0, 8, 1], [5, 6, 2], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 6, 2], [8, 9, 1]],
                    15: [[0, 8, 1], [5, 6, 2], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 6, 2], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 6, 2], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 6, 3]],
                    35: [[0, 8, 1], [5, 6, 2], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 6, 2], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 6, 2], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 6, 2], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 6, 2], [7, 2, 3]]
                },
                13: {30: [[0, 8, 1], [1, 1, 2]]},
                14: {
                    0: [[0, 8, 1], [5, 7, 1]],
                    5: [[0, 8, 1], [5, 7, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 7, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 7, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 7, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 7, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 7, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [5, 7, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 7, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 7, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 7, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 7, 1], [7, 2, 3]]
                },
                15: {
                    0: [[0, 8, 1], [5, 1, 1]],
                    5: [[0, 8, 1], [5, 1, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 1, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 1, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 1, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 1, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 1, 2]],
                    35: [[0, 8, 1], [5, 1, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 1, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 1, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 1, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 1, 1], [7, 2, 3]]
                },
                16: {30: [[0, 8, 1], [1, 4, 1], [6, 4, 2]]},
                17: {30: [[0, 8, 1], [1, 6, 2]]},
                18: {
                    0: [[0, 8, 1], [5, 4, 1]],
                    5: [[0, 8, 1], [5, 4, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 4, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 4, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 4, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 4, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 4, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [5, 4, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 4, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 4, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 4, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 4, 1], [7, 2, 3]]
                },
                19: {30: [[0, 8, 1], [2, 0, 2]]},
                20: {
                    0: [[0, 8, 1], [6, 2, 1]],
                    5: [[0, 8, 1], [6, 2, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [6, 2, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [6, 2, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [6, 2, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [6, 2, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [6, 2, 4]],
                    35: [[0, 8, 1], [6, 2, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [6, 2, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [6, 2, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [6, 2, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [6, 2, 1], [7, 2, 3]]
                },
                21: {30: [[0, 8, 1], [2, 4, 2]]},
                22: {
                    0: [[0, 8, 1], [6, 0, 1]],
                    5: [[0, 8, 1], [6, 0, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [6, 0, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [6, 0, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [6, 0, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [6, 0, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [6, 0, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [6, 0, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [6, 0, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [6, 0, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [6, 0, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [6, 0, 1], [7, 2, 3]]
                },
                23: {30: [[0, 8, 1], [1, 0, 3]]}
            },
            e: {
                0: [[0, 9, 1], [5, 6, 2]],
                1: [[0, 6, 1], [1, 1, 1]],
                2: [[0, 6, 1], [5, 7, 1]],
                3: [[0, 6, 1], [5, 1, 1]],
                4: [[0, 6, 1], [1, 4, 1]],
                5: [[0, 6, 1], [1, 6, 1]],
                6: [[0, 6, 1], [5, 4, 1]],
                7: [[0, 6, 1], [2, 0, 1]],
                8: [[0, 6, 1], [6, 2, 1]],
                9: [[0, 6, 1], [2, 4, 1]],
                10: [[0, 6, 1], [6, 0, 1]],
                11: [[0, 6, 1], [1, 0, 2]],
                12: [[0, 8, 1], [5, 6, 2]],
                13: [[0, 8, 1], [1, 1, 1]],
                14: [[0, 8, 1], [5, 7, 1]],
                15: [[0, 8, 1], [5, 1, 1]],
                16: [[0, 8, 1], [1, 4, 1]],
                17: [[0, 8, 1], [1, 6, 1]],
                18: [[0, 8, 1], [5, 4, 1]],
                19: [[0, 8, 1], [2, 0, 1]],
                20: [[0, 8, 1], [6, 2, 1]],
                21: [[0, 8, 1], [2, 4, 1]],
                22: [[0, 8, 1], [6, 0, 1]],
                23: [[0, 8, 1], [1, 0, 2]]
            },
            d: {5: [[3, 7, 2]], 10: [[3, 1, 1]], 15: [[3, 4, 2]], 20: [[4, 5, 2]], 25: [[4, 1, 3]], 35: [[3, 3, 3]], 40: [[3, 0, 2]], 45: [[2, 7, 3]], 50: [[4, 8, 2]], 55: [[7, 2, 3]]}
        }
    },
    CT: {
        f: "CT",
        a: [["現", "在", "是", "時", "間", "晝", "上", "午", "下", "午", "夜"], ["十", "一", "點", "半", "四", "點", "五", "點", "半", "六", "八"], ["七", "點", "半", "一", "九", "點", "半", "四", "十", "五", "分"], ["四", "十", "分", "三", "十", "五", "分", "零", "五", "分", "七"], ["六", "二", "十", "五", "分", "二", "十", "分", "五", "十", "分"], ["五", "三", "點", "半", "六", "點", "十", "二", "點", "半", "點"], ["十", "點", "八", "點", "三", "十", "分", "一", "零", "五", "分"], ["六", "三", "五", "十", "五", "分", "二", "十", "五", "分", "整"], ["三", "四", "十", "五", "分", "五", "十", "分", "二", "十", "分"], ["二", "十", "分", "八", "四", "十", "分", "三", "十", "五", "分"]],
        G: 80,
        r: {
            i: [[0, 0, 1], [0, 3, 1]],
            c: {
                0: {
                    0: [[0, 9, 1], [5, 6, 2]],
                    5: [[0, 9, 1], [5, 6, 2], [6, 8, 2]],
                    10: [[0, 9, 1], [5, 6, 2], [8, 9, 1]],
                    15: [[0, 9, 1], [5, 6, 2], [7, 7, 2]],
                    20: [[0, 9, 1], [5, 6, 2], [8, 8, 2]],
                    25: [[0, 9, 1], [5, 6, 2], [7, 6, 3]],
                    30: [[0, 9, 1], [5, 6, 3]],
                    35: [[0, 9, 1], [5, 6, 2], [9, 7, 3]],
                    40: [[0, 9, 1], [5, 6, 2], [9, 4, 2]],
                    45: [[0, 9, 1], [5, 6, 2], [8, 1, 3]],
                    50: [[0, 9, 1], [5, 6, 2], [8, 5, 2]],
                    55: [[0, 9, 1], [5, 6, 2], [7, 2, 3]]
                },
                1: {30: [[0, 6, 1], [1, 1, 2]]},
                2: {
                    0: [[0, 6, 1], [5, 7, 1]],
                    5: [[0, 6, 1], [5, 7, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 7, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 7, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 7, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 7, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 7, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [5, 7, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 7, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 7, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 7, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 7, 1], [7, 2, 3]]
                },
                3: {
                    0: [[0, 6, 1], [5, 1, 1]],
                    5: [[0, 6, 1], [5, 1, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 1, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 1, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 1, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 1, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 1, 2]],
                    35: [[0, 6, 1], [5, 1, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 1, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 1, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 1, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 1, 1], [7, 2, 3]]
                },
                4: {30: [[0, 6, 1], [1, 4, 1], [6, 4, 2]]},
                5: {30: [[0, 6, 1], [1, 6, 2]]},
                6: {
                    0: [[0, 6, 1], [5, 4, 1]],
                    5: [[0, 6, 1], [5, 4, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [5, 4, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [5, 4, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [5, 4, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [5, 4, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [5, 4, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [5, 4, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [5, 4, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [5, 4, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [5, 4, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [5, 4, 1], [7, 2, 3]]
                },
                7: {30: [[0, 6, 1], [2, 0, 2]]},
                8: {
                    0: [[0, 6, 1], [6, 2, 1]],
                    5: [[0, 6, 1], [6, 2, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [6, 2, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [6, 2, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [6, 2, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [6, 2, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [6, 2, 4]],
                    35: [[0, 6, 1], [6, 2, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [6, 2, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [6, 2, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [6, 2, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [6, 2, 1], [7, 2, 3]]
                },
                9: {30: [[0, 6, 1], [2, 4, 2]]},
                10: {
                    0: [[0, 6, 1], [6, 0, 1]],
                    5: [[0, 6, 1], [6, 0, 1], [6, 8, 2]],
                    10: [[0, 6, 1], [6, 0, 1], [6, 5, 1]],
                    15: [[0, 6, 1], [6, 0, 1], [7, 7, 2]],
                    20: [[0, 6, 1], [6, 0, 1], [8, 8, 2]],
                    25: [[0, 6, 1], [6, 0, 1], [7, 6, 3]],
                    30: [[0, 6, 1], [6, 0, 1], [6, 4, 2]],
                    35: [[0, 6, 1], [6, 0, 1], [9, 7, 3]],
                    40: [[0, 6, 1], [6, 0, 1], [9, 4, 2]],
                    45: [[0, 6, 1], [6, 0, 1], [8, 1, 3]],
                    50: [[0, 6, 1], [6, 0, 1], [8, 5, 2]],
                    55: [[0, 6, 1], [6, 0, 1], [7, 2, 3]]
                },
                11: {30: [[0, 6, 1], [1, 0, 3]]},
                12: {
                    0: [[0, 8, 1], [5, 6, 2]],
                    5: [[0, 8, 1], [5, 6, 2], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 6, 2], [8, 9, 1]],
                    15: [[0, 8, 1], [5, 6, 2], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 6, 2], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 6, 2], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 6, 3]],
                    35: [[0, 8, 1], [5, 6, 2], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 6, 2], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 6, 2], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 6, 2], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 6, 2], [7, 2, 3]]
                },
                13: {30: [[0, 8, 1], [1, 1, 2]]},
                14: {
                    0: [[0, 8, 1], [5, 7, 1]],
                    5: [[0, 8, 1], [5, 7, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 7, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 7, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 7, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 7, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 7, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [5, 7, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 7, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 7, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 7, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 7, 1], [7, 2, 3]]
                },
                15: {
                    0: [[0, 8, 1], [5, 1, 1]],
                    5: [[0, 8, 1], [5, 1, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 1, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 1, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 1, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 1, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 1, 2]],
                    35: [[0, 8, 1], [5, 1, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 1, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 1, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 1, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 1, 1], [7, 2, 3]]
                },
                16: {30: [[0, 8, 1], [1, 4, 1], [6, 4, 2]]},
                17: {30: [[0, 8, 1], [1, 6, 2]]},
                18: {
                    0: [[0, 8, 1], [5, 4, 1]],
                    5: [[0, 8, 1], [5, 4, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [5, 4, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [5, 4, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [5, 4, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [5, 4, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [5, 4, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [5, 4, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [5, 4, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [5, 4, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [5, 4, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [5, 4, 1], [7, 2, 3]]
                },
                19: {30: [[0, 8, 1], [2, 0, 2]]},
                20: {
                    0: [[0, 8, 1], [6, 2, 1]],
                    5: [[0, 8, 1], [6, 2, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [6, 2, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [6, 2, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [6, 2, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [6, 2, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [6, 2, 4]],
                    35: [[0, 8, 1], [6, 2, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [6, 2, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [6, 2, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [6, 2, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [6, 2, 1], [7, 2, 3]]
                },
                21: {30: [[0, 8, 1], [2, 4, 2]]},
                22: {
                    0: [[0, 8, 1], [6, 0, 1]],
                    5: [[0, 8, 1], [6, 0, 1], [6, 8, 2]],
                    10: [[0, 8, 1], [6, 0, 1], [6, 5, 1]],
                    15: [[0, 8, 1], [6, 0, 1], [7, 7, 2]],
                    20: [[0, 8, 1], [6, 0, 1], [8, 8, 2]],
                    25: [[0, 8, 1], [6, 0, 1], [7, 6, 3]],
                    30: [[0, 8, 1], [6, 0, 1], [6, 4, 2]],
                    35: [[0, 8, 1], [6, 0, 1], [9, 7, 3]],
                    40: [[0, 8, 1], [6, 0, 1], [9, 4, 2]],
                    45: [[0, 8, 1], [6, 0, 1], [8, 1, 3]],
                    50: [[0, 8, 1], [6, 0, 1], [8, 5, 2]],
                    55: [[0, 8, 1], [6, 0, 1], [7, 2, 3]]
                },
                23: {30: [[0, 8, 1], [1, 0, 3]]}
            },
            e: {
                0: [[0, 9, 1], [5, 6, 2]],
                1: [[0, 6, 1], [1, 1, 1]],
                2: [[0, 6, 1], [5, 7, 1]],
                3: [[0, 6, 1], [5, 1, 1]],
                4: [[0, 6, 1], [1, 4, 1]],
                5: [[0, 6, 1], [1, 6, 1]],
                6: [[0, 6, 1], [5, 4, 1]],
                7: [[0, 6, 1], [2, 0, 1]],
                8: [[0, 6, 1], [6, 2, 1]],
                9: [[0, 6, 1], [2, 4, 1]],
                10: [[0, 6, 1], [6, 0, 1]],
                11: [[0, 6, 1], [1, 0, 2]],
                12: [[0, 8, 1], [5, 6, 2]],
                13: [[0, 8, 1], [1, 1, 1]],
                14: [[0, 8, 1], [5, 7, 1]],
                15: [[0, 8, 1], [5, 1, 1]],
                16: [[0, 8, 1], [1, 4, 1]],
                17: [[0, 8, 1], [1, 6, 1]],
                18: [[0, 8, 1], [5, 4, 1]],
                19: [[0, 8, 1], [2, 0, 1]],
                20: [[0, 8, 1], [6, 2, 1]],
                21: [[0, 8, 1], [2, 4, 1]],
                22: [[0, 8, 1], [6, 0, 1]],
                23: [[0, 8, 1], [1, 0, 2]]
            },
            d: {5: [[3, 7, 2]], 10: [[3, 1, 1]], 15: [[3, 4, 2]], 20: [[4, 5, 2]], 25: [[4, 1, 3]], 35: [[3, 3, 3]], 40: [[3, 0, 2]], 45: [[2, 7, 3]], 50: [[4, 8, 2]], 55: [[7, 2, 3]]}
        }
    },
    CZ: {
        f: "CZ",
        a: [["J", "E", "J", "S", "O", "U", "J", "E", "D", "N", "A"], ["D", "E", "V", "Ě", "T", "P", "Ě", "T", "D", "V", "Ě"], ["S", "E", "D", "M", "D", "V", "A", "N", "Á", "C", "T"], ["D", "E", "S", "E", "T", "Ř", "I", "Š", "E", "S", "T"], ["O", "S", "M", "J", "E", "D", "E", "N", "Á", "C", "T"], ["Č", "T", "Y", "Ř", "I", "A", "D", "E", "S", "E", "T"], ["D", "V", "A", "C", "E", "T", "Ř", "I", "C", "E", "T"], ["P", "A", "T", "N", "Á", "C", "T", "N", "U", "L", "A"], ["N", "E", "Č", "T", "Y", "Ř", "I", "C", "E", "T", "E"], ["P", "A", "D", "E", "S", "Á", "T", "D", "P", "Ě", "T"]],
        b: 80,
        r: {
            i: [],
            c: {},
            e: {
                0: [[0, 0, 1], [2, 4, 6]],
                1: [[0, 0, 1], [0, 6, 4]],
                2: [[0, 2, 3], [1, 8, 2]],
                3: [[0, 2, 3], [3, 4, 2]],
                4: [[0, 2, 3], [5, 0, 4]],
                5: [[0, 0, 1], [1, 5, 2]],
                6: [[0, 0, 1], [3, 7, 3]],
                7: [[0, 0, 1], [2, 0, 3]],
                8: [[0, 0, 1], [4, 0, 2]],
                9: [[0, 0, 1], [1, 0, 4]],
                10: [[0, 0, 1], [3, 0, 4]],
                11: [[0, 0, 1], [4, 3, 7]]
            },
            d: {
                5: [[7, 7, 3], [9, 8, 2]],
                10: [[5, 6, 4]],
                15: [[7, 0, 6]],
                20: [[6, 0, 5]],
                25: [[6, 0, 5], [9, 8, 2]],
                30: [[6, 5, 5]],
                35: [[6, 5, 5], [9, 8, 2]],
                40: [[8, 2, 7]],
                45: [[8, 2, 7], [9, 8, 2]],
                50: [[9, 0, 6]],
                55: [[9, 0, 6], [9, 8, 2]]
            }
        }
    },
    D2: {
        a: [["E", "S", "K", "I", "S", "T", "A", "F", "Ü", "N", "F"], ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"], ["D", "R", "E", "I", "V", "I", "E", "R", "T", "E", "L"], ["V", "O", "R", "F", "U", "N", "K", "N", "A", "C", "H"], ["H", "A", "L", "B", "A", "E", "L", "F", "Ü", "N", "F"], ["E", "I", "N", "S", "X", "A", "M", "Z", "W", "E", "I"], ["D", "R", "E", "I", "P", "M", "J", "V", "I", "E", "R"], ["S", "E", "C", "H", "S", "N", "L", "A", "C", "H", "T"], ["S", "I", "E", "B", "E", "N", "Z", "W", "Ö", "L", "F"], ["Z", "E", "H", "N", "E", "U", "N", "K", "U", "H", "R"]],
        b: 20,
        r: {
            i: [[0, 0, 1], [0, 3, 2]],
            c: {1: {0: [[5, 0, 2], [9, 8, 2]]}},
            e: {
                0: [[8, 6, 4]],
                1: [[5, 0, 3]],
                2: [[5, 7, 3]],
                3: [[6, 0, 3]],
                4: [[6, 7, 3]],
                5: [[4, 7, 3]],
                6: [[7, 0, 4]],
                7: [[8, 0, 5]],
                8: [[7, 7, 3]],
                9: [[9, 3, 3]],
                10: [[9, 0, 3]],
                11: [[4, 5, 2]]
            },
            d: {
                0: [[9, 8, 2]],
                5: [[0, 7, 3], [3, 7, 3]],
                10: [[1, 0, 3], [3, 7, 3]],
                15: [[2, 4, 6], [3, 7, 3]],
                20: [[1, 0, 3], [3, 0, 2], [4, 0, 3]],
                25: [[0, 7, 3], [3, 0, 2], [4, 0, 3]],
                30: [[4, 0, 3]],
                35: [[0, 7, 3], [3, 7, 3], [4, 0, 3]],
                40: [[1, 0, 3], [3, 7, 3], [4, 0, 3]],
                45: [[2, 0, 10]],
                50: [[1, 0, 3], [3, 0, 2]],
                55: [[0, 7, 3], [3, 0, 2]]
            }
        }
    },
    D3: {
        a: [["E", "S", "K", "I", "S", "C", "H", "F", "U", "N", "K"], ["D", "R", "E", "I", "V", "I", "E", "R", "T", "L", "A"], ["Z", "E", "H", "N", "B", "I", "E", "F", "Ü", "N", "F"], ["N", "A", "C", "H", "G", "E", "R", "T", "V", "O", "R"], ["H", "A", "L", "B", "X", "F", "Ü", "N", "F", "E", "I"], ["O", "I", "S", "E", "C", "H", "S", "E", "L", "F", "E"], ["Z", "W", "O", "I", "E", "A", "C", "H", "T", "E", "D"], ["D", "R", "E", "I", "E", "Z", "W", "Ö", "L", "F", "E"], ["Z", "E", "H", "N", "E", "U", "N", "E", "U", "H", "L"], ["S", "I", "E", "B", "N", "E", "V", "I", "E", "R", "E"]],
        b: 15,
        r: {
            i: [[0, 0, 1], [0, 3, 3]],
            c: {},
            e: {
                0: [[7, 5, 5]],
                1: [[5, 0, 3]],
                2: [[6, 0, 4]],
                3: [[7, 0, 4]],
                4: [[9, 6, 4]],
                5: [[4, 5, 4]],
                6: [[5, 2, 5]],
                7: [[9, 0, 5]],
                8: [[6, 5, 4]],
                9: [[8, 3, 4]],
                10: [[8, 0, 4]],
                11: [[5, 7, 3]]
            },
            d: {
                5: [[2, 7, 3], [3, 0, 3]],
                10: [[2, 0, 3], [3, 0, 3]],
                15: [[1, 4, 5]],
                20: [[2, 0, 3], [3, 8, 2], [4, 0, 3]],
                25: [[2, 7, 3], [3, 8, 2], [4, 0, 3]],
                30: [[4, 0, 3]],
                35: [[2, 7, 3], [3, 0, 3], [4, 0, 3]],
                40: [[2, 0, 3], [3, 0, 3], [4, 0, 3]],
                45: [[1, 0, 9]],
                50: [[2, 0, 3], [3, 8, 2]],
                55: [[2, 7, 3], [3, 8, 2]]
            }
        }
    },
    D4: {
        a: [["E", "S", "K", "I", "S", "T", "A", "F", "Ü", "N", "F"], ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"], ["D", "R", "E", "I", "V", "I", "E", "R", "T", "E", "L"], ["V", "O", "R", "F", "U", "N", "K", "N", "A", "C", "H"], ["H", "A", "L", "B", "A", "E", "L", "F", "Ü", "N", "F"], ["E", "I", "N", "S", "X", "A", "M", "Z", "W", "E", "I"], ["D", "R", "E", "I", "P", "M", "J", "V", "I", "E", "R"], ["S", "E", "C", "H", "S", "N", "L", "A", "C", "H", "T"], ["S", "I", "E", "B", "E", "N", "Z", "W", "Ö", "L", "F"], ["Z", "E", "H", "N", "E", "U", "N", "K", "U", "H", "R"]],
        id: "D4",
        b: 15,
        r: {
            i: [[0, 0, 1], [0, 3, 2]],
            c: {1: {0: [[5, 0, 2], [9, 8, 2]]}},
            e: {
                0: [[8, 6, 4]],
                1: [[5, 0, 3]],
                2: [[5, 7, 3]],
                3: [[6, 0, 3]],
                4: [[6, 7, 3]],
                5: [[4, 7, 3]],
                6: [[7, 0, 4]],
                7: [[8, 0, 5]],
                8: [[7, 7, 3]],
                9: [[9, 3, 3]],
                10: [[9, 0, 3]],
                11: [[4, 5, 2]]
            },
            d: {
                0: [[9, 8, 2]],
                5: [[0, 7, 3], [3, 7, 3]],
                10: [[1, 0, 3], [3, 7, 3]],
                15: [[2, 4, 6]],
                20: [[1, 0, 3], [3, 0, 2], [4, 0, 3]],
                25: [[0, 7, 3], [3, 0, 2], [4, 0, 3]],
                30: [[4, 0, 3]],
                35: [[0, 7, 3], [3, 7, 3], [4, 0, 3]],
                40: [[1, 0, 3], [3, 7, 3], [4, 0, 3]],
                45: [[2, 0, 10]],
                50: [[1, 0, 3], [3, 0, 2]],
                55: [[0, 7, 3], [3, 0, 2]]
            }
        }
    },
    DE: {
        f: "DE",
        a: [["E", "S", "K", "I", "S", "T", "A", "F", "Ü", "N", "F"], ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"], ["D", "R", "E", "I", "V", "I", "E", "R", "T", "E", "L"], ["V", "O", "R", "F", "U", "N", "K", "N", "A", "C", "H"], ["H", "A", "L", "B", "A", "E", "L", "F", "Ü", "N", "F"], ["E", "I", "N", "S", "X", "A", "M", "Z", "W", "E", "I"], ["D", "R", "E", "I", "P", "M", "J", "V", "I", "E", "R"], ["S", "E", "C", "H", "S", "N", "L", "A", "C", "H", "T"], ["S", "I", "E", "B", "E", "N", "Z", "W", "Ö", "L", "F"], ["Z", "E", "H", "N", "E", "U", "N", "K", "U", "H", "R"]],
        b: 25,
        r: {
            i: [[0, 0, 1], [0, 3, 2]],
            c: {1: {0: [[5, 0, 2], [9, 8, 2]]}, 13: {0: [[5, 0, 2], [9, 8, 2]]}},
            e: {
                0: [[8, 6, 4]],
                1: [[5, 0, 3]],
                2: [[5, 7, 3]],
                3: [[6, 0, 3]],
                4: [[6, 7, 3]],
                5: [[4, 7, 3]],
                6: [[7, 0, 4]],
                7: [[8, 0, 5]],
                8: [[7, 7, 3]],
                9: [[9, 3, 3]],
                10: [[9, 0, 3]],
                11: [[4, 5, 2]]
            },
            d: {
                0: [[9, 8, 2]],
                5: [[0, 7, 3], [3, 7, 3]],
                10: [[1, 0, 3], [3, 7, 3]],
                15: [[2, 4, 6], [3, 7, 3]],
                20: [[1, 4, 6], [3, 7, 3]],
                25: [[0, 7, 3], [3, 0, 2], [4, 0, 3]],
                30: [[4, 0, 3]],
                35: [[0, 7, 3], [3, 7, 3], [4, 0, 3]],
                40: [[1, 4, 6], [3, 0, 2]],
                45: [[2, 4, 6], [3, 0, 2]],
                50: [[1, 0, 3], [3, 0, 2]],
                55: [[0, 7, 3], [3, 0, 2]]
            }
        }
    },
    DK: {
        f: "DK",
        a: [["K", "L", "O", "K", "K", "E", "N", "V", "E", "R", "O"], ["F", "E", "M", "T", "Y", "V", "E", "S", "K", "A", "M"], ["O", "J", "E", "K", "V", "A", "R", "T", "V", "A", "T"], ["T", "I", "A", "M", "I", "N", "U", "T", "T", "E", "R"], ["V", "E", "M", "O", "V", "E", "R", "I", "L", "P", "M"], ["M", "O", "N", "A", "L", "I", "S", "H", "A", "L", "V"], ["E", "T", "T", "O", "T", "R", "E", "F", "I", "R", "E"], ["F", "E", "M", "S", "E", "K", "S", "R", "S", "Y", "V"], ["O", "T", "T", "E", "R", "N", "I", "M", "E", "T", "I"], ["E", "L", "L", "E", "V", "E", "A", "T", "O", "L", "V"]],
        b: 25,
        r: {
            i: [[0, 0, 6], [0, 8, 1]],
            c: {},
            e: {
                0: [[9, 7, 3]],
                1: [[6, 0, 1]],
                2: [[6, 2, 1]],
                3: [[6, 4, 2]],
                4: [[6, 7, 3]],
                5: [[7, 0, 2]],
                6: [[7, 3, 3]],
                7: [[7, 8, 2]],
                8: [[8, 0, 3]],
                9: [[8, 5, 1]],
                10: [[8, 9, 1]],
                11: [[9, 0, 5]]
            },
            d: {
                5: [[1, 0, 2], [3, 3, 7], [4, 3, 3]],
                10: [[3, 0, 1], [3, 3, 7], [4, 3, 3]],
                15: [[2, 3, 4], [4, 3, 3]],
                20: [[1, 3, 3], [3, 3, 7], [4, 3, 3]],
                25: [[1, 0, 2], [3, 3, 7], [5, 5], [5, 7, 3]],
                30: [[5, 7, 3]],
                35: [[1, 0, 2], [3, 3, 7], [4, 3, 3], [5, 7, 3]],
                40: [[1, 3, 3], [3, 3, 7], [5, 5]],
                45: [[2, 3, 4], [5, 5]],
                50: [[3, 0, 1], [3, 3, 7], [5, 5]],
                55: [[1, 0, 2], [3, 3, 7], [5, 5]]
            }
        }
    },
    E2: {
        a: [["I", "T", "L", "I", "S", "A", "S", "A", "M", "P", "M"], ["A", "C", "Q", "U", "A", "R", "T", "E", "R", "D", "C"], ["T", "W", "E", "N", "T", "Y", "F", "I", "V", "E", "X"], ["H", "A", "L", "F", "S", "T", "E", "N", "F", "T", "O"], ["P", "A", "S", "T", "E", "R", "U", "N", "I", "N", "E"], ["O", "N", "E", "S", "I", "X", "T", "H", "R", "E", "E"], ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"], ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"], ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"], ["T", "E", "N", "S", "E", "O'C", "L", "O", "C", "K"]],
        f: "E2",
        b: 35,
        r: {
            i: [[0, 0, 1], [0, 3, 1]],
            c: {},
            e: {
                0: [[8, 5, 5]],
                1: [[5, 0, 2]],
                2: [[6, 8, 2]],
                3: [[5, 6, 4]],
                4: [[6, 0, 3]],
                5: [[6, 4, 3]],
                6: [[5, 3, 2]],
                7: [[8, 0, 4]],
                8: [[7, 0, 4]],
                9: [[4, 7, 3]],
                10: [[9, 0, 2]],
                11: [[7, 5, 5]]
            },
            d: {
                0: [[9, 5, 5]],
                5: [[2, 6, 3], [4, 0, 3]],
                10: [[3, 5, 2], [4, 0, 3]],
                15: [[1, 0], [1, 2, 6], [4, 0, 3]],
                20: [[2, 0, 5], [4, 0, 3]],
                25: [[2, 0, 9], [4, 0, 3]],
                30: [[3, 0, 3], [4, 0, 3]],
                35: [[2, 0, 9], [3, 9, 1]],
                40: [[2, 0, 5], [3, 9, 1]],
                45: [[1, 0], [1, 2, 6], [3, 9, 1]],
                50: [[3, 5, 2], [3, 9, 1]],
                55: [[2, 6, 3], [3, 9, 1]]
            }
        }
    },
    EN: {
        f: "EN",
        a: [["I", "T", "L", "I", "S", "A", "S", "A", "M", "P", "M"], ["A", "C", "Q", "U", "A", "R", "T", "E", "R", "D", "C"], ["T", "W", "E", "N", "T", "Y", "F", "I", "V", "E", "X"], ["H", "A", "L", "F", "S", "T", "E", "N", "F", "T", "O"], ["P", "A", "S", "T", "E", "R", "U", "N", "I", "N", "E"], ["O", "N", "E", "S", "I", "X", "T", "H", "R", "E", "E"], ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"], ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"], ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"], ["T", "E", "N", "S", "E", "O'C", "L", "O", "C", "K"]],
        b: 35,
        r: {
            i: [[0, 0, 1], [0, 3, 1]],
            c: {},
            e: {
                0: [[8, 5, 5]],
                1: [[5, 0, 2]],
                2: [[6, 8, 2]],
                3: [[5, 6, 4]],
                4: [[6, 0, 3]],
                5: [[6, 4, 3]],
                6: [[5, 3, 2]],
                7: [[8, 0, 4]],
                8: [[7, 0, 4]],
                9: [[4, 7, 3]],
                10: [[9, 0, 2]],
                11: [[7, 5, 5]]
            },
            d: {
                0: [[9, 5, 5]],
                5: [[2, 6, 3], [4, 0, 3]],
                10: [[3, 5, 2], [4, 0, 3]],
                15: [[1, 2, 6], [4, 0, 3]],
                20: [[2, 0, 5], [4, 0, 3]],
                25: [[2, 0, 9], [4, 0, 3]],
                30: [[3, 0, 3], [4, 0, 3]],
                35: [[2, 0, 9], [3, 9, 1]],
                40: [[2, 0, 5], [3, 9, 1]],
                45: [[1, 2, 6], [3, 9, 1]],
                50: [[3, 5, 2], [3, 9, 1]],
                55: [[2, 6, 3], [3, 9, 1]]
            }
        }
    },
    ES: {
        f: "ES",
        a: [["E", "S", "O", "N", "E", "L", "A", "S", "U", "N", "A"], ["D", "O", "S", "I", "T", "R", "E", "S", "O", "A", "M"], ["C", "U", "A", "T", "R", "O", "C", "I", "N", "C", "O"], ["S", "E", "I", "S", "A", "S", "I", "E", "T", "E", "N"], ["O", "C", "H", "O", "N", "U", "E", "V", "E", "P", "M"], ["L", "A", "D", "I", "E", "Z", "S", "O", "N", "C", "E"], ["D", "O", "C", "E", "L", "Y", "M", "E", "N", "O", "S"], ["O", "V", "E", "I", "N", "T", "E", "D", "I", "E", "Z"], ["V", "E", "I", "N", "T", "I", "C", "I", "N", "C", "O"], ["M", "E", "D", "I", "A", "C", "U", "A", "R", "T", "O"]],
        b: 35,
        r: {
            i: [],
            c: {},
            e: {
                0: [[0, 1, 2], [0, 5, 2], [6, 0, 3]],
                1: [[0, 0, 1], [0, 5, 1], [0, 8, 2]],
                2: [[0, 1, 2], [0, 5, 2], [1, 0, 2]],
                3: [[0, 1, 2], [0, 5, 2], [1, 4, 3]],
                4: [[0, 1, 2], [0, 5, 2], [2, 0, 5]],
                5: [[0, 1, 2], [0, 5, 2], [2, 6, 4]],
                6: [[0, 1, 2], [0, 5, 2], [3, 0, 3]],
                7: [[0, 1, 2], [0, 5, 2], [3, 5, 4]],
                8: [[0, 1, 2], [0, 5, 2], [4, 0, 3]],
                9: [[0, 1, 2], [0, 5, 2], [4, 4, 4]],
                10: [[0, 1, 2], [0, 5, 2], [5, 2, 3]],
                11: [[0, 1, 2], [0, 5, 2], [5, 7, 3]]
            },
            d: {
                5: [[6, 5], [8, 6, 4]],
                10: [[6, 5], [7, 7, 3]],
                15: [[6, 5], [9, 5, 5]],
                20: [[6, 5], [7, 1, 5]],
                25: [[6, 5], [8, 0, 10]],
                30: [[6, 5], [9, 0, 4]],
                35: [[6, 6, 4], [8, 0, 10]],
                40: [[6, 6, 4], [7, 1, 5]],
                45: [[6, 6, 4], [9, 5, 5]],
                50: [[6, 6, 4], [7, 7, 3]],
                55: [[6, 6, 4], [8, 6, 4]]
            }
        }
    },
    FR: {
        f: "FR",
        a: [["I", "L", "N", "E", "S", "T", "O", "D", "E", "U", "X"], ["Q", "U", "A", "T", "R", "E", "T", "R", "O", "I", "S"], ["N", "E", "U", "F", "U", "N", "E", "S", "E", "P", "T"], ["H", "U", "I", "T", "S", "I", "X", "C", "I", "N", "Q"], ["M", "I", "D", "I", "X", "M", "I", "N", "U", "I", "T"], ["O", "N", "Z", "E", "R", "H", "E", "U", "R", "E", "S"], ["M", "O", "I", "N", "S", "O", "L", "E", "D", "I", "X"], ["E", "T", "R", "Q", "U", "A", "R", "T", "P", "M", "D"], ["V", "I", "N", "G", "T", "-", "C", "I", "N", "Q", "U"], ["E", "T", "S", "D", "E", "M", "I", "E", "P", "A", "M"]],
        b: 35,
        r: {
            i: [[0, 0, 1], [0, 3, 2]],
            c: {0: {30: [[4, 5, 5], [0, 0, 1], [0, 3, 2], [9, 0, 1], [9, 3, 3]]}, 12: {30: [[4, 0, 3], [0, 0, 1], [0, 3, 2], [9, 0, 1], [9, 3, 3]]}},
            e: {
                0: [[4, 5, 5]],
                1: [[2, 4, 2], [5, 5, 4]],
                2: [[0, 7, 3], [5, 5, 5]],
                3: [[1, 6, 4], [5, 5, 5]],
                4: [[1, 0, 5], [5, 5, 5]],
                5: [[3, 7, 3], [5, 5, 5]],
                6: [[3, 4, 2], [5, 5, 5]],
                7: [[2, 7, 3], [5, 5, 5]],
                8: [[3, 0, 3], [5, 5, 5]],
                9: [[2, 0, 3], [5, 5, 5]],
                10: [[4, 2, 2], [5, 5, 5]],
                11: [[5, 0, 3], [5, 5, 5]],
                12: [[4, 0, 3]]
            },
            d: {
                0: [[0, 0, 1], [0, 3, 2]],
                5: [[8, 6, 3]],
                10: [[6, 8, 2]],
                15: [[7, 0, 1], [7, 3, 4]],
                20: [[8, 0, 4]],
                25: [[8, 0, 9]],
                30: [[0, 0, 1], [0, 3, 2], [9, 0, 1], [9, 3, 4]],
                35: [[6, 0, 4], [8, 0, 9]],
                40: [[6, 0, 4], [8, 0, 4]],
                45: [[6, 0, 4], [6, 6, 1], [7, 3, 4]],
                50: [[6, 0, 4], [6, 8, 2]],
                55: [[6, 0, 4], [8, 6, 3]]
            }
        }
    },
    GR: {
        f: "GR",
        a: [["H", "Χ", "Ω", "P", "A", "T", "E", "I", "N", "A", "I"], ["M", "I", "A", "Δ", "Y", "O", "T", "P", "E", "I", "Σ"], ["T", "E", "Σ", "Σ", "E", "P", "I", "Σ", "E", "Ξ", "I"], ["Π", "E", "N", "T", "E", "P", "O", "Χ", "T", "Ω", "H"], ["E", "Φ", "T", "A", "E", "E", "N", "T", "E", "K", "A"], ["Δ", "Ω", "Δ", "E", "K", "A", "E", "N", "N", "I", "A"], ["Δ", "E", "K", "A", "X", "Π", "A", "P", "A", "E", "P"], ["K", "A", "I", "E", "T", "E", "T", "A", "P", "T", "O"], ["E", "I", "K", "O", "Σ", "I", "H", "Δ", "E", "K", "A"], ["M", "I", "Σ", "H", "E", "Π", "E", "N", "T", "E", "P"]],
        b: 35,
        r: {
            i: [[0, 0], [0, 2, 2], [0, 6, 4]],
            c: {},
            e: {
                0: [[5, 0, 5]],
                1: [[1, 0, 2]],
                2: [[1, 3, 2]],
                3: [[1, 6, 4]],
                4: [[2, 0, 7]],
                5: [[3, 0, 4]],
                6: [[2, 8, 2]],
                7: [[4, 0, 3]],
                8: [[3, 6, 3]],
                9: [[5, 6, 4]],
                10: [[6, 0, 3]],
                11: [[4, 5, 5]]
            },
            d: {
                5: [[7, 0, 2], [9, 5, 4]],
                10: [[7, 0, 2], [8, 7, 3]],
                15: [[7, 0, 2], [7, 4, 6]],
                20: [[7, 0, 2], [8, 0, 5]],
                25: [[7, 0, 2], [8, 0, 5], [9, 5, 4]],
                30: [[7, 0, 2], [9, 0, 3]],
                35: [[6, 5, 3], [8, 0, 5], [9, 5, 4]],
                40: [[6, 5, 3], [8, 0, 5]],
                45: [[6, 5, 3], [7, 4, 6]],
                50: [[6, 5, 3], [8, 7, 3]],
                55: [[6, 5, 3], [9, 5, 4]]
            }
        }
    },
    HE: {
        f: "HE",
        a: [["ר", "ש", "ע", "ת", "ח", "א", "ר", "ה", "ע", "ש", "ה"], ["ה", "ר", "ש", "ע", "ר", "ם", "ײ", "ת", "ש", "ר", "א"], ["מ", "א", "ר", "ע", "ב", "ר", "א", "ש", "׀", "ל", "ש"], ["ה", "נ", "׀", "מ", "ש", "ע", "ב", "ש", "ש", "מ", "ח"], ["ה", "ש", "י", "מ", "ח", "׀", "ר", "ע", "ש", "ת", "ש"], ["ש", "א", "ר", "מ", "ם", "י", "ר", "ש", "ע", "ו", "א"], ["ה", "ר", "ש", "ע", "ו", "ם", "י", "ש", "ן", "ל", "ש"], ["ע", "ב", "ר", "ו", "ם", "י", "ע", "ב", "ר", "א", "ו"], ["י", "צ", "ח", "ו", "ם", "י", "ש", "י", "מ", "ח", "ו"], ["א", "ש", "מ", "ח", "ו", "ר", "ש", "ו", "ת", "ב", "א"]],
        b: 80,
        r: {
            i: [[0, 7, 3]],
            c: {},
            e: {
                0: [[1, 0, 3], [1, 5, 3]],
                1: [[0, 3, 2]],
                2: [[1, 5, 3]],
                3: [[2, 7, 3]],
                4: [[2, 3, 3]],
                5: [[3, 8, 2]],
                6: [[3, 7, 1]],
                7: [[3, 5, 2]],
                8: [[3, 0, 4]],
                9: [[4, 7, 2]],
                10: [[0, 0, 2]],
                11: [[0, 3, 2], [1, 0, 3]]
            },
            d: {
                0: [],
                5: [[4, 0, 5]],
                10: [[6, 0, 4]],
                15: [[7, 0, 3]],
                20: [[5, 4, 5]],
                25: [[5, 4, 4], [9, 1, 3]],
                30: [[8, 0, 3]],
                35: [[6, 5, 5], [9, 1, 3]],
                40: [[7, 4, 6]],
                45: [[7, 4, 5], [9, 1, 3]],
                50: [[8, 4, 6]],
                55: [[8, 4, 5], [9, 1, 3]]
            }
        }
    },
    IT: {
        f: "IT",
        a: [["S", "O", "N", "O", "R", "L", "E", "B", "O", "R", "E"], ["È", "R", "L’", "U", "N", "A", "S", "D", "U", "E", "Z"], ["T", "R", "E", "O", "T", "T", "O", "N", "O", "V", "E"], ["D", "I", "E", "C", "I", "U", "N", "D", "I", "C", "I"], ["D", "O", "D", "I", "C", "I", "S", "E", "T", "T", "E"], ["Q", "U", "A", "T", "T", "R", "O", "C", "S", "E", "I"], ["C", "I", "N", "Q", "U", "E", "A", "M", "E", "N", "O"], ["E", "K", "U", "N", "L", "Q", "U", "A", "R", "T", "O"], ["V", "E", "N", "T", "I", "C", "I", "N", "Q", "U", "E"], ["D", "I", "E", "C", "I", "L", "M", "E", "Z", "Z", "A"]],
        b: 35,
        r: {
            i: [],
            c: {},
            e: {
                0: [[0, 0, 3], [0, 5, 1], [4, 0, 5]],
                1: [[1, 0], [1, 2, 3]],
                2: [[0, 0, 3], [0, 5, 1], [1, 7, 2]],
                3: [[0, 0, 3], [0, 5, 1], [2, 0, 2]],
                4: [[0, 0, 3], [0, 5, 1], [5, 0, 6]],
                5: [[0, 0, 3], [0, 5, 1], [6, 0, 5]],
                6: [[0, 0, 3], [0, 5, 1], [5, 8, 2]],
                7: [[0, 0, 3], [0, 5, 1], [4, 6, 4]],
                8: [[0, 0, 3], [0, 5, 1], [2, 3, 3]],
                9: [[0, 0, 3], [0, 5, 1], [2, 7, 3]],
                10: [[0, 0, 3], [0, 5, 1], [3, 0, 4]],
                11: [[0, 0, 3], [0, 5, 1], [3, 5, 5]]
            },
            d: {
                5: [[7, 0], [8, 5, 5]],
                10: [[7, 0], [9, 0, 4]],
                15: [[7, 0], [7, 2, 1], [7, 5, 5]],
                20: [[7, 0], [8, 0, 4]],
                25: [[7, 0], [8, 0, 10]],
                30: [[7, 0], [9, 6, 4]],
                35: [[6, 7, 3], [8, 0, 10]],
                40: [[6, 7, 3], [8, 0, 4]],
                45: [[6, 7, 3], [7, 2, 1], [7, 5, 5]],
                50: [[6, 7, 3], [9, 0, 4]],
                55: [[6, 7, 3], [8, 5, 5]]
            }
        }
    },
    JP: {
        f: "JP",
        a: [["現", "在", "の", "時", "刻", "は", "六", "午", "前", "午", "後"], ["一", "四", "時", "半", "七", "八", "分", "時", "九", "二", "五"], ["五", "時", "半", "七", "時", "半", "二", "十", "一", "時", "半"], ["十", "二", "時", "半", "十", "時", "半", "八", "時", "半", "一"], ["九", "時", "半", "六", "時", "半", "三", "時", "半", "で", "す"], ["二", "十", "五", "分", "六", "九", "五", "分", "四", "ま", "で"], ["あ", "と", "三", "五", "分", "十", "分", "八", "二", "六", "七"], ["二", "十", "分", "九", "時", "六", "一", "十", "五", "分", "八"], ["四", "二", "十", "五", "分", "二", "十", "分", "六", "九", "三"], ["六", "十", "五", "分", "二", "四", "三", "一", "五", "で", "す"]],
        b: 35,
        r: {
            i: [[0, 0, 5]],
            c: {
                0: {30: [[3, 0, 3], [4, 9, 1]]},
                1: {30: [[2, 8, 2], [4, 9, 1]]},
                2: {30: [[3, 1, 2], [4, 9, 1]]},
                3: {30: [[4, 6, 4]]},
                4: {30: [[1, 1, 2], [4, 9, 1]]},
                5: {30: [[2, 0, 2], [4, 9, 1]]},
                6: {30: [[4, 3, 2], [4, 9, 1]]},
                7: {30: [[2, 3, 2], [4, 9, 1]]},
                8: {30: [[3, 7, 2], [4, 9, 1]]},
                9: {30: [[4, 0, 2], [4, 9, 1]]},
                10: {30: [[3, 4, 2], [4, 9, 1]]},
                11: {30: [[2, 7, 3], [4, 9, 1]]}
            },
            e: {
                0: [[3, 0, 2]],
                1: [[2, 8, 1]],
                2: [[3, 1, 1]],
                3: [[4, 6, 1]],
                4: [[1, 1, 1]],
                5: [[2, 0, 1]],
                6: [[4, 3, 1]],
                7: [[2, 3, 1]],
                8: [[3, 7, 1]],
                9: [[4, 0, 1]],
                10: [[3, 4, 1]],
                11: [[2, 7, 2]]
            },
            d: {
                0: [[4, 9, 1]],
                5: [[5, 6, 1], [9, 9, 1]],
                10: [[8, 6, 1], [9, 9, 1]],
                15: [[9, 1, 2], [9, 9, 1]],
                20: [[7, 0, 2], [9, 9, 1]],
                25: [[5, 0, 3], [9, 9, 1]],
                30: [[4, 9, 1]],
                35: [[5, 9, 1], [6, 0, 1], [8, 1, 3], [9, 9, 1]],
                40: [[5, 9, 1], [6, 0, 1], [8, 5, 2], [9, 9, 1]],
                45: [[5, 9, 1], [6, 0, 1], [7, 7, 2], [9, 9, 1]],
                50: [[5, 9, 1], [6, 0, 1], [6, 5, 1], [9, 9, 1]],
                55: [[5, 9, 1], [6, 0, 1], [9, 2, 1], [9, 9, 1]]
            }
        }
    },
    NL: {
        f: "NL",
        a: [["H", "E", "T", "K", "I", "S", "A", "V", "I", "J", "F"], ["T", "I", "E", "N", "A", "T", "Z", "V", "O", "O", "R"], ["O", "V", "E", "R", "M", "E", "K", "W", "A", "R", "T"], ["H", "A", "L", "F", "S", "P", "M", "O", "V", "E", "R"], ["V", "O", "O", "R", "T", "H", "G", "É", "É", "N", "S"], ["T", "W", "E", "E", "A", "M", "C", "D", "R", "I", "E"], ["V", "I", "E", "R", "V", "I", "J", "F", "Z", "E", "S"], ["Z", "E", "V", "E", "N", "O", "N", "E", "G", "E", "N"], ["A", "C", "H", "T", "T", "I", "E", "N", "E", "L", "F"], ["T", "W", "A", "A", "L", "F", "P", "M", "U", "U", "R"]],
        b: 20,
        r: {
            i: [[0, 0, 2], [0, 4, 1]],
            c: {},
            e: {
                0: [[9, 0, 5]],
                1: [[4, 7, 2]],
                2: [[5, 0, 3]],
                3: [[5, 7, 3]],
                4: [[6, 0, 3]],
                5: [[6, 4, 3]],
                6: [[6, 8, 2]],
                7: [[7, 0, 4]],
                8: [[8, 0, 3]],
                9: [[7, 6, 4]],
                10: [[8, 4, 3]],
                11: [[8, 8, 2]]
            },
            d: {
                0: [[9, 8, 2]],
                5: [[0, 7, 3], [2, 0, 3]],
                10: [[1, 0, 3], [2, 0, 3]],
                15: [[2, 6, 4], [3, 7, 3]],
                20: [[1, 0, 3], [1, 7, 3], [3, 0, 3]],
                25: [[0, 7, 3], [1, 7, 3], [3, 0, 3]],
                30: [[3, 0, 3]],
                35: [[0, 7, 3], [2, 0, 3], [3, 0, 3]],
                40: [[1, 0, 3], [2, 0, 3], [3, 0, 3]],
                45: [[2, 6, 4], [4, 0, 3]],
                50: [[1, 0, 3], [1, 7, 3]],
                55: [[0, 7, 3], [1, 7, 3]]
            }
        }
    },
    NO: {
        f: "NO",
        a: [["K", "L", "O", "K", "K", "E", "N", "V", "E", "R", "M"], ["F", "E", "M", "H", "P", "Å", "S", "U", "F", "I", "S"], ["T", "l", "L", "P", "Å", "S", "I", "D", "O", "S", "N"], ["K", "V", "A", "R", "T", "N", "P", "Å", "S", "T", "O"], ["O", "V", "E", "R", "X", "A", "M", "B", "P", "M", "Z"], ["H", "A", "L", "V", "B", "l", "E", "G", "E", "N", "Z"], ["E", "T", "T", "N", "T", "O", "A", "T", "R", "E", "X"], ["F", "l", "R", "E", "F", "E", "M", "S", "E", "K", "S"], ["S", "Y", "V", "Å", "T", "T", "E", "N", "I", "T", "l"], ["E", "L", "L", "E", "V", "E", "S", "T", "O", "L", "V"]],
        b: 20,
        r: {
            i: [[0, 0, 6], [0, 8, 1]],
            c: {},
            e: {
                0: [[9, 7, 3]],
                1: [[6, 0, 2]],
                2: [[6, 4, 1]],
                3: [[6, 7, 2]],
                4: [[7, 0, 3]],
                5: [[7, 4, 2]],
                6: [[7, 7, 3]],
                7: [[8, 0, 2]],
                8: [[8, 3, 3]],
                9: [[8, 7, 1]],
                10: [[8, 9, 1]],
                11: [[9, 0, 5]]
            },
            d: {
                0: [],
                5: [[1, 0, 2], [4, 0, 3]],
                10: [[2, 0, 1], [4, 0, 3]],
                15: [[3, 0, 4], [4, 0, 3]],
                20: [[2, 0, 1], [3, 6, 1], [5, 0, 3]],
                25: [[1, 0, 2], [3, 6, 1], [5, 0, 3]],
                30: [[5, 0, 3]],
                35: [[1, 0, 2], [4, 0, 3], [5, 0, 3]],
                40: [[2, 0, 1], [4, 0, 3], [5, 0, 3]],
                45: [[3, 0, 4], [3, 6, 1]],
                50: [[2, 0, 1], [3, 6, 1]],
                55: [[1, 0, 2], [3, 6, 1]]
            }
        }
    },
    PE: {
        f: "PE",
        a: [["É", "S", "Ã", "O", "U", "M", "A", "T", "R", "Ê", "S"], ["M", "E", "I", "O", "L", "D", "I", "A", "D", "E", "Z"], ["D", "U", "A", "S", "E", "I", "S", "E", "T", "E", "Y"], ["Q", "U", "A", "T", "R", "O", "H", "N", "O", "V", "E"], ["C", "I", "N", "C", "O", "I", "T", "O", "N", "Z", "E"], ["Z", "M", "E", "I", "A", "L", "N", "O", "I", "T", "E"], ["H", "O", "R", "A", "S", "Y", "M", "E", "N", "O", "S"], ["V", "I", "N", "T", "E", "C", "A", "M", "E", "I", "A"], ["U", "M", "V", "Q", "U", "A", "R", "T", "O", "P", "M"], ["D", "E", "Z", "O", "E", "Y", "C", "I", "N", "C", "O"]],
        b: 35,
        r: {
            i: [],
            c: {
                1: {0: [[0, 0], [0, 4, 2], [6, 0, 3]]},
                2: {0: [[0, 1, 2], [2, 0, 3], [6, 0, 4]]},
                3: {0: [[0, 1, 2], [0, 7, 3], [6, 0, 4]]},
                4: {0: [[0, 1, 2], [3, 0, 5], [6, 0, 4]]},
                5: {0: [[0, 1, 2], [4, 0, 4], [6, 0, 4]]},
                6: {0: [[0, 1, 2], [2, 3, 3], [6, 0, 4]]},
                7: {0: [[0, 1, 2], [2, 6, 3], [6, 0, 4]]},
                8: {0: [[0, 1, 2], [4, 4, 3], [6, 0, 4]]},
                9: {0: [[0, 1, 2], [3, 7, 3], [6, 0, 4]]},
                10: {0: [[0, 1, 2], [1, 8, 2], [6, 0, 4]]},
                11: {0: [[0, 1, 2], [4, 7, 3], [6, 0, 4]]},
                12: {30: [[0, 0], [5, 1, 3], [6, 0, 3]]}
            },
            e: {
                0: [[0, 0], [5, 1], [5, 1, 3], [5, 6, 4]],
                1: [[0, 0], [0, 4, 2]],
                2: [[0, 1, 2], [2, 0, 3]],
                3: [[0, 1, 2], [0, 7, 3]],
                4: [[0, 1, 2], [3, 0, 5]],
                5: [[0, 1, 2], [4, 0, 4]],
                6: [[0, 1, 2], [2, 3, 3]],
                7: [[0, 1, 2], [2, 6, 3]],
                8: [[0, 1, 2], [4, 4, 3]],
                9: [[0, 1, 2], [3, 7, 3]],
                10: [[0, 1, 2], [1, 8, 2]],
                11: [[0, 1, 2], [4, 7, 3]],
                12: [[0, 0], [1, 0, 3], [1, 5, 2]]
            },
            d: {
                5: [[6, 7], [9, 6, 4]],
                10: [[6, 7], [9, 0, 2]],
                15: [[6, 7], [8, 0, 1], [8, 3, 5]],
                20: [[6, 7], [7, 0, 4]],
                25: [[6, 7], [7, 0, 4], [9, 4], [9, 6, 4]],
                30: [[6, 7], [7, 7, 3]],
                35: [[6, 6, 4], [7, 0, 4], [9, 4], [9, 6, 4]],
                40: [[6, 6, 4], [7, 0, 4]],
                45: [[6, 6, 4], [8, 0, 1], [8, 3, 5]],
                50: [[6, 6, 4], [9, 0, 2]],
                55: [[6, 6, 4], [9, 6, 4]]
            }
        }
    },
    RO: {
        f: "RO",
        a: [["E", "S", "T", "E", "Z", "O", "R", "A", "P", "M", "O"], ["D", "O", "U", "Ă", "N", "S", "P", "R", "E", "A", "M"], ["U", "N", "S", "P", "R", "E", "Z", "E", "C", "E", "L"], ["N", "O", "U", "Ă", "O", "P", "T", "Ş", "A", "S", "E"], ["P", "A", "T", "R", "U", "N", "U", "T", "R", "E", "I"], ["Ş", "A", "P", "T", "E", "C", "I", "N", "C", "I", "A"], ["Ş", "I", "B", "T", "R", "E", "I", "Z", "E", "C", "I"], ["F", "Ă", "R", "Ă", "O", "Z", "E", "C", "E", "U", "N"], ["D", "O", "U", "Ă", "Z", "E", "C", "I", "V", "Ş", "I"], ["C", "I", "N", "C", "I", "U", "S", "F", "E", "R", "T"]],
        b: 40,
        r: {
            i: [[0, 0, 3], [0, 5, 2]],
            c: {},
            e: {
                0: [[1, 0, 3], [1, 5, 3], [2, 6, 3]],
                1: [[4, 4, 2]],
                2: [[1, 0, 3]],
                3: [[4, 7, 3]],
                4: [[4, 0, 4]],
                5: [[5, 5, 4]],
                6: [[3, 7, 3]],
                7: [[5, 0, 4]],
                8: [[3, 4, 2]],
                9: [[3, 0, 3]],
                10: [[2, 6, 3]],
                11: [[2, 0, 9]]
            },
            d: {
                0: [],
                5: [[6, 0, 1], [9, 0, 4]],
                10: [[6, 0, 1], [7, 5, 3]],
                15: [[6, 0, 1], [7, 9, 1], [9, 6, 4]],
                20: [[6, 0, 1], [8, 0, 7]],
                25: [[6, 0, 1], [8, 0, 7], [8, 9, 1], [9, 0, 4]],
                30: [[6, 0, 1], [6, 3, 7]],
                35: [[6, 0, 1], [6, 3, 7], [8, 9, 1], [9, 0, 4]],
                40: [[7, 0, 3], [8, 0, 7]],
                45: [[7, 0, 3], [7, 9, 1], [9, 6, 4]],
                50: [[7, 0, 3], [7, 5, 3]],
                55: [[7, 0, 3], [9, 0, 4]]
            }
        }
    },
    RU: {
        f: "RU",
        a: [["О", "Д", "И", "Н", "П", "Я", "Т", "Ь", "Д", "В", "А"], ["Д", "Е", "Ш", "Е", "С", "Т", "Ь", "В", "Я", "Т", "Ь"], ["В", "О", "Ч", "Е", "С", "Е", "М", "Ь", "Т", "Р", "И"], ["Т", "Ы", "Д", "В", "Е", "Р", "Е", "С", "Я", "Т", "Ь"], ["Н", "А", "Д", "Ц", "А", "Т", "Ь", "Ч", "А", "С", "А"], ["Ч", "А", "С", "О", "В", "Д", "С", "О", "Р", "О", "К"], ["Т", "Р", "И", "Д", "В", "А", "Д", "П", "Я", "Т", "Ь"], ["П", "Я", "Т", "Н", "А", "Д", "Е", "Ц", "А", "Т", "Ь"], ["А", "М", "Д", "Е", "С", "Я", "Т", "С", "Я", "Т", "Ь"], ["П", "Я", "Т", "Ь", "Я", "Р", "М", "И", "Н", "У", "Т"]],
        b: 80,
        r: {
            i: [],
            c: {},
            e: {
                0: [[3, 2, 2], [4, 0, 6], [5, 0, 4]],
                1: [[0, 0, 3], [4, 7, 2]],
                2: [[0, 8, 2], [4, 7, 3]],
                3: [[2, 8, 2], [4, 7, 3]],
                4: [[2, 2, 1], [3, 0, 1], [3, 5, 1], [4, 7, 3]],
                5: [[0, 4, 3], [5, 0, 4]],
                6: [[1, 2, 4], [5, 0, 4]],
                7: [[2, 4, 3], [5, 0, 4]],
                8: [[2, 0, 1], [2, 4, 3], [5, 0, 4]],
                9: [[1, 0, 1], [1, 7, 3], [5, 0, 4]],
                10: [[1, 0, 1], [3, 7, 3], [5, 0, 4]],
                11: [[0, 0, 3], [4, 0, 6], [5, 0, 4]]
            },
            d: {
                0: [],
                5: [[9, 0, 3], [9, 6, 4]],
                10: [[8, 2, 1], [8, 7, 3], [9, 6, 4]],
                15: [[7, 0, 5], [7, 7, 3], [9, 6, 4]],
                20: [[6, 3, 3], [7, 7, 3], [9, 6, 4]],
                25: [[6, 3, 3], [7, 7, 3], [9, 0, 3], [9, 6, 4]],
                30: [[6, 0, 3], [7, 7, 3], [9, 6, 4]],
                35: [[6, 0, 3], [7, 7, 3], [9, 0, 3], [9, 6, 4]],
                40: [[5, 6, 4], [9, 6, 4]],
                45: [[5, 6, 4], [9, 0, 3], [9, 6, 4]],
                50: [[6, 7, 3], [8, 2, 4], [9, 6, 4]],
                55: [[6, 7, 3], [8, 2, 4], [9, 0, 3], [9, 6, 4]]
            }
        }
    },
    SE: {
        f: "SE",
        a: [["K", "L", "O", "C", "K", "A", "N", "T", "Ä", "R", "K"], ["F", "E", "M", "Y", "I", "S", "T", "I", "O", "N", "I"], ["K", "V", "A", "R", "T", "Q", "I", "E", "N", "Z", "O"], ["T", "J", "U", "G", "O", "L", "I", "V", "I", "P", "M"], ["Ö", "V", "E", "R", "K", "A", "M", "H", "A", "L", "V"], ["E", "T", "T", "U", "S", "V", "L", "X", "T", "V", "Å"], ["T", "R", "E", "M", "Y", "K", "Y", "F", "Y", "R", "A"], ["F", "E", "M", "S", "F", "L", "O", "R", "S", "E", "X"], ["S", "J", "U", "Ä", "T", "T", "A", "I", "N", "I", "O"], ["T", "I", "O", "E", "L", "V", "A", "T", "O", "L", "V"]],
        b: 25,
        r: {
            i: [[0, 0, 6], [0, 8, 1]],
            c: {},
            e: {
                0: [[9, 7, 3]],
                1: [[5, 0, 2]],
                2: [[5, 8, 2]],
                3: [[6, 0, 2]],
                4: [[6, 7, 3]],
                5: [[7, 0, 2]],
                6: [[7, 8, 2]],
                7: [[8, 0, 2]],
                8: [[8, 3, 3]],
                9: [[8, 8, 2]],
                10: [[9, 0, 2]],
                11: [[9, 3, 3]]
            },
            d: {
                0: [],
                5: [[1, 0, 2], [4, 0, 3]],
                10: [[1, 6, 2], [4, 0, 3]],
                15: [[2, 0, 4], [4, 0, 3]],
                20: [[3, 0, 4], [4, 0, 3]],
                25: [[1, 0, 2], [1, 4], [4, 7, 3]],
                30: [[4, 7, 3]],
                35: [[1, 0, 2], [4, 0, 3], [4, 7, 3]],
                40: [[3, 0, 4], [3, 6]],
                45: [[2, 0, 4], [2, 6]],
                50: [[1, 6, 2], [1, 10]],
                55: [[1, 0, 2], [1, 4]]
            }
        }
    },
    TR: {
        f: "TR",
        a: [["S", "A", "A", "T", "R", "O", "N", "U", "Ü", "Ç", "Ü"], ["B", "İ", "R", "İ", "A", "L", "T", "I", "Y", "I", "D"], ["İ", "K", "İ", "Y", "İ", "D", "O", "K", "U", "Z", "U"], ["D", "Ö", "R", "D", "Ü", "Y", "E", "D", "İ", "Y", "İ"], ["S", "E", "K", "I", "Z", "İ", "Y", "A", "R", "I", "M"], ["D", "Ö", "R", "T", "A", "M", "S", "B", "E", "Ş", "İ"], ["K", "P", "M", "O", "T", "U", "Z", "K", "I", "R", "K"], ["E", "L", "L", "İ", "O", "N", "Y", "İ", "R", "M", "İ"], ["B", "U", "Ç", "U", "K", "Ç", "E", "Y", "R", "E", "K"], ["B", "E", "Ş", "M", "G", "E", "Ç", "İ", "Y", "O", "R"]],
        b: 65,
        r: {
            i: [[0, 0, 3]],
            c: {
                0: {0: [[0, 5, 1], [2, 0, 2]], 30: [[0, 5, 1], [2, 0, 2], [8, 0, 4]]},
                1: {0: [[1, 0, 2]], 30: [[1, 0, 2], [8, 0, 4]]},
                2: {0: [[2, 0, 2]], 30: [[2, 0, 2], [8, 0, 4]]},
                3: {0: [[0, 8, 1]], 30: [[0, 8, 1], [8, 0, 4]]},
                4: {0: [[5, 0, 3]], 30: [[5, 0, 3], [8, 0, 4]]},
                5: {0: [[5, 7, 2]], 30: [[5, 7, 2], [8, 0, 4]]},
                6: {0: [[1, 4, 3]], 30: [[1, 4, 3], [8, 0, 4]]},
                7: {0: [[3, 5, 3]], 30: [[3, 5, 3], [8, 0, 4]]},
                8: {0: [[4, 0, 4]], 30: [[4, 0, 4], [8, 0, 4]]},
                9: {0: [[2, 5, 4]], 30: [[2, 5, 4], [8, 0, 4]]},
                10: {0: [[0, 5, 1]], 30: [[0, 5, 1], [8, 0, 4]]},
                11: {0: [[0, 5, 1], [1, 0, 2]], 30: [[0, 5, 1], [1, 0, 2], [8, 0, 4]]},
                24: {0: [[0, 5, 1], [2, 0, 2]], 30: [[0, 5, 1], [2, 0, 2], [8, 0, 4]]}
            },
            e: {
                0: [[0, 5, 1], [2, 0, 4]],
                1: [[1, 0, 3]],
                2: [[2, 0, 4]],
                3: [[0, 8, 2]],
                4: [[3, 0, 4]],
                5: [[5, 7, 3]],
                6: [[1, 4, 5]],
                7: [[3, 5, 5]],
                8: [[4, 0, 5]],
                9: [[2, 5, 5]],
                10: [[0, 5, 2]],
                11: [[0, 5, 1], [1, 0, 3]],
                24: [[0, 5, 1], [2, 0, 4]]
            },
            d: {
                0: [],
                5: [[9, 0, 2], [9, 4, 6]],
                10: [[7, 4, 1], [9, 4, 6]],
                15: [[8, 5, 5], [9, 4, 6]],
                20: [[7, 6, 4], [9, 4, 6]],
                25: [[7, 6, 4], [9, 0, 2], [9, 4, 6]],
                30: [[8, 0, 4]],
                35: [[6, 3, 3], [9, 0, 2], [9, 4, 6]],
                40: [[6, 7, 3], [9, 4, 6]],
                45: [[6, 7, 3], [9, 0, 2], [9, 4, 6]],
                50: [[7, 0, 3], [9, 4, 6]],
                55: [[7, 0, 3], [9, 0, 2], [9, 4, 6]]
            }
        }
    }
}
  if (language in full_matrix) {
    return full_matrix[language]
  } else {
    return null
  }
}