yalla.framework.addComponent("/dist/page/home", (function() {
  var $path = "/dist/page/home";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/home");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var videoWidth = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return Math.min((w - 40), 1000);
  };

  var videoHeight = function() {
    return videoWidth() * (315 / 560);
  };


  function $render(_data, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.page.home");
    _attr("style", "text-align: center;margin-top: 1rem");
    _elementOpenEnd("div");
    _elementOpenStart("p", "");
    _attr("style", "margin-bottom: 0px;margin-left: 1rem;margin-right: 1rem");
    _elementOpenEnd("p");
    _text("Yalla JS is a javascript client framework for        building Mobile, Tablet and Web application with great ease and simplicity.");
    _elementOpenStart("a", "");
    _attr("href", "#!/app/page.getting-started");
    _attr("class", "btn btn-primary");
    _attr("style", "margin-left: 1rem");
    _elementOpenEnd("a");
    _text("Get Started.");
    _elementClose("a");
    _elementClose("p");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("element", "dist.page.home");
    _attr("style", "text-align: center;margin-top:1rem");
    _elementOpenEnd("div");
    _elementOpenStart("iframe", "");
    _attr("width", videoWidth());
    _attr("height", videoHeight());
    _attr("src", "https://www.youtube.com/embed/NpRFvL6wTfU");
    _attr("frameborder", "0");
    _attr("allowfullscreen", "allowfullscreen");
    _attr("style", "margin: auto;");
    _elementOpenEnd("iframe");
    _elementClose("iframe");
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