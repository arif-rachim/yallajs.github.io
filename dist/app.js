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

  function locationIsDefault() {
    return ['', '#app'].indexOf(window.location.hash) >= 0;
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
    elementOpenStart("style", "");
    elementOpenEnd("style");
    text("\r\n[element='dist.app'] .hidden {font-size: 0;}\r\n[element='dist.app'] .title {font-size: 4rem;}\r\n[element='dist.app'] h4,\r\n[element='dist.app'] h1 {transition: 500ms ease all;}\r\n[element='dist.app'] .footer {position: fixed;left: 0;right: 0;bottom: 0;background-color: #FCFCFC;border-top: 1px solid #EEEEEE;padding : 0.3rem;text-align: center;font-size: 0.9rem;}");
    elementClose("style");
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
    attr("style", "margin-bottom: 0px;");
    attr("class", locationIsDefault() ? '' : 'title');
    elementOpenEnd("h1");
    text("YallaJS");
    elementClose("h1");
    elementOpenStart("h4", "");
    attr("class", locationIsDefault() ? '' : 'hidden');
    elementOpenEnd("h4");
    text("Zero Boilerplate Webapp");
    elementClose("h4");
    elementClose("div");
    elementClose("div");
    if (locationIsDefault()) {
      elementOpenStart("div", "");
      attr("style", "padding-bottom: 4rem");
      elementOpenEnd("div");
      $context["home"].render({}, function(slotName) {});
      elementClose("div");
    }
    if (!locationIsDefault()) {
      elementOpenStart("div", "");
      attr("style", "padding-bottom: 4rem");
      elementOpenEnd("div");
      _slotView("default");
      elementClose("div");
    }
    elementOpenStart("div", "");
    attr("class", "footer");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    text("Copyright © 2017 Arif Rachim.");
    elementClose("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    text("Licensed under the MIT License.");
    elementClose("div");
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