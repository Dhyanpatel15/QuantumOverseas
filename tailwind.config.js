/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#e20935',
          primaryHover: '#c0072c',
          secondary: '#101A29',
          secondaryDark: '#0b121c',
          accent: '#246BFD',
          accentHover: '#1a54cc',
          dark: '#16171a',
          heading: '#0F0D1D',
          body: '#585858',
          muted: '#8A8C94',
          lightBg: '#f5f5f7',
          border: '#eeeff4',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },

        heroSlideFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(90px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        heroRightShape: {
          '0%': {
            opacity: '0',
            transform: 'translateX(80px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        heroHoneycomb: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        heroSlideBadge:
          'heroSlideFromRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards',
        heroSlideTitle:
          'heroSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards',
        heroSlideText:
          'heroSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.32s forwards',
        heroSlideBtn:
          'heroSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards',
        heroRightShape:
          'heroRightShape 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        heroHoneycomb:
          'heroHoneycomb 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },

  plugins: [],
};
