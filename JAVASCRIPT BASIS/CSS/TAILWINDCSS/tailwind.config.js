/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* in de content moet de html staan, er wordt alleen geladen wat er gebruikt wordt
  ./ in deze map
  *.html zoek alle bestanden die eindigen op .html */