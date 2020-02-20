(window["webpackJsonp__demo"] = window["webpackJsonp__demo"] || []).push([[0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mainContent":"_1PV8r","article":"_1FOpo"};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"base":"PuFzs","default":"_2dyon"};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_3WQ5s"};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"item":"vM81M"};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"aICNd"};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"_2x3cr"};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _actions_namespaceObject = {};
__webpack_require__.r(_actions_namespaceObject);
__webpack_require__.d(_actions_namespaceObject, "methodA", function() { return _actions_methodA; });
__webpack_require__.d(_actions_namespaceObject, "methodB", function() { return _actions_methodB; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
var es = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/format-message/index.js
var format_message = __webpack_require__(1);
var format_message_default = /*#__PURE__*/__webpack_require__.n(format_message);

// EXTERNAL MODULE: ./src/shared/error-boundary/index.css
var error_boundary = __webpack_require__(5);
var error_boundary_default = /*#__PURE__*/__webpack_require__.n(error_boundary);

// CONCATENATED MODULE: ./src/shared/error-boundary/index.tsx
var _jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/shared/error-boundary/index.tsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var error_boundary_ErrorBoundary =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ErrorBoundary, _PureComponent);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service...
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement("div", {
          className: classnames_default()(error_boundary_default.a.errorBoundary, this.props.className),
          "data-qa": "errorBoundary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react_default.a.createElement("div", {
          className: error_boundary_default.a.centered,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react_default.a.createElement("h1", {
          className: error_boundary_default.a.title,
          "data-qa": "errorBoundaryTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, format_message_default()({
          id: "we_ve_had_a_slight_malfunction_46473151",
          default: "We\u2019ve had a slight malfunction"
        })), react_default.a.createElement("div", {
          className: error_boundary_default.a.subTitle,
          "data-qa": "errorBoundarySubtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, format_message_default()({
          id: "you_could_give_refreshing_your_page_a_shot_or_just_c06e6764",
          default: "You could give refreshing your page a shot. Or just sit tight, and we\u2019ll figure this out."
        }))));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/my-module/_actionTypes.ts
var METHOD_A = 'METHOD_A';
var METHOD_B = 'METHOD_B';
// CONCATENATED MODULE: ./src/pages/my-module/list.example.ts
// List of todos for example and development purpose.
var ITEMS = [{
  id: '1',
  text: 'Item 1'
}, {
  id: '2',
  text: 'Item 2'
}, {
  id: '3',
  text: 'Item 3'
}, {
  id: '4',
  text: 'Item 4'
}];
// CONCATENATED MODULE: ./src/pages/my-module/_reducer.ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  items: ITEMS
};
/* harmony default export */ var _reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case METHOD_A:
      return _objectSpread({}, state, {
        items: [].concat(_toConsumableArray(state.items), [action.item])
      });

    case METHOD_B:
      {
        var editedItem = action.item;
        return _objectSpread({}, state, {
          items: state.items.map(function (todo) {
            return todo.id === editedItem.id ? editedItem : todo;
          })
        });
      }

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/reducers/index.ts


/* harmony default export */ var reducers = (Object(redux["b" /* combineReducers */])({
  myModule: _reducer
}));
// CONCATENATED MODULE: ./src/pages/my-module/utils.ts
var getUniqueID = function getUniqueID() {
  return Math.random().toString(36).substr(2, 9);
};
// CONCATENATED MODULE: ./src/pages/my-module/_actions.ts


var _actions_methodA = function methodA(text) {
  return {
    type: METHOD_A,
    item: {
      id: getUniqueID(),
      text: text
    }
  };
};
var _actions_methodB = function methodB(item) {
  return {
    type: METHOD_B,
    item: item
  };
};
// CONCATENATED MODULE: ./src/store.ts




var store_bindActions = function bindActions(store) {
  return {
    myModule: Object(redux["a" /* bindActionCreators */])(_actions_namespaceObject, store.dispatch)
  };
};

function create() {
  var store = Object(redux["c" /* createStore */])(reducers);
  var actions = store_bindActions(store);
  return {
    actions: actions,
    store: store
  };
}
// CONCATENATED MODULE: ./src/format.ts

var formatConfig = {
  missingTranslation: 'ignore',
  formats: {
    date: {
      dd: {
        day: '2-digit'
      },
      MMM: {
        month: 'short'
      },
      MMMM: {
        month: 'long'
      },
      'MMM d': {
        month: 'short',
        day: 'numeric'
      },
      'MMM d yyyy': {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      'MMMM d': {
        month: 'long',
        day: 'numeric'
      },
      'MMMM yy': {
        month: 'long',
        year: '2-digit'
      },
      'MMM yyyy': {
        month: 'short',
        year: 'numeric'
      },
      'MMMM yyyy': {
        month: 'long',
        year: 'numeric'
      },
      'M/d/yyyy': {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      'MM/dd/yyyy': {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      },
      'dd MMM yyyy': {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      },
      'd MMMM yyyy': {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      yyyy: {
        year: 'numeric'
      },
      EEEE: {
        weekday: 'long'
      },
      'EEEE, MMM d': {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      },
      'E M/d': {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
      },
      'EEEE MMMM d, yyyy': {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
      }
    },
    time: {
      H: {
        hour: 'numeric'
      },
      'H:mm': {
        hour: 'numeric',
        minute: '2-digit'
      }
    }
  }
};
var format_initFormatMessage = function initFormatMessage() {
  return format_message_default.a.setup(formatConfig);
};
// EXTERNAL MODULE: ./src/pages/my-module/header/index.css
var header = __webpack_require__(20);
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// CONCATENATED MODULE: ./src/pages/my-module/header/index.tsx
var header_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/header/index.tsx";



var header_Header = function Header() {
  return react_default.a.createElement("header", {
    className: header_default.a.header,
    __source: {
      fileName: header_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, format_message_default()({
    id: "this_is_a_header_bcdcd1c6",
    default: "This is a header."
  }));
};
// EXTERNAL MODULE: ./src/pages/my-module/main-content/item.css
var main_content_item = __webpack_require__(21);
var item_default = /*#__PURE__*/__webpack_require__.n(main_content_item);

// CONCATENATED MODULE: ./src/pages/my-module/main-content/item.tsx
var item_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/main-content/item.tsx";


var item_Item = function Item(_ref) {
  var text = _ref.text;
  return react_default.a.createElement("li", {
    className: item_default.a.item,
    __source: {
      fileName: item_jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, text);
};
// EXTERNAL MODULE: ./src/shared/button/index.css
var shared_button = __webpack_require__(14);
var button_default = /*#__PURE__*/__webpack_require__.n(shared_button);

// CONCATENATED MODULE: ./src/shared/button/index.tsx
var button_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/shared/button/index.tsx";

function button_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { button_typeof = function _typeof(obj) { return typeof obj; }; } else { button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return button_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function button_createClass(Constructor, protoProps, staticProps) { if (protoProps) button_defineProperties(Constructor.prototype, protoProps); if (staticProps) button_defineProperties(Constructor, staticProps); return Constructor; }

function button_possibleConstructorReturn(self, call) { if (call && (button_typeof(call) === "object" || typeof call === "function")) { return call; } return button_assertThisInitialized(self); }

function button_getPrototypeOf(o) { button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return button_getPrototypeOf(o); }

function button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) button_setPrototypeOf(subClass, superClass); }

function button_setPrototypeOf(o, p) { button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return button_setPrototypeOf(o, p); }

function button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var button_Button =
/*#__PURE__*/
function (_PureComponent) {
  button_inherits(Button, _PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    button_classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = button_possibleConstructorReturn(this, (_getPrototypeOf2 = button_getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    button_defineProperty(button_assertThisInitialized(_this), "focus", function () {
      _this.buttonRef && _this.buttonRef.focus();
    });

    button_defineProperty(button_assertThisInitialized(_this), "buttonRef", void 0);

    button_defineProperty(button_assertThisInitialized(_this), "setButtonRef", function (ref) {
      // eslint-disable-next-line immutable/no-mutation
      _this.buttonRef = ref;
    });

    button_defineProperty(button_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.key === 'Enter' && _this.props.disabled) {
        event.preventDefault();
      } else if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }
    });

    return _this;
  }

  button_createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          propsToSpread = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "onClick"]);

      return react_default.a.createElement("button", _extends({}, propsToSpread, {
        "aria-disabled": disabled ? 'true' : undefined,
        className: classnames_default()(button_default.a.base, button_default.a.default, className),
        onClick: disabled ? undefined : onClick,
        onKeyDown: this.handleKeyDown,
        ref: this.setButtonRef,
        "data-buc": "Button",
        __source: {
          fileName: button_jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), children);
    }
  }]);

  return Button;
}(react["PureComponent"]);

button_defineProperty(button_Button, "displayName", void 0);
// EXTERNAL MODULE: ./src/pages/my-module/main-content/aside.css
var aside = __webpack_require__(9);
var aside_default = /*#__PURE__*/__webpack_require__.n(aside);

// CONCATENATED MODULE: ./src/pages/my-module/main-content/aside.tsx
var aside_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/main-content/aside.tsx";

function aside_toConsumableArray(arr) { return aside_arrayWithoutHoles(arr) || aside_iterableToArray(arr) || aside_nonIterableSpread(); }

function aside_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function aside_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function aside_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var aside_Aside = function Aside() {
  return react_default.a.createElement("aside", {
    className: aside_default.a.aside,
    __source: {
      fileName: aside_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react_default.a.createElement("p", {
    __source: {
      fileName: aside_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, format_message_default()({
    id: "aside_a580c410",
    default: "Aside"
  })), react_default.a.createElement("nav", {
    "data-qa": "aside-nav",
    __source: {
      fileName: aside_jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react_default.a.createElement("ul", {
    className: aside_default.a.list,
    __source: {
      fileName: aside_jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, aside_toConsumableArray(new Array(4)).map(function (_, index) {
    return react_default.a.createElement("li", {
      key: index,
      "data-qa": "aside-nav-link",
      __source: {
        fileName: aside_jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react_default.a.createElement("a", {
      className: aside_default.a.link,
      href: "/",
      __source: {
        fileName: aside_jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, format_message_default()({
      id: "link_nbr_number_441eafd4",
      default: "Link {nbr, number}"
    }, {
      nbr: index + 1
    })));
  }))));
};
// EXTERNAL MODULE: ./src/pages/my-module/main-content/index.css
var main_content = __webpack_require__(10);
var main_content_default = /*#__PURE__*/__webpack_require__.n(main_content);

// CONCATENATED MODULE: ./src/pages/my-module/main-content/index.tsx
var main_content_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/main-content/index.tsx";







var main_content_MainContent = function MainContent(_ref) {
  var items = _ref.items,
      methodA = _ref.methodA;

  var handleClick = function handleClick() {
    return methodA("item-".concat(getUniqueID()));
  };

  return react_default.a.createElement("main", {
    className: main_content_default.a.mainContent,
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react_default.a.createElement("article", {
    className: main_content_default.a.article,
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react_default.a.createElement("h1", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, format_message_default()({
    id: "article_e8bf1e84",
    default: "Article"
  })), react_default.a.createElement("p", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, format_message_default()({
    id: "i_am_text_in_article_also_there_can_be_an_image_dab5aabb",
    default: "I am text in article, also there can be an image:"
  }))), react_default.a.createElement("article", {
    className: main_content_default.a.article,
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react_default.a.createElement("h2", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Lorem ipsum"), react_default.a.createElement("section", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react_default.a.createElement("ul", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, items.map(function (item) {
    return react_default.a.createElement(item_Item, {
      key: item.id,
      id: item.id,
      text: item.text,
      __source: {
        fileName: main_content_jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }))), react_default.a.createElement("section", {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react_default.a.createElement(button_Button, {
    onClick: handleClick,
    "data-qa": "main-content-add-item-btn",
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, format_message_default()({
    id: "add_an_item_14011a6c",
    default: "Add an item"
  })))), react_default.a.createElement(aside_Aside, {
    __source: {
      fileName: main_content_jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};
// EXTERNAL MODULE: ./src/pages/my-module/footer/index.css
var footer = __webpack_require__(22);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// CONCATENATED MODULE: ./src/pages/my-module/footer/index.tsx
var footer_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/footer/index.tsx";



var footer_Footer = function Footer() {
  return react_default.a.createElement("footer", {
    role: "contentinfo",
    className: footer_default.a.footer,
    __source: {
      fileName: footer_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, format_message_default()({
    id: "this_is_a_footer_a2516003",
    default: "This is a footer."
  }));
};
// CONCATENATED MODULE: ./src/pages/my-module/index.tsx
var my_module_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/pages/my-module/index.tsx";








var my_module_MyModule = function _MyModule(_ref) {
  var className = _ref.className,
      items = _ref.items,
      methodA = _ref.methodA,
      methodB = _ref.methodB;
  return react_default.a.createElement("div", {
    className: className,
    __source: {
      fileName: my_module_jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react_default.a.createElement("title", {
    __source: {
      fileName: my_module_jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, format_message_default()({
    id: "my_module_a9e80678",
    default: "My module"
  })), react_default.a.createElement(header_Header, {
    __source: {
      fileName: my_module_jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react_default.a.createElement(main_content_MainContent, {
    items: items,
    methodA: methodA,
    methodB: methodB,
    __source: {
      fileName: my_module_jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react_default.a.createElement(footer_Footer, {
    __source: {
      fileName: my_module_jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    items: state.myModule.items
  };
};

var mapDispatchToProps = {
  methodA: _actions_methodA,
  methodB: _actions_methodB
};
var MyModule = Object(es["b" /* connect */])(mapStateToProps, mapDispatchToProps)(my_module_MyModule);
// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(23);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./src/app.tsx
var app_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/app.tsx";



var app_App = function App() {
  return react_default.a.createElement(MyModule, {
    className: app_default.a.app,
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};
// CONCATENATED MODULE: ./src/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return src_initApp; });
var src_jsxFileName = "/Users/maurobuselli/my-projects/react-redux-ts-setup/src/index.tsx";







var src_initApp = function initApp() {
  var root = document.getElementById('root');
  if (!root) return;

  var _createStore = create(),
      store = _createStore.store;

  format_initFormatMessage();
  Object(react_dom["render"])(react_default.a.createElement(error_boundary_ErrorBoundary, {
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react_default.a.createElement(es["a" /* Provider */], {
    store: store,
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react_default.a.createElement(app_App, {
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), root);
};
src_initApp();

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"errorBoundary":"_21AM7","centered":"rhZ-r","title":"_3qjsK","subTitle":"_3MDas"};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"aside":"_1BqLS","list":"_39f_n","link":"_8KPW-"};

/***/ })

},[[35,1,2]]]);
//# sourceMappingURL=main.a3c92656.chunk.js.map