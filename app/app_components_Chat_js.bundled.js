"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcomplex_react_app"] = self["webpackChunkcomplex_react_app"] || []).push([["app_components_Chat_js"],{

/***/ "./app/components/Chat.js":
/*!********************************!*\
  !*** ./app/components/Chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StateContext */ \"./app/StateContext.js\");\n/* harmony import */ var _DispatchContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DispatchContext */ \"./app/DispatchContext.js\");\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-immer */ \"./node_modules/use-immer/dist/use-immer.module.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\n\n\n\nfunction Chat() {\n  const socket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const chatField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const chatLog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const appState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_StateContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const appDispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DispatchContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  const [state, setState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_4__.useImmer)({\n    fieldValue: \"\",\n    chatMessages: []\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (appState.isChatOpen) {\n      chatField.current.focus();\n      appDispatch({\n        type: \"clearUnreadChatCount\"\n      });\n    }\n  }, [appState.isChatOpen]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:8080\");\n    socket.current.on(\"chatFromServer\", message => {\n      setState(draft => {\n        draft.chatMessages.push(message);\n      });\n    });\n    return () => socket.current.disconnect();\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    chatLog.current.scrollTop = chatLog.current.scrollHeight;\n    if (state.chatMessages.length && !appState.isChatOpen) {\n      appDispatch({\n        type: \"incrementUnreadChatCount\"\n      });\n    }\n  }, [state.chatMessages]);\n  function handleFieldChange(e) {\n    const value = e.target.value;\n    setState(draft => {\n      draft.fieldValue = value;\n    });\n  }\n  function handleSubmit(e) {\n    e.preventDefault();\n    //send message to chat server\n    socket.current.emit(\"chatFromBrowser\", {\n      message: state.fieldValue,\n      token: appState.user.token\n    });\n    setState(draft => {\n      //add message to state collection of messages\n      draft.chatMessages.push({\n        message: draft.fieldValue,\n        username: appState.user.username,\n        avatar: appState.user.avatar\n      });\n      draft.fieldValue = \"\";\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"chat-wrapper\",\n    className: \"chat-wrapper  shadow border-top border-left border-right \" + (appState.isChatOpen ? \"chat-wrapper--is-visible\" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"chat-title-bar bg-primary\"\n  }, \"Chat\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: () => appDispatch({\n      type: \"closeChat\"\n    }),\n    className: \"chat-title-bar-close\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-times-circle\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"chat\",\n    className: \"chat-log\",\n    ref: chatLog\n  }, state.chatMessages.map((message, index) => {\n    if (message.username == appState.user.username) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        key: index,\n        className: \"chat-self\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"chat-message\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"chat-message-inner\"\n      }, message.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        className: \"chat-avatar avatar-tiny\",\n        src: message.avatar\n      }));\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"chat-other\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n      to: `/profile/${message.username}`\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"avatar-tiny\",\n      src: message.avatar\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"chat-message\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"chat-message-inner\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n      to: `/profile/${message.username}`\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, message.username, \": \")), message.message)));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"chatForm\",\n    className: \"chat-form border-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    value: state.fieldValue,\n    onChange: handleFieldChange,\n    ref: chatField,\n    type: \"text\",\n    className: \"chat-field\",\n    id: \"chatField\",\n    placeholder: \"Type a message\\u2026\",\n    autoComplete: \"off\"\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\n\n//# sourceURL=webpack://complex-react-app/./app/components/Chat.js?");

/***/ })

}]);