# yallajs.github.io

This repository holds the source of the former project website for YallaJS, a small ES6 templating library that renders HTML from tagged template literals (`html` and `render` taken from a `Context`). The site was built to introduce the library to front-end developers: a landing page with a Hello World example and an embedded CodePen, a TodoMVC implementation that stores todos in `localStorage`, and a keyed implementation for Stefan Krause's JavaScript framework benchmark together with a static results table. It is a plain static site of HTML, CSS and jQuery, with the example sources written in ES6 and transpiled to ES5 by Babel 6; the library itself is loaded from npm through unpkg. The site was last worked on in 2017 and is kept as an archive of the project's public face; it is not maintained.

> Last updated in 2017. Not maintained. The custom domain set in `CNAME` no longer serves this site (it now points to an unrelated site), so GitHub Pages for this repository has no working address.

## Contents

- `index.html`: landing page with a getting-started example, links to the examples and an embedded CodePen
- `todomvc.html`: TodoMVC implemented with YallaJS, storing todos in `localStorage` (source in `src/todomvc.js`)
- `benchmark.html`: keyed implementation for Stefan Krause's JS framework benchmark (source in `src/yalla-benchmark.js`)
- `benchmark-result.html`: static table of keyed benchmark results
- `design/`: Macaw design files and exported mockups for three iterations of the site (`yalla`, `yallajs`, `yalla-new`)
- `test/browser-test.js`: Selenium WebDriver script that opens the benchmark page on BrowserStack

The getting-started example shown on the landing page:

```js
let {html} = new Context();
render(html`<div>Hello World ${new Date()}</div>`, document.body);
```

The library is pulled in with `<script src="https://unpkg.com/yallajs"></script>`.

## Tech stack

HTML · CSS · JavaScript (ES6) · YallaJS · Babel 6 · jQuery · Prism (code highlighting) · Bootstrap 4 beta (CDN)

## Getting started

The site is static; serve the repository root with any local web server and open the HTML files.

```bash
npm install
npm run build     # transpiles src/*.js to js/ with Babel (preset "env")
```

The browser test needs a BrowserStack account and the `selenium-webdriver` dev dependency. It targets the old custom domain, so the URL in the script has to be changed before it can be used.

## Project structure

```text
index.html, todomvc.html, benchmark.html, benchmark-result.html
src/          ES6 sources for the TodoMVC and benchmark examples
js/           transpiled scripts plus jQuery and Prism
css/          site, TodoMVC and Prism styles
images/       logos and screenshots
design/       Macaw design files
test/         BrowserStack Selenium script
CNAME         GitHub Pages custom domain (no longer valid)
```
