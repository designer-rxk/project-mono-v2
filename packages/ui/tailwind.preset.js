import defaultTheme from "tailwindcss/defaultTheme";
import tailwindPlugin from "tailwindcss/plugin";

const pxToRem = (value) => `${value / 16}rem`;

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontSize: {
      // Display
      d1: [
        pxToRem(64),
        {
          lineHeight: pxToRem(68),
          fontWeight: 500,
        },
      ],
      "d1-m": [
        pxToRem(36),
        {
          lineHeight: pxToRem(38),
          fontWeight: 500,
        },
      ],

      // Heading

      h1: [
        pxToRem(56),
        {
          lineHeight: pxToRem(58.24),
          fontWeight: 500,
        },
      ],
      "h1-m": [
        pxToRem(32),
        {
          lineHeight: pxToRem(33.28),
          fontWeight: 500,
        },
      ],

      h2: [
        pxToRem(48),
        {
          lineHeight: pxToRem(49.92),
          fontWeight: 500,
        },
      ],
      "h2-m": [
        pxToRem(28),
        {
          lineHeight: pxToRem(29.12),
          fontWeight: 500,
        },
      ],

      h3: [
        pxToRem(40),
        {
          lineHeight: pxToRem(41.6),
          fontWeight: 500,
        },
      ],
      "h3-m": [
        pxToRem(24),
        {
          lineHeight: pxToRem(24.96),
          fontWeight: 500,
        },
      ],

      h4: [
        pxToRem(32),
        {
          lineHeight: pxToRem(33.28),
          fontWeight: 500,
        },
      ],
      "h4-m": [
        pxToRem(20),
        {
          lineHeight: pxToRem(20.8),
          fontWeight: 500,
        },
      ],

      h5: [
        pxToRem(24),
        {
          lineHeight: pxToRem(24.96),
          fontWeight: 500,
        },
      ],
      "h5-m": [
        pxToRem(18),
        {
          lineHeight: pxToRem(18.72),
          fontWeight: 500,
        },
      ],

      h6: [
        pxToRem(18),
        {
          lineHeight: pxToRem(18.72),
          fontWeight: 500,
        },
      ],
      "h6-m": [
        pxToRem(16),
        {
          lineHeight: pxToRem(16.64),
          fontWeight: 500,
        },
      ],

      // Body Regular

      "p-reg-lg": [
        pxToRem(24),
        {
          lineHeight: pxToRem(30.72),
          fontWeight: 400,
        },
      ],
      "p-reg-lg-m": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 400,
        },
      ],

      "p-reg-md": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 400,
        },
      ],
      "p-reg-md-m": [
        pxToRem(18),
        {
          lineHeight: pxToRem(23.04),
          fontWeight: 400,
        },
      ],

      "p-reg-base": [
        pxToRem(16),
        {
          lineHeight: pxToRem(20.48),
          fontWeight: 400,
        },
      ],

      "p-reg-sm": [
        pxToRem(14),
        {
          lineHeight: pxToRem(17.92),
          fontWeight: 400,
        },
      ],

      "p-reg-xs": [
        pxToRem(12),
        {
          lineHeight: pxToRem(15.36),
          fontWeight: 400,
        },
      ],

      // Regular link

      "p-reg-link-lg": [
        pxToRem(24),
        {
          lineHeight: pxToRem(30.72),
          fontWeight: 400,
        },
      ],
      "p-reg-link-lg-m": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 400,
        },
      ],

      "p-reg-link-md": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 400,
        },
      ],
      "p-reg-link-md-m": [
        pxToRem(18),
        {
          lineHeight: pxToRem(23.04),
          fontWeight: 400,
        },
      ],

      "p-reg-link-base": [
        pxToRem(16),
        {
          lineHeight: pxToRem(20.48),
          fontWeight: 400,
        },
      ],

      "p-reg-link-sm": [
        pxToRem(14),
        {
          lineHeight: pxToRem(17.92),
          fontWeight: 400,
        },
      ],

      "p-reg-link-xs": [
        pxToRem(12),
        {
          lineHeight: pxToRem(15.36),
          fontWeight: 400,
        },
      ],

      // Bold Default & Bold Link

      "p-bld-link-lg": [
        pxToRem(24),
        {
          lineHeight: pxToRem(30.72),
          fontWeight: 600,
        },
      ],
      "p-bld-link-lg-m": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 600,
        },
      ],

      "p-bld-link-md": [
        pxToRem(20),
        {
          lineHeight: pxToRem(25.6),
          fontWeight: 600,
        },
      ],
      "p-bld-link-md-m": [
        pxToRem(18),
        {
          lineHeight: pxToRem(23.04),
          fontWeight: 600,
        },
      ],

      "p-bld-link-base": [
        pxToRem(16),
        {
          lineHeight: pxToRem(20.48),
          fontWeight: 600,
        },
      ],

      "p-bld-link-sm": [
        pxToRem(14),
        {
          lineHeight: pxToRem(17.92),
          fontWeight: 600,
        },
      ],

      "p-bld-link-xs": [
        pxToRem(12),
        {
          lineHeight: pxToRem(15.36),
          fontWeight: 600,
        },
      ],

      // Caption

      "cap-md": [
        pxToRem(20),
        {
          lineHeight: pxToRem(22.4),
          fontWeight: 400,
        },
      ],
      "cap-base": [
        pxToRem(16),
        {
          lineHeight: pxToRem(17.92),
          fontWeight: 400,
        },
      ],
      "cap-sm": [
        pxToRem(14),
        {
          lineHeight: pxToRem(15.68),
          fontWeight: 400,
        },
      ],
      "cap-xs": [
        pxToRem(12),
        {
          lineHeight: pxToRem(13.44),
          fontWeight: 400,
        },
      ],
      "cap-xxs": [
        pxToRem(10),
        {
          lineHeight: pxToRem(11.2),
          fontWeight: 400,
        },
      ],

      // Label

      "label-md": [
        pxToRem(20),
        {
          lineHeight: pxToRem(22.4),
          fontWeight: 500,
        },
      ],
      "label-base": [
        pxToRem(16),
        {
          lineHeight: pxToRem(17.92),
          fontWeight: 500,
        },
      ],
      "label-sm": [
        pxToRem(14),
        {
          lineHeight: pxToRem(15.68),
          fontWeight: 500,
        },
      ],
      "label-xs": [
        pxToRem(12),
        {
          lineHeight: pxToRem(13.44),
          fontWeight: 500,
        },
      ],
      "label-xxs": [
        pxToRem(10),
        {
          lineHeight: pxToRem(11.2),
          fontWeight: 500,
        },
      ],
    },
    fontFamily: {
      archivo: ["var(--font-archivo)", ...defaultTheme.fontFamily.sans],
      roboto: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      sourceCodePro: [
        "var(--font-source-code-pro)",
        ...defaultTheme.fontFamily.mono,
      ],
    },
    extend: {
      spacing: {
        0.25: pxToRem(1),
        0.5: pxToRem(2),
        0.6625: pxToRem(2.65),
        0.75: pxToRem(3),
        0.875: pxToRem(3.5),
        1.1: pxToRem(4.4),
        1.875: pxToRem(7.5),
        2.375: pxToRem(9.5),
        3.75: pxToRem(15),
        4.75: pxToRem(19),
        12: pxToRem(48),
        13: pxToRem(52),
        16: pxToRem(64),
        21: pxToRem(84),
        22: pxToRem(88),
        26: pxToRem(104),
        27: pxToRem(108),
        30: pxToRem(120),
        34: pxToRem(136),
        38: pxToRem(152),
        58: pxToRem(232),
        68.5: pxToRem(274),
        76: pxToRem(304),
        138: pxToRem(552),
        306: pxToRem(1224),
        338: pxToRem(1352),
        360: pxToRem(1440),
        "1/2-contained": "calc(50% - 4px)",
      },
      borderRadius: {
        8: pxToRem(32),
      },
      boxShadow: {
        600: `${["0px 25px 40px rgba(0, 0, 0, 0.09)"].join(", ")};`,
        500: `${[
          "0px 10px 10px rgba(16, 24, 64, 0.04)",
          "0px 20px 25px rgba(16, 24, 64, 0.10)",
          "0px -2px 15px rgba(16, 24, 64, 0.03)",
        ].join(", ")};`,
        400: `${[
          "0px 4px 6px rgba(16, 24, 64, 0.05)",
          "0px 10px 15px rgba(16, 24, 64, 0.10)",
        ].join(", ")};`,
        200: "0px 5px 10px rgba(16, 24, 64, 0.06)",
      },
      colors: {
        transparent: "transparent",
      },
      aspectRatio: {
        logo: "3.814389101745424/1",
      },
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
    },
  },
  plugins: [
    tailwindPlugin(({ addUtilities }) => {
      addUtilities({
        ".focus-style-light": {
          outline: "none",
          boxShadow: `${[
            "0px 0px 0px 1px #BFBDBB",
            "0px 0px 0px 2px #000000",
            "0px 0px 0px 4px #EBF0FF",
          ].join(", ")};`,
        },
        ".focus-style-dark": {
          outline: "none",
          boxShadow: `${[
            "0px 0px 0px 1px #BFBDBB",
            "0px 0px 0px 2px #FFFFFF",
            "0px 0px 0px 4px #3366FF",
          ].join(", ")};`,
        },
      });
    }),
  ],
};
