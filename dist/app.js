yalla.framework.addComponent("/dist/app", (function() {
  var $path = "/dist/app";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/app");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function locationIsDefault() {
    return ['', '#app', '#!app', '#!/app'].indexOf(window.location.hash) >= 0;
  }

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
    $patchChanges();
  }, 100, false));


  function $render(_data, _slotView) {
    $context["home"] = $inject("/page/home");
    var home = $context["home"];
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\r\n[element='dist.app'] .hidden {font-size: 0;}\r\n[element='dist.app'] .title {font-size: 4rem;}\r\n[element='dist.app'] h4,\r\n[element='dist.app'] h1 {transition: 500ms ease all;}\r\n[element='dist.app'] .footer {position: fixed;left: 0;right: 0;bottom: 0;background-color: #FCFCFC;border-top: 1px solid #EEEEEE;padding : 0.3rem;text-align: center;font-size: 0.9rem;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.app");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("style", "background-color: #FCFCFC;border-bottom: 1px solid #EEEEEE");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("style", "text-align: center;margin: auto;padding-top:10px");
    _elementOpenEnd("div");
    _elementOpenStart("h1", "");
    _attr("style", "margin-bottom: 0px;");
    _attr("class", locationIsDefault() ? '' : 'title');
    _elementOpenEnd("h1");
    _text("YallaJS");
    _elementClose("h1");
    _elementOpenStart("h4", "");
    _attr("class", locationIsDefault() ? '' : 'hidden');
    _elementOpenEnd("h4");
    _text("Zero Boilerplate Webapp");
    _elementClose("h4");
    _elementClose("div");
    _elementClose("div");
    if (locationIsDefault()) {
      _elementOpenStart("div", "");
      _attr("style", "padding-bottom: 4rem");
      _elementOpenEnd("div");
      $context["home"].render({}, function(slotName) {});
      _elementClose("div");
    }
    if (!locationIsDefault()) {
      _elementOpenStart("div", "");
      _attr("style", "padding-bottom: 4rem");
      _elementOpenEnd("div");
      _slotView("default");
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _attr("class", "footer");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    _text("Copyright © 2017 Arif Rachim.");
    _elementClose("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    _text("Licensed under MIT License.");
    _elementClose("div");
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