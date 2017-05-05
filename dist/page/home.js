yalla.framework.addComponent("/dist/page/home", (function() {
  var $path = "/dist/page/home";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/home");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;


  var videoWidth = function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return Math.min((w - 40), 1000);
  };

  var videoHeight = function() {
    return videoWidth() * (315 / 560);
  };


  function redirect(page) {
    window.location.hash = '#app/page.' + page;
  }




  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.page.home");
    attr("style", "text-align: center;margin-top: 1rem");
    elementOpenEnd("div");
    elementOpenStart("p", "");
    attr("style", "margin-bottom: 0px;margin-left: 1rem;margin-right: 1rem");
    elementOpenEnd("p");
    text("Yalla JS is a javascript client framework for        building Mobile, Tablet and Web application with great ease and simplicity.");
    elementOpenStart("button", "");
    attr("style", "margin-left: 1rem");
    attr("onclick", function(event) {
      return redirect('get-started')
    });
    attr("class", "btn btn-primary");
    elementOpenEnd("button");
    text("Get Started");
    elementClose("button");
    elementClose("p");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.page.home");
    attr("style", "text-align: center;margin-top:1rem");
    elementOpenEnd("div");
    elementOpenStart("iframe", "");
    attr("width", videoWidth());
    attr("height", videoHeight());
    attr("src", "https://www.youtube.com/embed/NpRFvL6wTfU");
    attr("frameborder", "0");
    attr("allowfullscreen", "allowfullscreen");
    attr("style", "margin: auto;");
    elementOpenEnd("iframe");
    elementClose("iframe");
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