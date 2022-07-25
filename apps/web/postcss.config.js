import autoprefixer from 'autoprefixer';
import postcss_import from 'postcss-import';

const config = {
  plugins: [autoprefixer(), postcss_import()]
};

export default config;
