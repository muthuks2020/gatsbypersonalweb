// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-cover-letter-js": preferDefault(require("/home/muthukumaraswamy/mygir/src/templates/cover-letter.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/muthukumaraswamy/mygir/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/muthukumaraswamy/mygir/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/muthukumaraswamy/mygir/src/pages/index.js")),
  "component---src-pages-resume-js": preferDefault(require("/home/muthukumaraswamy/mygir/src/pages/resume.js"))
}

