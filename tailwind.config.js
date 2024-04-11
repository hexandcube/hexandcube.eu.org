module.exports = {
  content: [
    "layouts/**/*.{html,md}",
    "content/**/*.{html,md}",
    "assets/**/*.scss",
  ],
  darkMode: "class",
  theme: {
    extend: {
      opacity: {
        2: "0.02",
        4: "0.04",
        6: "0.06",
        8: "0.08",
        10: "0.10",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        20: "0.20",
        24: "0.24",
        26: "0.26",
        28: "0.28",
        32: "0.32",
        28: "0.36",
        42: "0.42",
        44: "0.44",
        48: "0.48",
        54: "0.54",
        56: "0.56",
        60: "0.60",
        64: "0.64",
        72: "0.72",
        80: "0.80",
        88: "0.88",
      },
      colors: {
        // Color Pallete
        white: "rgb(255, 255, 255)",
        black: "rgb(0, 0, 0)",
        grey: {
          100: "rgb(239, 239, 239)",
          200: "rgb(223, 223, 223)",
          300: "rgb(207, 207, 207)",
          400: "rgb(175, 175, 175)",
          500: "rgb(143, 143, 143)",
          600: "rgb(112, 112, 112)",
          700: "rgb(80, 80, 80)",
          800: "rgb(48, 48, 48)",
        },
        orange: {
          100: "rgb(255, 235, 231)",
          200: "rgba(248, 177, 152, 1)",
          300: "rgb(255, 195, 183)",
          400: "rgb(255, 142, 120)",
          500: "rgb(239, 90, 60)",
          600: "rgb(199, 64, 37)",
          700: "rgb(151, 41, 19)",
          800: "rgb(96, 16, 0)",
        },
        green: {
          100: "rgb(191, 255, 229)",
          200: "rgb(124, 247, 196)",
          300: "rgb(72, 231, 165)",
          400: "rgb(25, 199, 127)",
          500: "rgb(0, 160, 94)",
          600: "rgb(0, 128, 75)",
          700: "rgb(0, 88, 51)",
          800: "rgb(0, 56, 33)",
        },
        pink: {
          100: "rgb(255, 239, 247)",
          200: "rgb(255, 215, 235)",
          300: "rgb(255, 191, 223)",
          400: "rgb(239, 149, 194)",
          500: "rgb(207, 116, 162)",
          600: "rgb(175, 88, 131)",
          700: "rgb(128, 56, 92)",
          800: "rgb(81, 31, 56)",
        },
        yellow: {
          100: "rgb(255, 237, 184)",
          200: "rgb(255, 223, 128)",
          300: "rgb(255, 203, 46)",
          400: "rgb(223, 171, 14)",
          500: "rgb(183, 137, 0)",
          600: "rgb(143, 108, 0)",
          700: "rgb(104, 78, 0)",
          800: "rgb(64, 48, 0)",
        },
        blue: {
          100: "rgb(223, 244, 255)",
          200: "rgb(183, 231, 255)",
          300: "rgb(143, 218, 255)",
          400: "rgb(74, 183, 238)",
          500: "rgb(39, 151, 207)",
          600: "rgb(11, 121, 175)",
          700: "rgb(8, 88, 128)",
          800: "rgb(0, 53, 80)",
        },
        red: {
          100: "rgb(255, 231, 231)",
          200: "rgb(255, 215, 215)",
          300: "rgb(255, 191, 191)",
          400: "rgb(255, 143, 143)",
          500: "rgb(255, 80, 80)",
          600: "rgb(215, 40, 40)",
          700: "rgb(158, 10, 10)",
          800: "rgb(96, 0, 0)",
        },
        deepblue: {
          100: "rgb(231, 239, 255)",
          200: "rgb(207, 223, 255)",
          300: "rgb(183, 207, 255)",
          400: "rgb(135, 175, 255)",
          500: "rgb(85, 139, 247)",
          600: "rgb(43, 106, 231)",
          700: "rgb(13, 72, 191)",
          800: "rgb(0, 40, 120)",
        },

        // UI Tokens
        current: "currentColor",
        transparent: "transparent",
        light: {
          brand: {
            primary: "rgb(253, 100, 70)",
            secondary: "rgb(239, 90, 60)", // orange-500
            tertiary: "rgb(252, 145, 124)",
            muted: "rgb(255, 195, 183)",
          },
          text: {
            primary: "rgb(24, 24, 27)",
            secondary: "rgb(63, 63, 70)",
            muted: "rgb(168, 168, 168)", // black 0.34 on l2 bg
            inverse: "rgb(255, 255, 255)", // white
            link: "rgb(239, 90, 60)", // accent-orange-primary
          },
          cta: {
            DEFAULT: "rgb(255, 255, 255)", // white
            hover: "rgb(235, 235, 235)",
            border: "rgb(217, 217, 217)",

            disabled: "rgb(224, 224, 224)", // black 0.12 on l2 bg
            chip: {
              hover: "rgb(240, 240, 240)", // black 0.06 on l2 bg
            },
          },
          border: {
            primary: "rgb(224, 224, 224)", // black 0.12 on l2 bg
            secondary: "rgb(235, 235, 235)", // black 0.08 on l2 bg
            tertiary: "rgb(245, 245, 245)", // black 0.04 on l2 bg
          },
          bg: {
            l0: "rgb(245, 245, 245)",
            l1: "rgb(250, 250, 250)",
            l2: "rgb(255, 255, 255)", // white
            l3: "rgb(255, 255, 255)", // white
          },
          accent: {
            orange: {
              primary: "rgb(239, 90, 60)", // orange-500
              secondary: "rgb(255, 214, 206)", // orange-400 0.36 on l2 bg
            },
            green: {
              primary: "rgb(0, 160, 94)", // green-500
              secondary: "rgb(214, 237, 220)", // green-400 0.28 on l2 bg
            },
            pink: {
              primary: "rgb(175, 88, 131)", // pink-600
              secondary: "rgb(249, 217, 233)", // pink-400 0.36 on l2 bg
            },
            yellow: {
              primary: "rgb(183, 137, 0)", // yellow-500
              secondary: "rgb(240, 215, 139)", // yellow-400 0.48 on l2 bg
            },
            blue: {
              primary: "rgb(11, 121, 175)", // blue-600
              secondary: "rgb(190, 229, 249)", // blue-400 0.36 on l2 bg
            },
            red: {
              primary: "rgb(215, 40, 40)", // red-600
              secondary: "rgb(255, 215, 215)", // red-400 0.36 on l2 bg
            },
            deepblue: {
              primary: "rgb(13, 72, 191)", // deepblue-700
              secondary: "rgb(212, 226, 255)", // deepblue-400 0.36 on l2 bg
            },
          },
        },
        dark: {
          brand: {
            primary: "rgb(253, 100, 70)",
            secondary: "rgb(255, 142, 120)", // orange-400
            tertiary: "rgb(94, 62, 56)",
            muted: "rgb(54, 42, 40)",
          },
          text: {
            primary: "rgb(255, 255, 255)", // white
            secondary: "rgb(217, 217, 217)",
            muted: "rgb(91, 91, 91)", // white 0.27 on l2 bg
            inverse: "rgb(0, 0, 0)", // black
            link: "rgb(226, 128, 108)", // accent-orange-primary
          },
          cta: {
            DEFAULT: "rgb(40, 40, 40)",
            hover: "rgb(49, 49, 49)",
            border: "rgb(52, 52, 52)",
            disabled: "rgb(58, 58, 58)",
            chip: {
              hover: "rgb(49, 49, 49)", // white 0.08 on l2 bg
            },
          },
          border: {
            primary: "rgb(58, 58, 58)", // black 0.12 on l2 bg
            secondary: "rgb(49, 49, 49)", // black 0.08 on l2 bg
            tertiary: "rgb(40, 40, 40)", // black 0.04 on l2 bg
          },
          bg: {
            l0: "rgb(22, 22, 22)",
            l1: "rgb(26, 26, 26)",
            l2: "rgb(31, 31, 31)",
            l3: "rgb(36, 36, 36)",
          },
          accent: {
            orange: {
              primary: "rgb(226, 128, 108)", // orange-400 0.87 on l2 bg
              secondary: "rgb(112, 71, 63)", // orange-400 0.36 on l2 bg
            },
            green: {
              primary: "rgb(26, 177, 115)", // green-400 0.87 on l2 bg
              secondary: "rgb(29, 78, 58)", // green-400 0.32 on l2 bg
            },
            pink: {
              primary: "rgb(212, 134, 173)", // pink-400 0.87 on l2 bg
              secondary: "rgb(106, 74, 90)", // pink-400 0.36 on l2 bg
            },
            yellow: {
              primary: "rgb(198, 153, 16)", // yellow-400 0.87 on l2 bg
              secondary: "rgb(100, 81, 25)", // yellow-400 0.36 on l2 bg
            },
            blue: {
              primary: "rgb(69, 163, 211)", // blue-400 0.87 on l2 bg
              secondary: "rgb(47, 86, 105)", // blue-400 0.36 on l2 bg
            },
            red: {
              primary: "rgb(226, 129, 129)", // red-400 0.87 on l2 bg
              secondary: "rgb(112, 71, 71)", // red-400 0.36 on l2 bg
            },
            deepblue: {
              primary: "rgb(121, 156, 226)", // deepblue-400 0.87 on l2 bg
              secondary: "rgb(68, 83, 112)", // deepblue-400 0.36 on l2 bg
            },
          },
        },
      },
      screens: {
        "3xl": "1750px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      spacing: {
        "1px": "1px",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
        6: "6px",
      },
      textDecorationThickness: {
        5: "5px",
        6: "6px",
      },
    },
    fontFamily: {
      sans: "Inter",
      mono: "Space Mono",
      brand: "Mont",
      logo: "Hexandcube Icon",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
