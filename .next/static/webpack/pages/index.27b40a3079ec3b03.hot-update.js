"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var hello = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useQuery([\n        \"hello\",\n        {\n            text: \"from tRPC\"\n        }\n    ]);\n    var exampleData = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useQuery([\n        \"example\"\n    ]);\n    var invalidateQueries = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useContext().invalidateQueries;\n    var createExample = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useMutation(\"create-example\", {\n        onSuccess: function() {\n            return invalidateQueries(\"example\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Hottest Champion\"\n                        }, void 0, false, {\n                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"League of Legends Charater Rankings\",\n                            content: \"Who is the most popular champion.\"\n                        }, void 0, false, {\n                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center w-1/2 min-h-screen mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-extrabold text-center text-7xl\",\n                            children: \"Which champion do you like better?\"\n                        }, void 0, false, {\n                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-fit\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"py-6 text-2xl\",\n                                    children: \"Here is the subtitle\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"py-6 text-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Data from Prisma:\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-8 flex justify-between items-center flex-col md:flex-row animate-fade-in\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex-1 card w-96 glass\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: \"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg\",\n                                                                    alt: \"car!\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                    lineNumber: 40,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                lineNumber: 40,\n                                                                columnNumber: 17\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"card-body\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                                        className: \"card-title\",\n                                                                        children: \"Life hack\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 42,\n                                                                        columnNumber: 17\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        children: \"How to park your car at your garage?\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 43,\n                                                                        columnNumber: 19\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"card-actions justify-end\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                            className: \"btn btn-primary\",\n                                                                            children: \"Learn now!\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                            lineNumber: 45,\n                                                                            columnNumber: 13\n                                                                        }, _this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 44,\n                                                                        columnNumber: 15\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                lineNumber: 41,\n                                                                columnNumber: 15\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 13\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cent... p-8 italic text-xl\",\n                                                        children: \"OR\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 15\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex-1 card w-96 glass\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: \"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg\",\n                                                                    alt: \"car!\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                    lineNumber: 53,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                lineNumber: 53,\n                                                                columnNumber: 17\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"card-body\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                                        className: \"card-title\",\n                                                                        children: \"Life hack\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 55,\n                                                                        columnNumber: 17\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        children: \"How to park your car at your garage?\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 19\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"card-actions justify-end\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                            className: \"btn btn-primary\",\n                                                                            children: \"Learn now!\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                            lineNumber: 58,\n                                                                            columnNumber: 13\n                                                                        }, _this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                        lineNumber: 57,\n                                                                        columnNumber: 15\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                                lineNumber: 54,\n                                                                columnNumber: 15\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 13\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 15\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dax/Code/qualityc0d3/lolbestchamp/src/pages/index.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"kARDWdKVyztS9TUXtYpbv8w3WC8=\", false, function() {\n    return [\n        _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useQuery,\n        _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useQuery,\n        _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useMutation\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLEdBQUM7a0ZBQUMsc0NBQW9DOzs7Ozs2RUFBSTtrRkFDL0MsOERBQUNWLEtBQUc7d0VBQUNRLFNBQVMsRUFBQywwQkFBMEI7a0ZBQzNDLDRFQUFDUSxRQUFNOzRFQUFDUixTQUFTLEVBQUMsaUJBQWlCO3NGQUFDLFlBQVU7Ozs7O2lGQUFTOzs7Ozs2RUFDbkQ7Ozs7OztxRUFDRjs7Ozs7OzZEQUNGOzs7Ozs7cURBQ0o7Ozs7O2lEQUNVOzs7Ozs7eUNBR0Y7Ozs7OztpQ0FDRjs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7cUJBQ0QsQ0FDTDtDQUNIO0dBbEVLbEIsSUFBSTs7UUFDTUQsc0RBQWE7UUFDUEEsc0RBQWE7UUFFWEEseURBQWdCOzs7QUFKbENDLEtBQUFBLElBQUk7QUFvRVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIi4uL3V0aWxzL3RycGNcIjtcbmltcG9ydCB7IGdldENoYW1wcyB9IGZyb20gXCIuLi91dGlscy9mZXRjaFJhbmRvbS50c1wiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBoZWxsbyA9IHRycGMudXNlUXVlcnkoW1wiaGVsbG9cIiwgeyB0ZXh0OiBcImZyb20gdFJQQ1wiIH1dKTtcbiAgY29uc3QgZXhhbXBsZURhdGEgPSB0cnBjLnVzZVF1ZXJ5KFtcImV4YW1wbGVcIl0pO1xuICBjb25zdCB7IGludmFsaWRhdGVRdWVyaWVzIH0gPSB0cnBjLnVzZUNvbnRleHQoKTtcbiAgY29uc3QgY3JlYXRlRXhhbXBsZSA9IHRycGMudXNlTXV0YXRpb24oXCJjcmVhdGUtZXhhbXBsZVwiLCB7XG4gICAgb25TdWNjZXNzOiAoKSA9PiBpbnZhbGlkYXRlUXVlcmllcyhcImV4YW1wbGVcIiksXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvdHRlc3QgQ2hhbXBpb248L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiTGVhZ3VlIG9mIExlZ2VuZHMgQ2hhcmF0ZXIgUmFua2luZ3NcIiBjb250ZW50PVwiV2hvIGlzIHRoZSBtb3N0IHBvcHVsYXIgY2hhbXBpb24uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMS8yIG1pbi1oLXNjcmVlbiBteC1hdXRvXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LTd4bFwiPlxuICAgICAgICAgIFdoaWNoIGNoYW1waW9uIGRvIHlvdSBsaWtlIGJldHRlcj9cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHRleHQtMnhsXCI+XG4gICAgICAgICAgICBIZXJlIGlzIHRoZSBzdWJ0aXRsZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgPHA+RGF0YSBmcm9tIFByaXNtYTo8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBjYXJkIHctOTYgZ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9BYXRyb3hfMC5qcGdcIiBhbHQ9XCJjYXIhXCIvPjwvZmlndXJlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TGlmZSBoYWNrPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwPkhvdyB0byBwYXJrIHlvdXIgY2FyIGF0IHlvdXIgZ2FyYWdlPzwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TGVhcm4gbm93ITwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnQuLi4gcC04IGl0YWxpYyB0ZXh0LXhsXCI+T1I8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgY2FyZCB3LTk2IGdsYXNzXCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvQWF0cm94XzAuanBnXCIgYWx0PVwiY2FyIVwiLz48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkxpZmUgaGFjazwvaDI+XG4gICAgICAgICAgICAgICAgICA8cD5Ib3cgdG8gcGFyayB5b3VyIGNhciBhdCB5b3VyIGdhcmFnZT88L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxlYXJuIG5vdyE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gIFxuICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPC8+IFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidHJwYyIsIkhvbWUiLCJoZWxsbyIsInVzZVF1ZXJ5IiwidGV4dCIsImV4YW1wbGVEYXRhIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJ1c2VDb250ZXh0IiwiY3JlYXRlRXhhbXBsZSIsInVzZU11dGF0aW9uIiwib25TdWNjZXNzIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZpZ3VyZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});