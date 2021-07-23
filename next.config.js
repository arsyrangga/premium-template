const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
module.exports = withCSS(withSass());

// module.exports = {
//   reactStrictMode: true,
// }
