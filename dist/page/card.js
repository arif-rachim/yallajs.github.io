yalla.framework.addComponent("/dist/page/card", (function() {
  var $path = "/dist/page/card";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/card");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    elementOpenStart("style", "");
    elementOpenEnd("style");
    text("\r\n[element='dist.page.card'] {border : 1px solid #ECECEC;border-radius: 3px;margin: 1rem;box-shadow: 0px 5px 10px -3px #ECECEC;}\r\n[element='dist.page.card'] .header{background-color: #FCFCFC;border-bottom: 1px solid #ECECEC;padding : 0.8rem;}\r\n[element='dist.page.card'] .content{padding: 0.8rem;}");
    elementClose("style");
    elementOpenStart("div", "");
    attr("element", "dist.page.card");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    attr("class", "header");
    elementOpenEnd("div");
    _slotView("title");
    elementClose("div");
    elementOpenStart("div", "");
    attr("class", "content");
    elementOpenEnd("div");
    _slotView("content");
    elementClose("div");
    elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());