/* eslint-disable no-new */
new App({
  canvas: document.querySelector('#canvas'),

  colorPalette: new ColorPalette({
    element: document.querySelector('#color-palette'),
    colors: [
      { red: 249, green: 38, blue: 114 }, // red
      { red: 255, green: 255, blue: 0 }, // yellow
      { red: 0, green: 255, blue: 0 }, // green
      { red: 43, green: 186, blue: 197 }, // light blue
      { red: 0, green: 0, blue: 255 }, // blue
    ],
  }),

  colorPicker: new ColorPicker({
    element: document.querySelector('#color-picker'),
  }),
});
