/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "blue": {
        "100": "#F2F8FF",
        "200": "#E4F1FF",
        "300": "#C6E2FF",
        "400": "#A3D2FF",
        "500": "#75C0FF",
        "600": "#1BADFF",
        "700": "#189BE4",
        "800": "#1586C6",
        "900": "#0D567F",
        "950": "#072A3E"
      },
      "green": {
        "100": "#F2F7F4",
        "200": "#E4EFE8",
        "300": "#C6DFCF",
        "400": "#A2CCB3",
        "500": "#73B891",
        "600": "#12A264",
        "700": "#109159",
        "800": "#0E7D4D",
        "900": "#095132",
        "950": "#042818"
      },
      "yellow": {
        "100": "#FEF9F3",
        "200": "#FDF4E7",
        "300": "#FBE8CB",
        "400": "#FADCAC",
        "500": "#F8CF85",
        "600": "#F6C14D",
        "700": "#DCAD45",
        "800": "#BF953C",
        "900": "#7B6026",
        "950": "#3C2F13"
      },
      "red": {
        "100": "#FEF2F4",
        "200": "#FCE5E8",
        "300": "#FAC7CE",
        "400": "#F7A5B0",
        "500": "#F5788C",
        "600": "#F22B5A",
        "700": "#D82650",
        "800": "#BB2146",
        "900": "#79152D",
        "950": "#3B0B16"
      },
      "gray": {
        "100": "#F4F5F8",
        "200": "#E3E6EE",
        "300": "#CDD1E0",
        "400": "#A6ADC9",
        "500": "#7C83AB",
        "600": "#575A7F",
        "700": "#30304F",
        "800": "#262640",
        "900": "#191A2C"
      },
      "purple": {
        "400": "#9785FF",
        "500": "#7857FF"
      }
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

