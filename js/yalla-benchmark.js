'use strict';
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    <div class="container">\n        <div class="jumbotron">\n            <div class="row">\n                <div class="col-md-6">\n                    <h1>YallaJS-"keyed"</h1>\n                </div>\n                <div class="col-md-6">\n                    <div class="row">\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id="run" onclick="', '">Create 1,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'runlots\' onclick="', '">Create 10,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'add\' onclick="', '">Append 1,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'update\' onclick="', '">Update every 10th row</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'clear\' onclick="', '">Clear</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'swaprows\' onclick="', '">Swap Rows</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <table class="table table-hover table-striped test-data">\n            <tbody id="tbody">\n                ', '\n            </tbody>\n        </table>\n        <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>\n    </div>\n'], ['\n    <div class="container">\n        <div class="jumbotron">\n            <div class="row">\n                <div class="col-md-6">\n                    <h1>YallaJS-"keyed"</h1>\n                </div>\n                <div class="col-md-6">\n                    <div class="row">\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id="run" onclick="', '">Create 1,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'runlots\' onclick="', '">Create 10,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'add\' onclick="', '">Append 1,000 rows</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'update\' onclick="', '">Update every 10th row</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'clear\' onclick="', '">Clear</button>\n                        </div>\n                        <div class="col-sm-6 smallpad">\n                            <button type=\'button\' class=\'btn btn-primary btn-block\' id=\'swaprows\' onclick="', '">Swap Rows</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <table class="table table-hover table-striped test-data">\n            <tbody id="tbody">\n                ', '\n            </tbody>\n        </table>\n        <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>\n    </div>\n']),
    _templateObject2 = _taggedTemplateLiteral(['<tr>\n                        <td class="col-md-1">', '</td>\n                        <td class="col-md-4">\n                            <a class="lbl" onclick="', '" data-id="', '">', '</a>\n                        </td>\n                        <td class="col-md-1">\n                            <a class="remove" onclick="', '" data-id="', '">\n                                <span class="glyphicon glyphicon-remove remove" aria-hidden="true"></span>\n                            </a>\n                        </td>\n                        <td class="col-md-6"></td>\n                    </tr>'], ['<tr>\n                        <td class="col-md-1">', '</td>\n                        <td class="col-md-4">\n                            <a class="lbl" onclick="', '" data-id="', '">', '</a>\n                        </td>\n                        <td class="col-md-1">\n                            <a class="remove" onclick="', '" data-id="', '">\n                                <span class="glyphicon glyphicon-remove remove" aria-hidden="true"></span>\n                            </a>\n                        </td>\n                        <td class="col-md-6"></td>\n                    </tr>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return -1.
            return -1;
        }
    });
}

var startTime;
var lastMeasure;
var startMeasure = function startMeasure(name) {
    startTime = performance.now();
    lastMeasure = name;
};

var stopMeasure = function stopMeasure() {
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
        key: 'buildData',
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
        key: 'updateData',
        value: function updateData() {
            var mod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            for (var i = 0; i < this.data.length; i += 10) {
                this.data[i].label += ' !!!';
                // this.data[i] = Object.assign({}, this.data[i], {label: this.data[i].label +' !!!'});
            }
        }
    }, {
        key: 'delete',
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
        key: 'run',
        value: function run() {
            this.data = this.buildData();
            this.selected = null;
        }
    }, {
        key: 'add',
        value: function add() {
            this.data = this.data.concat(this.buildData(1000));
            this.selected = null;
        }
    }, {
        key: 'update',
        value: function update() {
            this.updateData();
            this.selected = null;
        }
    }, {
        key: 'select',
        value: function select(id) {
            this.selected = id;
        }
    }, {
        key: 'hideAll',
        value: function hideAll() {
            this.backup = this.data;
            this.data = [];
            this.selected = null;
        }
    }, {
        key: 'showAll',
        value: function showAll() {
            this.data = this.backup;
            this.backup = null;
            this.selected = null;
        }
    }, {
        key: 'runLots',
        value: function runLots() {
            this.data = this.buildData(10000);
            this.selected = null;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.data = [];
            this.selected = null;
        }
    }, {
        key: 'swapRows',
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
        this.runLots = this.runLots.bind(this);
        this.update = this.update.bind(this);
        this.clear = this.clear.bind(this);
        this.swapRows = this.swapRows.bind(this);
        this.start = 0;
        this.tbody = document.getElementById("tbody");
    }

    _createClass(Main, [{
        key: 'printDuration',
        value: function printDuration() {
            stopMeasure();
        }
    }, {
        key: 'run',
        value: function run() {
            startMeasure("run");
            this.store.clear();
            this.store.run();
            updateDisplay();
            this.unselect();
            stopMeasure();
        }
    }, {
        key: 'add',
        value: function add() {
            startMeasure("add");
            this.store.add();
            updateDisplay();
            stopMeasure();
        }
    }, {
        key: 'update',
        value: function update() {
            startMeasure("update");
            this.store.update();
            updateDisplay();
            stopMeasure();
        }
    }, {
        key: 'unselect',
        value: function unselect() {
            // if (this.selectedRow !== undefined) {
            //     this.selectedRow.className = "";
            //     this.selectedRow = undefined;
            // }
        }
    }, {
        key: 'select',
        value: function select(e) {
            var idx = e.currentTarget.getAttribute('data-id');
            startMeasure("select");
            this.unselect();
            this.store.select(idx);
            // this.selectedRow = this.rows[idx];
            // this.selectedRow.className = "danger";
            stopMeasure();
        }
    }, {
        key: 'delete',
        value: function _delete(e) {
            var idx = e.currentTarget.getAttribute('data-id');
            startMeasure("delete");
            this.store.delete(idx);
            updateDisplay();
            this.unselect();
            stopMeasure();
        }
    }, {
        key: 'runLots',
        value: function runLots() {
            startMeasure("runLots");
            this.store.clear();
            this.data = [];
            this.store.runLots();
            updateDisplay();
            this.unselect();
            stopMeasure();
        }
    }, {
        key: 'clear',
        value: function clear() {
            var _this = this;

            startMeasure("clear");
            this.store.clear();
            updateDisplay();
            requestAnimationFrame(function () {
                _this.unselect();
                stopMeasure();
            });
        }
    }, {
        key: 'swapRows',
        value: function swapRows() {
            startMeasure("swapRows");
            if (this.store.data.length > 10) {
                this.store.swapRows();
            }
            updateDisplay();
            stopMeasure();
        }
    }]);

    return Main;
}();

var main = new Main();
var context = new Context();
var html = context.html();
var htmlCollection = context.htmlCollection();

var app = function app() {
    return html(_templateObject, main.run, main.runLots, main.add, main.update, main.clear, main.swapRows, htmlCollection(main.store.data, 'id', function (data, index) {
        return html(_templateObject2, data.id, main.select, data.id, data.label, main.delete, data.id);
    }));
};

function updateDisplay() {
    render(app(), document.getElementsByTagName('body')[0]);
}

updateDisplay();