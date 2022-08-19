const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,html,htm}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
      },
      fontFamily: {
      },
      letterSpacing: {
      },
      fontWeight: {
      },
      fontSize: {
      },
      borderRadius: {
      },
      backgroundSize: {
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        inherit: 'inherit',
        'desert-storm': '#F4F3F2',
        'orange': '#FF6633',
        'apricot-peach': '#FCD5BA',
		'grayscale-hard': '#8F8F8F',
		'grayscale-light':'#F3F2F1',
		'surface': '#414141',
		'mantis': '#70C05B',
		'silver': '#BFBFBF',
		'mine-shaft': '#232323'
      },
    boxShadow: {
      },
      gridTemplateAreas: {
        'layout': [
          'header',
          'main',
          'footer',
        ],
      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a11': 'auto 1fr 1fr',
        '11a': '1fr 1fr auto',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'a1aa': 'auto 1fr repeat(2, auto)',
        'full': '100%',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a11': 'auto 1fr 1fr',
        '11a': '1fr 1fr auto',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'a1aa': 'auto 1fr repeat(2, auto)',
        'full': '100%',
      },
	  animation: {
		'opacity-enter-active': 'opacity .3s',
		'opacity-leave-active': 'opacity .3s reverse',
	},
	keyframes: {
		opacity: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 }
		},
	}
	},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
