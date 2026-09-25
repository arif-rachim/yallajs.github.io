# yallajs.github.io

Source of the former project website for YallaJS, a small ES6 template-literal templating library. The site is a static landing page with a Hello World guide, a TodoMVC example and a benchmark page; the library itself is loaded from npm via unpkg (`https://unpkg.com/yallajs`).

> Last updated in 2017. Not maintained. The custom domain in `CNAME` (yallajs.io) no longer serves this site.

## Contents

- `index.html`: landing page with a getting-started example (`html` and `render` from a `Context`), links to the examples and an embedded CodePen
- `todomvc.html`: TodoMVC implemented with YallaJS, storing todos in `localStorage` (source in `src/todomvc.js`)
- `benchmark.html`: keyed implementation for Stefan Krause's JS framework benchmark (source in `src/yalla-benchmark.js`)
- `benchmark-result.html`: static table of benchmark results
- `design/`: Macaw design files and exported mockups for the site
- `test/browser-test.js`: Selenium WebDriver script for running the benchmark page on BrowserStack

## Tech stack

HTML · CSS · JavaScript (ES6) · YallaJS · Babel 6 · Prism (code highlighting) · Bootstrap 4 beta (CDN)

## Development

The site is static; open the HTML files through any local web server.

```bash
npm install
npm run build     # transpiles src/*.js to js/ with Babel
```

The browser test needs BrowserStack credentials; they should be supplied through environment variables rather than written into `test/browser-test.js`.

## Project layout

```
index.html, todomvc.html, benchmark.html, benchmark-result.html
src/          ES6 sources for the TodoMVC and benchmark examples
js/           transpiled scripts plus jQuery and Prism
css/          site, TodoMVC and Prism styles
images/       logos and screenshots
design/       Macaw design files
test/         BrowserStack Selenium script
CNAME         GitHub Pages custom domain
```
