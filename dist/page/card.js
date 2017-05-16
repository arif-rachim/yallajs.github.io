yalla.framework.addComponent("/dist/page/card", (function() {
  var $path = "/dist/page/card";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/card");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\r\n[element='dist.page.card'] {margin: 1rem;box-shadow: 0px 5px 5px 0px #CCCCCC;}\r\n[element='dist.page.card'] .header{border: 1px solid #ECECEC;background-color: #FCFCFC;border-bottom: 1px solid #ECECEC;padding : 0.8rem;}\r\n[element='dist.page.card'] .content{padding: 0.5rem;background-color: black;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.page.card");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "header");
    _elementOpenEnd("div");
    _slotView("title");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "content");
    _elementOpenEnd("div");
    _slotView("content");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());