"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/asaph/Documents/javascript/nextJs/blogr-nextjs-prisma/pages/p/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n// pages/p/[id].tsx\n\n\n\n\n\n\nfunction publishPost(_x) {\n  return _publishPost.apply(this, arguments);\n} // pages/p/[id].tsx\n\n\nfunction _publishPost() {\n  _publishPost = (0,_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n    return _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"http://localhost:3000/api/publish/\".concat(id), {\n              method: 'PUT'\n            });\n\n          case 2:\n            _context.next = 4;\n            return next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/');\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _publishPost.apply(this, arguments);\n}\n\nfunction deletePost(_x2) {\n  return _deletePost.apply(this, arguments);\n}\n\nfunction _deletePost() {\n  _deletePost = (0,_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {\n    return _home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(\"http://localhost:3000/api/post/\".concat(id), {\n              method: 'DELETE'\n            });\n\n          case 2:\n            next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/');\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _deletePost.apply(this, arguments);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _session$user, _props$author, _props$author2;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_9__.useSession)(),\n      _useSession2 = (0,_home_asaph_Documents_javascript_nextJs_blogr_nextjs_prisma_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"Authenticating ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 12\n    }, _this);\n  }\n\n  var userHasValidSession = Boolean(session);\n  var postBelongsToUser = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) === ((_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.email);\n  var title = props.title;\n\n  if (!props.published) {\n    title = \"\".concat(title, \" (Draft)\");\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"jsx-3440979688\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        className: \"jsx-3440979688\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"jsx-3440979688\",\n        children: [\"By \", (props === null || props === void 0 ? void 0 : (_props$author2 = props.author) === null || _props$author2 === void 0 ? void 0 : _props$author2.name) || 'Unknown author']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_6___default()), {\n        source: props.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), !props.published && userHasValidSession && postBelongsToUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return publishPost(props.id);\n        },\n        className: \"jsx-3440979688\",\n        children: \"Publish\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, _this), !props.published && userHasValidSession && postBelongsToUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return publishPost(props.id);\n        },\n        className: \"jsx-3440979688\",\n        children: \"Publish\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }, _this), userHasValidSession && postBelongsToUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return deletePost(props.id);\n        },\n        className: \"jsx-3440979688\",\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default()), {\n      id: \"3440979688\",\n      children: \".page.jsx-3440979688{background:white;padding:2rem;}.actions.jsx-3440979688{margin-top:2rem;}button.jsx-3440979688{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-3440979688+button.jsx-3440979688{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzYXBoL0RvY3VtZW50cy9qYXZhc2NyaXB0L25leHRKcy9ibG9nci1uZXh0anMtcHJpc21hL3BhZ2VzL3AvW2lkXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVrQixBQUc0QixBQUtELEFBSUcsQUFPRixnQkFWbkIsQ0FMZSxBQWdCZixFQVBXLFNBQ2MsRUFUekIscUJBVW9CLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9hc2FwaC9Eb2N1bWVudHMvamF2YXNjcmlwdC9uZXh0SnMvYmxvZ3ItbmV4dGpzLXByaXNtYS9wYWdlcy9wL1tpZF0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcC9baWRdLnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXM/LmlkKSB8fCAtMSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHBvc3QsXG4gIH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1Ymxpc2gvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgfSk7XG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvJyk7XG59XG4vLyBwYWdlcy9wL1tpZF0udHN4XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuICBSb3V0ZXIucHVzaCgnLycpO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZyAuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbik7XG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWw7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCAnVW5rbm93biBhdXRob3InfTwvcD5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9wcy5jb250ZW50fSAvPlxuICAgICAgICBcbiAgICAgICAgeyFwcm9wcy5wdWJsaXNoZWQgJiYgdXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoUG9zdChwcm9wcy5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge1xuICAgICAgICAgICAgIXByb3BzLnB1Ymxpc2hlZCAmJiB1c2VySGFzVmFsaWRTZXNzaW9uICYmIHBvc3RCZWxvbmdzVG9Vc2VyICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoUG9zdChwcm9wcy5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgdXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwcm9wcy5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\\n/*@ sourceURL=/home/asaph/Documents/javascript/nextJs/blogr-nextjs-prisma/pages/p/[id].tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_9__.useSession];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQXpERDs7R0FBTUs7VUFDdUJQOzs7S0FEdkJPOztBQTJETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wL1tpZF0udHN4P2Q2ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcC9baWRdLnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXM/LmlkKSB8fCAtMSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHBvc3QsXG4gIH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1Ymxpc2gvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgfSk7XG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvJyk7XG59XG4vLyBwYWdlcy9wL1tpZF0udHN4XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pO1xuICBSb3V0ZXIucHVzaCgnLycpO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZyAuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbik7XG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWw7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCAnVW5rbm93biBhdXRob3InfTwvcD5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9wcy5jb250ZW50fSAvPlxuICAgICAgICBcbiAgICAgICAgeyFwcm9wcy5wdWJsaXNoZWQgJiYgdXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoUG9zdChwcm9wcy5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge1xuICAgICAgICAgICAgIXByb3BzLnB1Ymxpc2hlZCAmJiB1c2VySGFzVmFsaWRTZXNzaW9uICYmIHBvc3RCZWxvbmdzVG9Vc2VyICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoUG9zdChwcm9wcy5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgdXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwcm9wcy5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE1hcmtkb3duIiwiTGF5b3V0IiwiUm91dGVyIiwidXNlU2Vzc2lvbiIsInB1Ymxpc2hQb3N0IiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsInB1c2giLCJkZWxldGVQb3N0IiwiUG9zdCIsInByb3BzIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VySGFzVmFsaWRTZXNzaW9uIiwiQm9vbGVhbiIsInBvc3RCZWxvbmdzVG9Vc2VyIiwidXNlciIsImVtYWlsIiwiYXV0aG9yIiwidGl0bGUiLCJwdWJsaXNoZWQiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n");

/***/ })

});