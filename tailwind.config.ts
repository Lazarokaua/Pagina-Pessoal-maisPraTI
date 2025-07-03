// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // É aqui que você adicionará suas cores
      colors: {
        // Exemplo de uma paleta de cores para a sua "marca"
        'branding': '#23C6FF'
      },
    },
  },
  plugins: [],
}
export default config