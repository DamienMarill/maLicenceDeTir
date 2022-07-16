const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const fftirColors = {
  'blue': '#2b599e',
  'white': '#ffffff',
  'red': '#ed2939',
}

function genAlert(theme, colors){
  let alerts = {};

  for (const [key, value] of Object.entries(colors)) {
    if (typeof value == 'object') {
      alerts['.alert-'+key] = {
        padding: theme('spacing.2'),
        paddingRight: theme('spacing.3'),
        paddingLeft: theme('spacing.3'),
        borderRadius: theme('borderRadius.lg'),
        boxShadowColor: theme('colors.'+key+'.300'),
        transition: 'opacity 300ms ease-in-out',
        backgroundColor: theme('colors.'+key+'.200'),
        color: theme('colors.'+key+'.900'),
        '& fa-icon': {
          color: theme('colors.'+key+'.500'),
        }
      }
    }
  }

  return alerts;
}

function genBtn(theme, colors){
  let buttons = {
    '.btn': {
      padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
      borderRadius: theme('borderRadius.md'),
      transition: 'all 300ms ease-in-out',
      fontSize: theme('spacing.4'),
      '&:focus': {
        outline: '2px solid transparent',
      },
      '&:focus-within': {
        outline: '2px solid transparent',
      },
      '&:active': {
        outline: '2px solid transparent',
      },
      '&:target': {
        outline: '2px solid transparent',
      }
    }
  }

  for (const [key, value] of Object.entries(colors)){
    if (typeof value == 'object') {
      buttons['.btn-' + key] = {
        backgroundColor: theme('colors.' + key + '.700'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.' + key + '.800'),
        },
        '&:focus': {
          boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) ' + theme('colors.' + key + '.200'),
        },
        '&:disabled': {
          opacity: '0.5',
        }
      }

      buttons['.btn-outline-' + key] = {
        backgroundColor: theme('colors.transparent'),
        color: theme('colors.' + key + '.500'),
        border: 'solid ' + theme('colors.' + key + '.500'),
        '&:hover': {
          backgroundColor: theme('colors.' + key + '.500'),
          color: theme('colors.white'),
        },
        '&:focus': {
          boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) ' + theme('colors.' + key + '.200'),
        },
        '&:disabled': {
          opacity: '0.5',
        }
      }

      buttons['.btn-gradient-' + key] = {
        background: 'linear-gradient(55deg, ' + theme('colors.' + key + '.400') + ', ' + theme('colors.' + key + '.600') + ')',
        color: theme('colors.white'),
        '&:hover': {
          background: 'linear-gradient(55deg, ' + theme('colors.' + key + '.500') + ', ' + theme('colors.' + key + '.700') + ')',
        },
        '&:focus': {
          boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) ' + theme('colors.' + key + '.200'),
        },
        '&:disabled': {
          opacity: '0.5',
        }
      }
    }
  }

  return buttons;
}

module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.{html,ts}',
    ],
    options: {
      safelist: [
        {
          pattern: /alert-(danger|success|warning|info|primary|secondary)/
        },
        {
          pattern: /shadow-[a-z]*-[0-9]*/
        },
        {
          pattern: /bg-[a-z]*-[0-9]*/
        },
        {
          pattern: /text-[a-z]*-[0-9]*/
        }
      ]
    }
  },
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black : colors.black,
      white : colors.white,
      rose : colors.rose,
      pink : colors.pink,
      fuchsia : colors.fuchsia,
      purple : colors.purple,
      violet : colors.violet,
      indigo : colors.indigo,
      blue : colors.blue,
      sky : colors.sky,
      cyan : colors.cyan,
      teal : colors.teal,
      emerald : colors.emerald,
      green : colors.green,
      lime : colors.lime,
      yellow : colors.yellow,
      amber : colors.amber,
      orange : colors.orange,
      red : colors.red,
      stone : colors.stone,
      neutral : colors.neutral,
      // gray : colors.gray,
      gray : colors.gray,
      slate : colors.slate,
      dark: colors.stone,
      primary: colors.sky,
      secondary: colors.orange,
      success: colors.green,
      warning: colors.amber,
      danger: colors.red,
      info: colors.cyan,
      fftir: fftirColors,
    },
    screens: {
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1792px',
      '4xl': '2048px'
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   check: "url('/assets/imgs/check.svg')",
      //   circle: "url('/assets/imgs/circle.svg')",
      // }),
    },
    minHeight: {
      '0': '0px',
      'full': '100%',
      'screen': '100vh',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '20': '6rem',
      '44': '11rem'
    }
  },
  variants: {},
  plugins: [
    plugin(function ({addComponents, theme}) {
      addComponents(genAlert(theme, module.exports.theme.colors));
      addComponents(genBtn(theme, module.exports.theme.colors));
    }),
  ],
};
