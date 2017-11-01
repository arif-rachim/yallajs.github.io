'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["<div id='main'>\n        <div class=\"container\">\n            <div class=\"jumbotron\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h1>YallaJS-\"keyed\"</h1>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='run' onclick=\"", "\">Create 1,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='runlots' onclick=\"", "\">Create 10,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='add' onclick=\"", "\">Append 1,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='update' onclick=\"", "\">Update every 10th row</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='clear' onclick=\"", "\">Clear</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='swaprows' onclick=\"", "\">Swap Rows</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <table class=\"table table-hover table-striped test-data\">\n                <tbody id=\"tbody\">\n                    ", "\n                </tbody>\n            </table>\n            <span class=\"preloadicon glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        </div>\n    </div>"], ["<div id='main'>\n        <div class=\"container\">\n            <div class=\"jumbotron\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h1>YallaJS-\"keyed\"</h1>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='run' onclick=\"", "\">Create 1,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='runlots' onclick=\"", "\">Create 10,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='add' onclick=\"", "\">Append 1,000 rows</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='update' onclick=\"", "\">Update every 10th row</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='clear' onclick=\"", "\">Clear</button>\n                            </div>\n                            <div class=\"col-sm-6 smallpad\">\n                                <button type='button' class='btn btn-primary btn-block' id='swaprows' onclick=\"", "\">Swap Rows</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <table class=\"table table-hover table-striped test-data\">\n                <tbody id=\"tbody\">\n                    ", "\n                </tbody>\n            </table>\n            <span class=\"preloadicon glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        </div>\n    </div>"]),
    _templateObject2 = _taggedTemplateLiteral(["<tr class=\"", "\">\n                            <td class=\"col-md-1\">", "</td>\n                            <td class=\"col-md-4\">\n                                <a class=\"lbl\" onclick=\"", "\">", "</a>\n                            </td>\n                            <td class=\"col-md-1\">\n                                <a class=\"remove\"><span class=\"glyphicon glyphicon-remove remove\" aria-hidden=\"true\" onclick=\"", "\"></span></a>\n                            </td>\n                            <td class=\"col-md-6\"></td>\n                        </tr>"], ["<tr class=\"", "\">\n                            <td class=\"col-md-1\">", "</td>\n                            <td class=\"col-md-4\">\n                                <a class=\"lbl\" onclick=\"", "\">", "</a>\n                            </td>\n                            <td class=\"col-md-1\">\n                                <a class=\"remove\"><span class=\"glyphicon glyphicon-remove remove\" aria-hidden=\"true\" onclick=\"", "\"></span></a>\n                            </td>\n                            <td class=\"col-md-6\"></td>\n                        </tr>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var startTime = void 0;
var lastMeasure = void 0;
var startMeasure = function startMeasure(name) {
    startTime = performance.now();
    lastMeasure = name;
};
var stopMeasure = function stopMeasure() {
    paint();
    var last = lastMeasure;
    if (lastMeasure) {
        window.setTimeout(function () {
            lastMeasure = null;
            var stop = performance.now();
            var duration = 0;
            console.log(last + " took " + (stop - startTime));
        }, 0);
    }
};

function _random(max) {
    return Math.round(Math.random() * 1000) % max;
}

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);

        this.data = [];
        this.backup = null;
        this.selected = null;
        this.id = 1;
    }

    _createClass(Store, [{
        key: "buildData",
        value: function buildData() {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

            var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
            var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
            var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
            var data = [];
            for (var i = 0; i < count; i++) {
                data.push({ id: this.id++, label: adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)] });
            }return data;
        }
    }, {
        key: "updateData",
        value: function updateData() {
            var mod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            for (var i = 0; i < this.data.length; i += 10) {
                this.data[i].label += ' !!!';
            }
        }
    }, {
        key: "delete",
        value: function _delete(id) {
            var idx = this.data.findIndex(function (d) {
                return d.id == id;
            });
            this.data = this.data.filter(function (e, i) {
                return i != idx;
            });
            return this;
        }
    }, {
        key: "run",
        value: function run() {
            this.data = this.buildData();
            this.selected = null;
        }
    }, {
        key: "add",
        value: function add() {
            this.data = this.data.concat(this.buildData(1000));
            this.selected = null;
        }
    }, {
        key: "update",
        value: function update() {
            this.updateData();
            this.selected = null;
        }
    }, {
        key: "select",
        value: function select(id) {
            this.selected = id;
        }
    }, {
        key: "hideAll",
        value: function hideAll() {
            this.backup = this.data;
            this.data = [];
            this.selected = null;
        }
    }, {
        key: "showAll",
        value: function showAll() {
            this.data = this.backup;
            this.backup = null;
            this.selected = null;
        }
    }, {
        key: "runLots",
        value: function runLots() {
            this.data = this.buildData(10000);
            this.selected = null;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.data = [];
            this.selected = null;
        }
    }, {
        key: "swapRows",
        value: function swapRows() {
            if (this.data.length > 10) {
                var a = this.data[4];
                this.data[4] = this.data[9];
                this.data[9] = a;
            }
        }
    }]);

    return Store;
}();

var Main = function () {
    function Main(props) {
        _classCallCheck(this, Main);

        this.store = new Store();
        this.select = this.select.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.run = this.run.bind(this);
        this.update = this.update.bind(this);
        this.start = 0;
    }

    _createClass(Main, [{
        key: "printDuration",
        value: function printDuration() {
            stopMeasure();
        }
    }, {
        key: "run",
        value: function run() {
            startMeasure("run");
            this.store.clear();
            this.store.run();
            stopMeasure();
        }
    }, {
        key: "add",
        value: function add() {
            startMeasure("add");
            this.store.add();
            stopMeasure();
        }
    }, {
        key: "update",
        value: function update() {
            startMeasure("update");
            this.store.update();
            stopMeasure();
        }
    }, {
        key: "select",
        value: function select(idx) {
            startMeasure("select");
            this.store.select(idx);
            stopMeasure();
        }
    }, {
        key: "delete",
        value: function _delete(idx) {
            startMeasure("delete");
            this.store.delete(idx);
            stopMeasure();
        }
    }, {
        key: "runLots",
        value: function runLots() {
            startMeasure("runLots");
            this.store.clear();
            this.store.runLots();
            stopMeasure();
        }
    }, {
        key: "clear",
        value: function clear() {
            startMeasure("clear");
            this.store.clear();
            requestAnimationFrame(function () {
                stopMeasure();
            });
        }
    }, {
        key: "swapRows",
        value: function swapRows() {
            startMeasure("swapRows");
            this.store.swapRows();
            stopMeasure();
        }
    }]);

    return Main;
}();

var main = new Main();

var _ref = new Context(),
    html = _ref.html,
    htmlCollection = _ref.htmlCollection;

var paint = function paint() {
    render(html(_templateObject, function (e) {
        return main.run();
    }, function (e) {
        return main.runLots();
    }, function (e) {
        return main.add();
    }, function (e) {
        return main.update();
    }, function (e) {
        return main.clear();
    }, function (e) {
        return main.swapRows();
    }, htmlCollection(main.store.data, 'id', function (data) {
        return html(_templateObject2, main.store.selected == data.id ? 'danger' : '', data.id, function (e) {
            return main.select(data.id);
        }, data.label, function (e) {
            return main.delete(data.id);
        });
    })), document.body);
};

paint();