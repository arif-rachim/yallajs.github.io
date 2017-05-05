yalla.framework.addComponent("/dist/app", (function() {
  var $path = "/dist/app";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/app");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;


  var videoWidth = 1000;

  var videoHeight = function() {
    return videoWidth * (315 / 560);
  };


  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener('resize', debounce(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    videoWidth = Math.min((w - 20), 1000);
    $patchChanges();
  }, 100, false));


  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.app");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    attr("style", "background-color: #FCFCFC;border-bottom: 1px solid #EEEEEE");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    attr("style", "text-align: center;margin: auto;padding-top:10px");
    elementOpenEnd("div");
    elementOpenStart("h1", "");
    attr("style", "margin-bottom: 0px;margin-top: 0px");
    elementOpenEnd("h1");
    text("YallaJS");
    elementClose("h1");
    elementOpenStart("h4", "");
    elementOpenEnd("h4");
    text("Zero Boilerplate Webapp");
    elementClose("h4");
    elementClose("div");
    elementClose("div");
    elementOpenStart("div", "");
    attr("style", "text-align: center;margin-top: 1rem");
    elementOpenEnd("div");
    elementOpenStart("p", "");
    attr("style", "margin-bottom: 0px");
    elementOpenEnd("p");
    text("Yalla JS is a javascript client framework for building Mobile, Tablet and Web application with great ease and simplicity.");
    elementOpenStart("button", "");
    attr("style", "margin-left: 1rem");
    elementOpenEnd("button");
    text("Get Started");
    elementClose("button");
    elementClose("p");
    elementClose("div");
    elementOpenStart("div", "");
    attr("onresize", function(event) {
      return onRowResized()
    });
    attr("style", "text-align: center");
    elementOpenEnd("div");
    elementOpenStart("iframe", "");
    attr("width", videoWidth);
    attr("height", videoHeight());
    attr("src", "https://www.youtube.com/embed/NpRFvL6wTfU");
    attr("frameborder", "0");
    attr("allowfullscreen", "allowfullscreen");
    attr("style", "margin: auto;");
    elementOpenEnd("iframe");
    elementClose("iframe");
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