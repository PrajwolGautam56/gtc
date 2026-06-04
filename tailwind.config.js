/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C8281E',
        navy: '#0D1B2A',
        gold: '#D4A024',
        'off-white': '#F8F6F3',
      },
      fontFamily: {
        heading: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'hero-tight': '-0.03em',
        'eyebrow': '0.18em',
      },
      lineHeight: {
        hero: '1.08',
      },
      boxShadow: {
        card: '0 12px 40px rgba(13, 27, 42, 0.12)',
        'card-hover': '0 20px 50px rgba(13, 27, 42, 0.18)',
        nav: '0 4px 24px rgba(13, 27, 42, 0.1)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(212, 160, 36, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 160, 36, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}
