// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-cover-letter-js": () => import("/home/muthukumaraswamy/mygir/src/templates/cover-letter.js" /* webpackChunkName: "component---src-templates-cover-letter-js" */),
  "component---cache-dev-404-page-js": () => import("/home/muthukumaraswamy/mygir/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/muthukumaraswamy/mygir/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/muthukumaraswamy/mygir/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-resume-js": () => import("/home/muthukumaraswamy/mygir/src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

exports.data = () => import("/home/muthukumaraswamy/mygir/.cache/data.json")

