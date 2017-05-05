yalla.framework.addComponent("/dist/page/get-started", (function() {
  var $path = "/dist/page/get-started";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/page/get-started");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  var tutorials = [{
      title: 'YallaJS Installation',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'YallaJS Expression',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Calling Component from browser\'s address bar',
      description: 'In this tutorial you will learn how to call component from browser address bar'
    },
    {
      title: 'Chaining sub-components from the browser\'s address bar',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Accessing component properties using prefix $',
      description: 'In this tutorial you will learn how to call component from browser address bar'
    },
    {
      title: 'Component Dependency Injection',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Content Projection',
      description: 'In this tutorial you will learn how to call component from browser address bar'
    },
    {
      title: 'Listening on Event',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Publishing component Event',
      description: 'In this tutorial you will learn how to call component from browser address bar'
    },
    {
      title: 'Iterate array with for.each',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Conditional Rendering with if.bind',
      description: 'In this tutorial you will learn how to call component from browser address bar'
    },
    {
      title: 'Repaint changes',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    },
    {
      title: 'Asynchronous Data Load',
      description: 'In this tutorial you will learn how YallaJS Expression work'
    }
  ];


  function videoHeight() {
    return (document.getElementById('tutorialPanel').clientWidth - 90) * (315 / 560);
  }

  function backToMain() {
    window.location.hash = '#app';
  }

  function $render(_data, _slotView) {
    $context["card"] = $inject("/page/card");
    var card = $context["card"];
    elementOpenStart("div", "");
    attr("element", "dist.page.get-started");
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
    attr("element", "dist.page.get-started");
    attr("class", "container");
    elementOpenEnd("div");
    elementOpenStart("h3", "");
    elementOpenEnd("h3");
    text("Tutorial");
    elementClose("h3");
    elementOpenStart("hr", "");
    elementOpenEnd("hr");
    elementClose("hr");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("This is the guide for learning YallaJS. There are 13 chapters prepared in the order that you can understand yallajs. This tutorial is prepared for you to quickly understand how to work with YallaJS.");
    elementClose("p");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.page.get-started");
    attr("class", "container");
    attr("style", "margin-top:1rem");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    attr("class", "row");
    elementOpenEnd("div");
    var _array = tutorials || [];
    _array.forEach(function(tutorial, index) {
      elementOpenStart("div", "");
      attr("class", "col-12 col-lg-6 col-md-12");
      attr("id", "tutorialPanel");
      elementOpenEnd("div");
      $context["card"].render({}, function(slotName) {
        if (slotName == "title") {
          elementOpenStart("div", "");
          elementOpenEnd("div");
          elementOpenStart("strong", "");
          elementOpenEnd("strong");
          text("" + (index + 1) + ". " + (tutorial.title) + "");
          elementClose("strong");
          elementClose("div");
        }
        if (slotName == "content") {
          elementOpenStart("p", "");
          elementOpenEnd("p");
          elementOpenStart("iframe", "");
          attr("width", "100%");
          attr("height", videoHeight());
          attr("src", "https://www.youtube.com/embed/NpRFvL6wTfU");
          attr("frameborder", "0");
          attr("allowfullscreen", "allowfullscreen");
          elementOpenEnd("iframe");
          elementClose("iframe");
          elementClose("p");
        }
      });
      elementClose("div");
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