import autoprefixer from 'autoprefixer';
import postcss_import from 'postcss-import';
import tailwindcss from 'tailwindcss';

const config = {
  plugins: [tailwindcss(), autoprefixer(), postcss_import()]
};

export default config;
