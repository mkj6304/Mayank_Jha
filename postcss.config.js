module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // 👈 Tailwind v4 uses this plugin
    require('autoprefixer'),
  ],
};
