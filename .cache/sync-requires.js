const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/k/pocketchange/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/page-2.js"))),
  "component---src-pages-wallet-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/wallet.js"))),
  "component---src-pages-library-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/library.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/about.js"))),
  "component---src-pages-updates-js": hot(preferDefault(require("/Users/k/pocketchange/src/pages/updates.js")))
}

