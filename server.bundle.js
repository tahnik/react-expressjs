/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var app = express();
	var index = __webpack_require__(2);
	app.use('/bin', express.static('./bin'));
	app.use('/stylesheets', express.static('./public/stylesheets'));

	app.use('/', index);
	app.use('/view/*', index);

	app.listen(3000, function () {
		console.log('Hello World listening on port 3000!');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	var _index = __webpack_require__(15);

	var _index2 = _interopRequireDefault(_index);

	var _redux = __webpack_require__(13);

	var _reactRedux = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(1);
	var router = express.Router();
	var path = __webpack_require__(17);

	var React = __webpack_require__(6);

	router.get('/', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      // You can also check renderProps.components or renderProps.routes for
	      // your "not found" component or route respectively, and send a 404 as
	      // below, if you're using a catch-all route.

	      var store = (0, _redux.createStore)(_index2.default);

	      var html = (0, _server.renderToString)(React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(_reactRouter.RouterContext, renderProps)
	      ));

	      var finalState = store.getState();

	      res.status(200).send(renderFullPage(html, finalState));
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	function renderFullPage(html, initialState) {
	  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">\n    \t<link rel="stylesheet" href="../stylesheets/main.css">\n    </head>\n    <body>\n\n    \t<div id="reactbody"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>\n    </body>\n    </html>\n    ';
	}

	module.exports = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _show_list_item = __webpack_require__(7);

	var _show_list_item2 = _interopRequireDefault(_show_list_item);

	var _header = __webpack_require__(10);

	var _header2 = _interopRequireDefault(_header);

	var _main = __webpack_require__(11);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _header2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _main2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'view/:name', component: _show_list_item2.default })
	    )
	);

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _list_actions = __webpack_require__(9);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShowListItem = function (_Component) {
		_inherits(ShowListItem, _Component);

		function ShowListItem() {
			_classCallCheck(this, ShowListItem);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowListItem).apply(this, arguments));
		}

		_createClass(ShowListItem, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.props.getListItem(this.props.params.name);
			}
		}, {
			key: 'render',
			value: function render() {
				var item = this.props.item;

				if (!item) {
					return _react2.default.createElement(
						'div',
						null,
						'Loading...'
					);
				}

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/" },
						_react2.default.createElement(
							'button',
							{ type: 'button', className: 'btn btn-primary', style: { marginTop: 10, marginBottom: 10 } },
							'Go Back'
						)
					),
					_react2.default.createElement(
						'h1',
						null,
						item.name
					),
					_react2.default.createElement(
						'p',
						null,
						item.description
					)
				);
			}
		}]);

		return ShowListItem;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			item: state.lists.item
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, { getListItem: _list_actions.getListItem })(ShowListItem);

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectItem = selectItem;
	exports.getListItem = getListItem;
	function selectItem(listItem) {
	    return {
	        type: 'ITEM_CLICKED',
	        payload: listItem
	    };
	}

	function getListItem(id) {
	    return {
	        type: 'ITEM_VIEW',
	        payload: id
	    };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
	    _inherits(Header, _Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { style: { marginTop: 20 } },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'React Redux Router'
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return Header;
	}(_react.Component);

	exports.default = Header;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _list_view = __webpack_require__(12);

	var _list_view2 = _interopRequireDefault(_list_view);

	var _list_item = __webpack_require__(14);

	var _list_item2 = _interopRequireDefault(_list_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_Component) {
	    _inherits(Main, _Component);

	    function Main() {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	    }

	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-10 col-md-offset-1 main' },
	                _react2.default.createElement(_list_view2.default, null),
	                _react2.default.createElement(_list_item2.default, null)
	            );
	        }
	    }]);

	    return Main;
	}(_react.Component);

	exports.default = Main;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _redux = __webpack_require__(13);

	var _list_actions = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListView = function (_Component) {
	    _inherits(ListView, _Component);

	    function ListView() {
	        _classCallCheck(this, ListView);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListView).apply(this, arguments));
	    }

	    _createClass(ListView, [{
	        key: 'renderList',
	        value: function renderList() {
	            var _this2 = this;

	            return this.props.lists.map(function (listItem) {
	                return _react2.default.createElement(
	                    'li',
	                    {
	                        key: listItem.name,
	                        onClick: function onClick() {
	                            return _this2.props.selectItem(listItem);
	                        },
	                        className: 'list-group-item'
	                    },
	                    listItem.name
	                );
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'list-group col-sm-4' },
	                    this.renderList()
	                )
	            );
	        }
	    }]);

	    return ListView;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        lists: state.lists.all
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)({ selectItem: _list_actions.selectItem }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ListView);

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListItem = function (_Component) {
	    _inherits(ListItem, _Component);

	    function ListItem() {
	        _classCallCheck(this, ListItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	    }

	    _createClass(ListItem, [{
	        key: 'render',
	        value: function render() {
	            if (!this.props.activeItem) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        'Select an item'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Description will appear here'
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    ' ',
	                    this.props.activeItem.name,
	                    ' '
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    this.props.activeItem.description
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: "view?name=" + this.props.activeItem.name },
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary' },
	                        'Read More'
	                    )
	                )
	            );
	        }
	    }]);

	    return ListItem;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        activeItem: state.lists.item
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ListItem);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(13);

	var _lists = __webpack_require__(16);

	var _lists2 = _interopRequireDefault(_lists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	    lists: _lists2.default
	});

	exports.default = rootReducer;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'ITEM_CLICKED':
	            return _extends({}, state, { item: action.payload });
	        case 'ITEM_VIEW':
	            switch (action.payload) {
	                case 'Actions':
	                    return _extends({}, state, { item: ListItems[0] });
	                case 'Containers':
	                    return _extends({}, state, { item: ListItems[1] });
	                case 'Reducers':
	                    return _extends({}, state, { item: ListItems[2] });
	            }
	    }
	    return state;
	};

	var ListItems = [{ name: 'Actions', description: 'Description for actions' }, { name: 'Containers', description: 'Description for containers' }, { name: 'Reducers', description: 'Description for reducer' }];

	var INITIAL_STATE = { all: ListItems, item: null };

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);