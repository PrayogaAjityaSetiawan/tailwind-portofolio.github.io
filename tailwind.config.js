// const { default: plugin } = require('tailwindcss');
const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#FECD45',
        'secondary': '#2568FB',
        'all': '#000000'
      },
    fontFamily: {
      'body': ['Inter']
    },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
        '.vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.mixed': {
          'text-orientation': 'mixed'
        },
        '.upright': {
          'text-orientation': 'upright'
        }
      })
    })
  ]
}

