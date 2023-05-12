let lang = '';
if (localStorage.getItem('langStorage') === 'en') {
  lang = 'en';
} else if (localStorage.getItem('langStorage') === 'ru') {
  lang = 'ru';
} else {
  lang = 'en';
}
const langStorage = 'langStorage';

const letterBtnObj1 = [
  {
    code: 'Backquote',
    ru: 'ё',
    RU: 'Ё',
    en: '`',
    EN: '~',
  },
  {
    code: 'Digit1',
    ru: '1',
    RU: '!',
    en: '1',
    EN: '!',
  },
  {
    code: 'Digit2',
    ru: '2',
    RU: '"',
    en: '2',
    EN: '@',
  },
  {
    code: 'Digit3',
    ru: '3',
    RU: '№',
    en: '3',
    EN: '#',
  },
  {
    code: 'Digit4',
    ru: '4',
    RU: ';',
    en: '4',
    EN: '$',
  },
  {
    code: 'Digit5',
    ru: '5',
    RU: '%',
    en: '5',
    EN: '%',
  },
  {
    code: 'Digit6',
    ru: '6',
    RU: ':',
    en: '6',
    EN: '^',
  },
  {
    code: 'Digit7',
    ru: '7',
    RU: '?',
    en: '7',
    EN: '&',
  },
  {
    code: 'Digit8',
    ru: '8',
    RU: '*',
    en: '8',
    EN: '*',
  },
  {
    code: 'Digit9',
    ru: '9',
    RU: '(',
    en: '9',
    EN: '(',
  },
  {
    code: 'Digit0',
    ru: '0',
    RU: ')',
    en: '0',
    EN: ')',
  },
  {
    code: 'Minus',
    ru: '-',
    RU: '_',
    en: '-',
    EN: '_',
  },
  {
    code: 'Equal',
    ru: '=',
    RU: '+',
    en: '=',
    EN: '+',
  },
];

const letterBtnObj2 = [
  {
    code: 'KeyQ',
    ru: 'й',
    RU: 'Й',
    en: 'q',
    EN: 'Q',
  },
  {
    code: 'KeyW',
    ru: 'ц',
    RU: 'Ц',
    en: 'w',
    EN: 'W',
  },
  {
    code: 'KeyE',
    ru: 'у',
    RU: 'У',
    en: 'e',
    EN: 'E',
  },
  {
    code: 'KeyR',
    ru: 'к',
    RU: 'К',
    en: 'r',
    EN: 'R',
  },
  {
    code: 'KeyT',
    ru: 'е',
    RU: 'Е',
    en: 't',
    EN: 'T',
  },
  {
    code: 'KeyY',
    ru: 'н',
    RU: 'Н',
    en: 'y',
    EN: 'Y',
  },
  {
    code: 'KeyU',
    ru: 'г',
    RU: 'Г',
    en: 'u',
    EN: 'U',
  },
  {
    code: 'KeyI',
    ru: 'ш',
    RU: 'Ш',
    en: 'i',
    EN: 'I',
  },
  {
    code: 'KeyO',
    ru: 'щ',
    RU: 'Щ',
    en: 'o',
    EN: 'O',
  },
  {
    code: 'KeyP',
    ru: 'з',
    RU: 'З',
    en: 'p',
    EN: 'P',
  },
  {
    code: 'BracketLeft',
    ru: 'х',
    RU: 'Х',
    en: '[',
    EN: '{',
  },
  {
    code: 'BracketRight',
    ru: 'ъ',
    RU: 'Ъ',
    en: ']',
    EN: '}',
  },
  {
    code: 'Backslash',
    ru: '\\',
    RU: '/',
    en: '\\',
    EN: '|',
  },
];

const letterBtnObj3 = [
  {
    code: 'KeyA',
    ru: 'ф',
    RU: 'Ф',
    en: 'a',
    EN: 'A',
  },
  {
    code: 'KeyS',
    ru: 'ы',
    RU: 'Ы',
    en: 's',
    EN: 'S',
  },
  {
    code: 'KeyD',
    ru: 'в',
    RU: 'В',
    en: 'd',
    EN: 'D',
  },
  {
    code: 'KeyF',
    ru: 'а',
    RU: 'А',
    en: 'f',
    EN: 'F',
  },
  {
    code: 'KeyG',
    ru: 'п',
    RU: 'П',
    en: 'g',
    EN: 'G',
  },
  {
    code: 'KeyH',
    ru: 'р',
    RU: 'Р',
    en: 'h',
    EN: 'H',
  },
  {
    code: 'KeyJ',
    ru: 'о',
    RU: 'О',
    en: 'j',
    EN: 'J',
  },
  {
    code: 'KeyK',
    ru: 'л',
    RU: 'Л',
    en: 'k',
    EN: 'K',
  },
  {
    code: 'KeyL',
    ru: 'д',
    RU: 'Д',
    en: 'l',
    EN: 'L',
  },
  {
    code: 'Semicolon',
    ru: 'ж',
    RU: 'Ж',
    en: ';',
    EN: ':',
  },
  {
    code: 'Quote',
    ru: 'э',
    RU: 'Э',
    en: "'",
    EN: '"',
  },
];

const letterBtnObj4 = [
  {
    code: 'KeyZ',
    ru: 'я',
    RU: 'Я',
    en: 'z',
    EN: 'Z',
  },
  {
    code: 'KeyX',
    ru: 'ч',
    RU: 'Ч',
    en: 'x',
    EN: 'X',
  },
  {
    code: 'KeyC',
    ru: 'с',
    RU: 'С',
    en: 'c',
    EN: 'C',
  },
  {
    code: 'KeyV',
    ru: 'м',
    RU: 'М',
    en: 'v',
    EN: 'V',
  },
  {
    code: 'KeyB',
    ru: 'и',
    RU: 'И',
    en: 'b',
    EN: 'B',
  },
  {
    code: 'KeyN',
    ru: 'т',
    RU: 'Т',
    en: 'n',
    EN: 'N',
  },
  {
    code: 'KeyM',
    ru: 'ь',
    RU: 'Ь',
    en: 'm',
    EN: 'M',
  },
  {
    code: 'Comma',
    ru: 'б',
    RU: 'Б',
    en: ',',
    EN: '<',
  },
  {
    code: 'Period',
    ru: 'ю',
    RU: 'Ю',
    en: '.',
    EN: '>',
  },
  {
    code: 'Slash',
    ru: '.',
    RU: ',',
    en: '/',
    EN: '?',
  },
];

// создала каркас
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const textBox = document.createElement('textarea');
textBox.classList.add('text-box');
textBox.placeholder = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: ctrl + alt';
textBox.autofocus = true;
wrapper.appendChild(textBox);

let textareaIndex = 0;
textBox.addEventListener('click', () => {
  console.log(textBox.selectionStart);
  textareaIndex = textBox.selectionStart;
});

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

// keyboard.onmousedown = function (event) {
//   event.preventDefault();
// }

const lineFirst = document.createElement('div');
lineFirst.classList.add('line');
lineFirst.classList.add('line1');
keyboard.appendChild(lineFirst);

const lineSecond = document.createElement('div');
lineSecond.classList.add('line');
lineSecond.classList.add('line2');
keyboard.appendChild(lineSecond);

const lineThird = document.createElement('div');
lineThird.classList.add('line');
lineThird.classList.add('line3');
keyboard.appendChild(lineThird);

const lineFourth = document.createElement('div');
lineFourth.classList.add('line');
lineFourth.classList.add('line4');
keyboard.appendChild(lineFourth);

const lineFifth = document.createElement('div');
lineFifth.classList.add('line');
keyboard.appendChild(lineFifth);

// перебрала массивы с вставкой символов в кнопки

const createFirstLine = function () {
  if (lang === 'en') {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.textContent = letterBtnObj1[i].en;
      letterBtn.id = letterBtnObj1[i].code;
      lineFirst.appendChild(letterBtn);
    }
  } else {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.textContent = letterBtnObj1[i].ru;
      letterBtn.id = letterBtnObj1[i].code;
      lineFirst.appendChild(letterBtn);
    }
  }
};
createFirstLine();

const createSecondLine = function () {
  if (lang === 'en') {
    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.textContent = letterBtnObj2[i].en;
      letterBtn.id = letterBtnObj2[i].code;
      lineSecond.appendChild(letterBtn);
    }
  } else {
    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.textContent = letterBtnObj2[i].ru;
      letterBtn.id = letterBtnObj2[i].code;
      lineSecond.appendChild(letterBtn);
    }
  }
};
createSecondLine();

const createThirdLine = function () {
  if (lang === 'en') {
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.textContent = letterBtnObj3[i].en;
      letterBtn.id = letterBtnObj3[i].code;
      lineThird.appendChild(letterBtn);
    }
  } else {
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.id = letterBtnObj3[i].code;
      letterBtn.textContent = letterBtnObj3[i].ru;
      lineThird.appendChild(letterBtn);
    }
  }
};
createThirdLine();

const createFourthLine = function () {
  if (lang === 'en') {
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.id = letterBtnObj4[i].code;
      letterBtn.textContent = letterBtnObj4[i].en;
      lineFourth.appendChild(letterBtn);
    }
  } else {
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      const letterBtn = document.createElement('button');
      letterBtn.classList.add('letter');
      letterBtn.id = letterBtnObj4[i].code;
      letterBtn.textContent = letterBtnObj4[i].ru;
      lineFourth.appendChild(letterBtn);
    }
  }
};
createFourthLine();

// добавила недостающие кнопки

const tabBtn = document.createElement('button');
tabBtn.classList.add('tab-btn');
tabBtn.id = 'Tab';
tabBtn.textContent = 'Tab';
lineSecond.prepend(tabBtn);

tabBtn.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '\t';
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  // textBox.focus();
  textareaIndex += 1;
  tabBtn.classList.add('active');
});
tabBtn.addEventListener('mouseup', () => {
  // textBox.focus();
  tabBtn.classList.remove('active');
});

const backspaceBtn = document.createElement('button');
backspaceBtn.classList.add('backspace-btn');
backspaceBtn.id = 'Backspace';
backspaceBtn.textContent = 'Backspace';
lineFirst.appendChild(backspaceBtn);

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.id = 'Delete';
deleteBtn.textContent = 'Del';
lineSecond.appendChild(deleteBtn);

const capsBtn = document.createElement('button');
capsBtn.classList.add('caps-btn');
capsBtn.id = 'CapsLock';
capsBtn.textContent = 'Caps Lock';
lineThird.prepend(capsBtn);

const enterBtn = document.createElement('button');
enterBtn.classList.add('enter-btn');
enterBtn.id = 'Enter';
enterBtn.textContent = 'Enter';
lineThird.appendChild(enterBtn);

const arrowUp = document.createElement('button');
arrowUp.classList.add('arrow-up');
arrowUp.id = 'ArrowUp';
arrowUp.textContent = '↑';
lineFourth.appendChild(arrowUp);

const shiftBtn = document.createElement('button');
shiftBtn.classList.add('shift-btn-right');
shiftBtn.id = 'ShiftRight';
shiftBtn.textContent = 'Shift';
lineFourth.appendChild(shiftBtn);

const shiftLeftBtn = document.createElement('button');
shiftLeftBtn.classList.add('shift-btn-left');
shiftLeftBtn.id = 'ShiftLeft';
shiftLeftBtn.textContent = 'Shift';
lineFourth.prepend(shiftLeftBtn);

const ctrlBtn = document.createElement('button');
ctrlBtn.classList.add('ctrl-btn-left');
ctrlBtn.id = 'ControlLeft';
ctrlBtn.textContent = 'Ctrl';
lineFifth.appendChild(ctrlBtn);

const winBtn = document.createElement('button');
winBtn.classList.add('win-btn');
winBtn.id = 'MetaLeft';
winBtn.textContent = 'Win';
lineFifth.appendChild(winBtn);

const altBtn = document.createElement('button');
altBtn.classList.add('alt-btn-left');
altBtn.id = 'AltLeft';
altBtn.textContent = 'Alt';
lineFifth.appendChild(altBtn);

const spaceBtn = document.createElement('button');
spaceBtn.classList.add('space-btn');
spaceBtn.id = 'Space';
lineFifth.appendChild(spaceBtn);

spaceBtn.addEventListener('mousedown', () => {
  spaceBtn.classList.add('active');
  const str = textBox.value;
  const charsToAdd = ' ';
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  // textBox.focus();
  textareaIndex += 1;
});
spaceBtn.addEventListener('mouseup', () => {
  spaceBtn.classList.remove('active');
  // textBox.focus();
  // textareaIndex = textBox.selectionStart;
});

const altBtnRight = document.createElement('button');
altBtnRight.classList.add('alt-btn-right');
altBtnRight.id = 'AltRight';
altBtnRight.textContent = 'Alt';
lineFifth.appendChild(altBtnRight);

const arrowLeft = document.createElement('button');
arrowLeft.classList.add('arrow-left');
arrowLeft.id = 'ArrowLeft';
arrowLeft.textContent = '←';
lineFifth.appendChild(arrowLeft);

const arrowDown = document.createElement('button');
arrowDown.classList.add('arrow-down');
arrowDown.id = 'ArrowDown';
arrowDown.textContent = '↓';
lineFifth.appendChild(arrowDown);

const arrowRight = document.createElement('button');
arrowRight.classList.add('arrow-right');
arrowRight.id = 'ArrowRight';
arrowRight.textContent = '→';
lineFifth.appendChild(arrowRight);

const ctrlBtnRight = document.createElement('button');
ctrlBtnRight.classList.add('ctrl-btn-right');
ctrlBtnRight.id = 'ControlRight';
ctrlBtnRight.textContent = 'Ctrl';
lineFifth.appendChild(ctrlBtnRight);

const allLetterBtn = document.querySelectorAll('.letter');

allLetterBtn.forEach((letterBtn) => {
  letterBtn.addEventListener('mousedown', () => {
    const str = textBox.value;
    const charsToAdd = letterBtn.textContent;
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    letterBtn.classList.add('active');
    // textBox.focus();
    textareaIndex += 1;
  });

  letterBtn.addEventListener('mouseup', () => {
    letterBtn.classList.remove('active');
    // textBox.focus();
    // textareaIndex = textBox.selectionStart;
  });
});

// Переключение языка
const letterBtnLine1 = document.querySelectorAll('.line1 .letter');
const letterBtnLine2 = document.querySelectorAll('.line2 .letter');
const letterBtnLine3 = document.querySelectorAll('.line3 .letter');
const letterBtnLine4 = document.querySelectorAll('.line4 .letter');

const changeLanguageTest = function () {
  if (lang === 'ru') {
    letterBtnLine1[0].textContent = letterBtnObj1[0].ru;

    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].ru;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].ru;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].ru;
    }
  } else if (lang === 'RU') {
    letterBtnLine1[0].textContent = letterBtnObj1[0].RU;

    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].RU;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].RU;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].RU;
    }
  } else if (lang === 'en') {
    letterBtnLine1[0].textContent = letterBtnObj1[0].en;

    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].en;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].en;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].en;
    }
  } else if (lang === 'EN') {
    letterBtnLine1[0].textContent = letterBtnObj1[0].EN;

    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].EN;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].EN;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].EN;
    }
  }
  if (capsBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toUpperCase();
    });
  }
};
changeLanguageTest();

backspaceBtn.addEventListener('mousedown', () => {
  backspaceBtn.classList.add('active');
  let str = textBox.value;
  if (textareaIndex === 0) {
    textareaIndex = str.length - 1;
  }

  str = str.slice(0, textareaIndex - 1) + str.slice(textareaIndex);
  textareaIndex -= 1;
  textBox.value = str;
});
backspaceBtn.addEventListener('mouseup', () => {
  backspaceBtn.classList.remove('active');
});

enterBtn.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '\n';
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  enterBtn.classList.add('active');
  textareaIndex += 1;
});
enterBtn.addEventListener('mouseup', () => {
  enterBtn.classList.remove('active');
});

ctrlBtnRight.addEventListener('mousedown', () => {
  ctrlBtnRight.classList.add('active');
});
ctrlBtnRight.addEventListener('mouseup', () => {
  ctrlBtnRight.classList.remove('active');
});

ctrlBtn.addEventListener('mousedown', () => {
  ctrlBtn.classList.add('active');
});
ctrlBtn.addEventListener('mouseup', () => {
  ctrlBtn.classList.remove('active');
});

altBtn.addEventListener('mousedown', () => {
  altBtn.classList.add('active');
});
altBtn.addEventListener('mouseup', () => {
  altBtn.classList.remove('active');
});
altBtnRight.addEventListener('mousedown', () => {
  altBtnRight.classList.add('active');
});
altBtnRight.addEventListener('mouseup', () => {
  altBtnRight.classList.remove('active');
});

winBtn.addEventListener('mousedown', () => {
  winBtn.classList.add('active');
});
winBtn.addEventListener('mouseup', () => {
  winBtn.classList.remove('active');
});

const changeShift = function () {
  if (capsBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toLowerCase();
    });
  }

  if (lang === 'ru') {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      letterBtnLine1[i].textContent = letterBtnObj1[i].RU;
    }
    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].RU;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].RU;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].RU;
    }
    lang = 'RU';
    // console.log('changeShift', 1)
  } else if (lang === 'RU') {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      letterBtnLine1[i].textContent = letterBtnObj1[i].ru;
    }
    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].ru;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].ru;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].ru;
    }
    lang = 'ru';
  } else if (lang === 'en') {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      letterBtnLine1[i].textContent = letterBtnObj1[i].EN;
    }
    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].EN;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].EN;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].EN;
    }
    lang = 'EN';
  } else if (lang === 'EN') {
    for (let i = 0; i < letterBtnObj1.length; i += 1) {
      letterBtnLine1[i].textContent = letterBtnObj1[i].en;
    }

    for (let i = 0; i < letterBtnObj2.length; i += 1) {
      letterBtnLine2[i].textContent = letterBtnObj2[i].en;
    }
    for (let i = 0; i < letterBtnObj3.length; i += 1) {
      letterBtnLine3[i].textContent = letterBtnObj3[i].en;
    }
    for (let i = 0; i < letterBtnObj4.length; i += 1) {
      letterBtnLine4[i].textContent = letterBtnObj4[i].en;
    }
    lang = 'en';
  }
};

shiftLeftBtn.addEventListener('mousedown', () => {
  if (!shiftLeftBtn.classList.contains('active')) {
    shiftLeftBtn.classList.add('active');
    changeShift();
    if (capsBtn.classList.contains('active')) {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toLowerCase();
      });
    }
  }
});
shiftLeftBtn.addEventListener('mouseup', () => {
  shiftLeftBtn.classList.remove('active');
  changeShift();
  if (capsBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toUpperCase();
    });
  }
});

shiftBtn.addEventListener('mousedown', () => {
  if (!shiftBtn.classList.contains('active')) {
    shiftBtn.classList.add('active');
    changeShift();
    if (capsBtn.classList.contains('active')) {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toLowerCase();
      });
    }
  }
});
shiftBtn.addEventListener('mouseup', () => {
  shiftBtn.classList.remove('active');
  changeShift();
  if (capsBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toUpperCase();
    });
  }
});

capsBtn.onclick = function () {
  capsBtn.classList.toggle('active');
  if (shiftLeftBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toLowerCase();
    });
  } else if (capsBtn.classList.contains('active')) {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toUpperCase();
    });
  } else {
    allLetterBtn.forEach((letterBtn) => {
      letterBtn.textContent = letterBtn.textContent.toLowerCase();
    });
  }
};

// Стрелки
arrowUp.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '↑';
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  arrowUp.classList.add('active');
  // textBox.focus();
  textareaIndex += 1;
});
arrowUp.addEventListener('mouseup', () => {
  arrowUp.classList.remove('active');
});

arrowLeft.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '←'; // символы, которые нужно добавить
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  arrowLeft.classList.add('active');
  textareaIndex += 1;
});
arrowLeft.addEventListener('mouseup', () => {
  arrowLeft.classList.remove('active');
});

arrowRight.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '→'; // символы, которые нужно добавить
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  arrowRight.classList.add('active');
  textareaIndex += 1;
});
arrowRight.addEventListener('mouseup', () => {
  arrowRight.classList.remove('active');
});

arrowDown.addEventListener('mousedown', () => {
  const str = textBox.value;
  const charsToAdd = '↓'; // символы, которые нужно добавить
  const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
  textBox.value = newStr;
  arrowDown.classList.add('active');
  textareaIndex += 1;
});
arrowDown.addEventListener('mouseup', () => {
  arrowDown.classList.remove('active');
});

// переключение языка

let isControlDown = false;
let isAltDown = false;

document.onkeydown = function (event) {
  // textBox.focus();
  const c = `#${event.code}`;
  console.log('c', c);
  if (event.code === 'CapsLock') {
    event.preventDefault();
    capsBtn.classList.toggle('active');
    if (shiftLeftBtn.classList.contains('active')) {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toLowerCase();
      });
    } else if (capsBtn.classList.contains('active')) {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toUpperCase();
      });
    } else {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toLowerCase();
      });
    }
    // console.log('СРАБАТЫВАЕТ');
  } else if (event.code === 'Tab') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '\t';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    textareaIndex += 1;
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'Enter') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '\n';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    textareaIndex += 1;
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'ArrowUp') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '↑';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    arrowUp.classList.add('active');
    // textBox.focus();
    textareaIndex += 1;
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'ArrowLeft') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '←';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    arrowLeft.classList.add('active');
    textareaIndex += 1;

    document.querySelector(c).classList.add('active');
  } else if (event.code === 'ArrowDown') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '↓';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    arrowDown.classList.add('active');
    textareaIndex += 1;
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'ArrowRight') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = '→';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    arrowRight.classList.add('active');
    textareaIndex += 1;

    document.querySelector(c).classList.add('active');
  } else if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    event.preventDefault();
    document.querySelector(c).classList.add('active');
    changeShift();
    if (capsBtn.classList.contains('active')) {
      event.preventDefault();
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toUpperCase();
      });
    }
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    event.preventDefault();
    document.querySelector(c).classList.add('active');
    isControlDown = true;
    if (isAltDown === true) {
      if (lang === 'ru') {
        lang = 'en';
        localStorage.setItem(langStorage, 'en');
        console.log('ru - en');
      } else {
        lang = 'ru';
        localStorage.setItem(langStorage, 'ru');
        console.log('en - ru');
      }
      changeLanguageTest();
    }
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
    console.log('altvnutri');
    textBox.focus();
    isAltDown = true;
    document.querySelector(c).classList.add('active');

    if (isControlDown === true) {
      if (lang === 'ru') {
        lang = 'en';
        localStorage.setItem(langStorage, 'en');
        console.log('ru - en');
      } else {
        lang = 'ru';
        localStorage.setItem(langStorage, 'ru');
        console.log('en - ru');
      }
      changeLanguageTest();
    }
  } else if (event.code === 'Backspace') {
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'Delete') {
    document.querySelector(c).classList.add('active');
  } else if (event.code === 'Space') {
    event.preventDefault();
    const str = textBox.value;
    const charsToAdd = ' ';
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    textareaIndex += 1;
    document.querySelector(c).classList.add('active');
    // textareaIndex = textBox.selectionStart;
  } else if (event.code === 'MetaLeft') {
    document.querySelector(c).classList.add('active');
  } else {
    event.preventDefault();
    document.querySelector(c).classList.add('active');
    const str = textBox.value;
    const charsToAdd = document.querySelector(c).textContent;
    const newStr = str.slice(0, textareaIndex) + charsToAdd + str.slice(textareaIndex);
    textBox.value = newStr;
    // letterBtn.classList.add('active');
    textareaIndex += 1;
    // textBox.value += document.querySelector(c).textContent
    // textareaIndex = textBox.selectionStart;
  }
};

// Подсвечивание клавиш при нажатии на клавиатуру

document.onkeyup = function (event) {
  const c = `#${event.code}`;
  if (event.code === 'CapsLock') {
    console.log('est');
  } else if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    document.querySelector(c).classList.remove('active');
    changeShift();
    if (capsBtn.classList.contains('active')) {
      allLetterBtn.forEach((letterBtn) => {
        letterBtn.textContent = letterBtn.textContent.toUpperCase();
      });
    }
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    isControlDown = false;
    document.querySelector(c).classList.remove('active');
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    document.querySelector(c).classList.remove('active');
    isAltDown = false;
    textBox.focus();
  } else {
    document.querySelector(c).classList.remove('active');
  }
};

deleteBtn.addEventListener('mousedown', () => {
  deleteBtn.classList.add('active');
  let str = textBox.value;

  str = str.slice(0, textareaIndex) + str.slice(textareaIndex + 1);
  textBox.value = str;
});

deleteBtn.addEventListener('mouseup', () => {
  deleteBtn.classList.remove('active');
});