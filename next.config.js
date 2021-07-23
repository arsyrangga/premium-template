const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");

(module.exports = withCSS(withSass())),
  withPWA({
    pwa: {
      dest: "public",
    },
  });

// module.exports = {
//   reactStrictMode: true,
// }
