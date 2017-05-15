yalla.framework.addComponent("/dist/page/getting-started", (function() {
  var $path = "/dist/page/getting-started";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/getting-started");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

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
    elementOpenStart("style", "");
    elementOpenEnd("style");
    text("\r\n[element='dist.page.getting-started'] h1 {font-size:2.2rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] h2 {font-size:2.2rem;border-bottom: 1px solid #CCCCCC;padding-top: 2rem;margin-bottom: 1.2rem;}\r\n[element='dist.page.getting-started'] h3 {font-size:1.6rem;margin-bottom: 1rem;margin-top: 2rem;border-bottom: 1px solid #EEEEEE;}\r\n[element='dist.page.getting-started'] h4 {font-size:1.6rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] h5 {font-size:1.2rem;font-weight: bolder;}\r\n[element='dist.page.getting-started'] pre{background-color: #EEEEEE;padding: 1em;border-radius: 3px;}");
    elementClose("style");
    elementOpenStart("div", "");
    attr("element", "dist.page.getting-started");
    attr("style", "text-align: center;margin-top: 1rem");
    elementOpenEnd("div");
    elementOpenStart("button", "");
    attr("style", "margin-left: 1rem");
    attr("onclick", function(event) {
      return backToMain()
    });
    attr("class", "btn btn-primary");
    elementOpenEnd("button");
    text("Back to Main");
    elementClose("button");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.page.getting-started");
    attr("class", "container");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    attr("id", "content-text");
    elementOpenEnd("div");
    elementClose("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {}
      var promise = loadText();
      if (promise && typeof promise == "object" && "then" in promise) {
        skip();
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
    elementClose("div");
    elementClose("div");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());