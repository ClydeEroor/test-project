import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      violetBlue: '#5423E7',
      lightRose: '#FDDDF8',
      rose: '#DB0BB9',
      lightGreen: '#DFF8EA',
      green: '#2DCA72',
      berouse: '#B2EECC',
      blackPrimary: '#121217',
      lightBrown: '#FFB399',
      error: '#FF0000',
      purpure: '#4E3D81',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
};
export default config;
