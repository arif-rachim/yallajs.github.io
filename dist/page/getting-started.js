yalla.framework.addComponent("/dist/page/getting-started", (function() {
  var $path = "/dist/page/getting-started";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/getting-started");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var converter = new showdown.Converter();

  function loadText() {
    return new Promise(function(resolve) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', './asset/README.md', false);
      xmlhttp.send();
      document.getElementById('content-text').innerHTML = converter.makeHtml(xmlhttp.responseText);
      resolve(true);
    });
  }

  function backToMain() {
    window.location.hash = '#app';
  }

  function $render(_data, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\r\n[element='dist.page.getting-started'] h1 {font-size:2.2rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] h2 {font-size:2.2rem;border-bottom: 1px solid #CCCCCC;padding-top: 2rem;margin-bottom: 1.2rem;}\r\n[element='dist.page.getting-started'] h3 {font-size:1.6rem;margin-bottom: 1rem;margin-top: 2rem;border-bottom: 1px solid #EEEEEE;}\r\n[element='dist.page.getting-started'] h4 {font-size:1.6rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] h5 {font-size:1.2rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] pre{background-color: #EEEEEE;padding: 1em;border-radius: 3px;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.page.getting-started");
    _attr("style", "text-align: center;margin-top: 1rem");
    _elementOpenEnd("div");
    _elementOpenStart("a", "");
    _attr("href", "#!/app");
    _attr("class", "btn btn-primary");
    _attr("style", "margin-left: 1rem");
    _elementOpenEnd("a");
    _text("Home");
    _elementClose("a");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("element", "dist.page.getting-started");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("id", "content-text");
    _elementOpenEnd("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {}
      var promise = loadText();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(node, _result)
          });
        });
      } else {
        asyncFunc__1.call(node, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());