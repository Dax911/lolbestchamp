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

/***/ "./src/pages/fetchChamps.tsx":
/*!***********************************!*\
  !*** ./src/pages/fetchChamps.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstRandChamp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FirstRandChamp(props) {\n    console.log(props[\"champs\"]);\n    var obj = props[\"champs\"];\n    var index = [];\n    for(var i in props[\"champs\"]){\n        index.push(i);\n    }\n    index.sort(function(a, b) {\n        return a == b ? 0 : a < b ? -1 : 1;\n    });\n    console.log(obj[index[1]]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 w-1/2 card glass\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg\",\n                    alt: \"car!\"\n                }, void 0, false, {\n                    fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                lineNumber: 21,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl card-title\",\n                        children: \"Life hack\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"How to park your car at your garage?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Here is ln 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" ln 3 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-end card-actions\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-accent\",\n                            children: \"VOTE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 23\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n                lineNumber: 28,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dax/Code/QualityCode/lolbestchamp/src/pages/fetchChamps.tsx\",\n        lineNumber: 20,\n        columnNumber: 17\n    }, this);\n}; /*\nfetch champion.json (could be server side if wanted that way the client would alway \nhave access to the entire champion list.)\n\nrandomly pick a champion like so champion[n] where it calls a random number that \nis in the range of the length of the array of champions.\n\nthen pass the needed feilds to the component and display the champion's name,\nalso use data to parse needed data to another request to get the image url etc.\n*/ \n_c = FirstRandChamp;\nvar _c;\n$RefreshReg$(_c, \"FirstRandChamp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmV0Y2hDaGFtcHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBTWUsU0FBU0EsY0FBYyxDQUFDQyxLQUFVLEVBQUc7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU3QixJQUFJRyxHQUFHLEdBQUdILEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDekIsSUFBSUksS0FBSyxHQUFHLEVBQUU7SUFDZCxJQUFLLElBQUlDLENBQUMsSUFBSUwsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFFO1FBQzNCSSxLQUFLLENBQUNFLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUM7S0FDakI7SUFDREQsS0FBSyxDQUFDRyxJQUFJLENBQUMsU0FBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUM7UUFDckIsT0FBT0QsQ0FBQyxJQUFHQyxDQUFDLEdBQUcsQ0FBQyxHQUFHRCxDQUFDLEdBQUdDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckMsQ0FBQztJQUNGUixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLHFCQUNZLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzBCQUN0Qyw4REFBQ0MsUUFBTTswQkFDTCw0RUFBQ0MsS0FBRztvQkFDRkMsR0FBRyxFQUFHLHlFQUF1RTtvQkFDN0VDLEdBQUcsRUFBQyxNQUFNOzs7Ozt3QkFDVjs7Ozs7b0JBQ0s7MEJBRVQsOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOztrQ0FDeEIsOERBQUNLLElBQUU7d0JBQUNMLFNBQVMsRUFBQyxxQkFBcUI7a0NBQUMsV0FBUzs7Ozs7NEJBQUs7a0NBQ2xELDhEQUFDTSxHQUFDO2tDQUFDLHNDQUFvQzs7Ozs7NEJBQUk7a0NBQzNDLDhEQUFDQSxHQUFDO2tDQUFDLGNBQVk7Ozs7OzRCQUFJO2tDQUNuQiw4REFBQ0EsR0FBQztrQ0FBQyxRQUFNOzs7Ozs0QkFBSTtrQ0FDYiw4REFBQ1AsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjtrQ0FDdkMsNEVBQUNPLFFBQU07NEJBQUNQLFNBQVMsRUFBQyxnQkFBZ0I7c0NBQUMsTUFBSTs7Ozs7Z0NBQVM7Ozs7OzRCQUM1Qzs7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNqQjtDQUNKLEVBRUQ7Ozs7Ozs7OztFQVNFO0FBM0NzQlosS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmV0Y2hDaGFtcHMudHN4P2E2MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hhbXBpb25zRW5kUG9pbnREYXRhVHlwZSB9IGZyb20gXCIuLi96b2QvbW9kZWxzL2NoYW1waW9uTW9kZWxcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJzdFJhbmRDaGFtcChwcm9wczogYW55ICkge1xuICAgIGNvbnNvbGUubG9nKHByb3BzW1wiY2hhbXBzXCJdKTtcblxuICAgIGxldCBvYmogPSBwcm9wc1tcImNoYW1wc1wiXTtcbiAgICBsZXQgaW5kZXggPSBbXTtcbiAgICBmb3IgKHZhciBpIGluIHByb3BzW1wiY2hhbXBzXCJdKSB7XG4gICAgICAgIGluZGV4LnB1c2goaSk7XG4gICAgfVxuICAgIGluZGV4LnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIHJldHVybiBhPT0gYiA/IDAgOiBhIDwgYiA/IC0xIDogMTtcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKG9ialtpbmRleFsxXV0pO1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdy0xLzIgY2FyZCBnbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvQWF0cm94XzAuanBnYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjYXIhXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgY2FyZC10aXRsZVwiPkxpZmUgaGFjazwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhvdyB0byBwYXJrIHlvdXIgY2FyIGF0IHlvdXIgZ2FyYWdlPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVyZSBpcyBsbiAyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD4gbG4gMyA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1lbmQgY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWFjY2VudFwiPlZPVEU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8qXG5mZXRjaCBjaGFtcGlvbi5qc29uIChjb3VsZCBiZSBzZXJ2ZXIgc2lkZSBpZiB3YW50ZWQgdGhhdCB3YXkgdGhlIGNsaWVudCB3b3VsZCBhbHdheSBcbmhhdmUgYWNjZXNzIHRvIHRoZSBlbnRpcmUgY2hhbXBpb24gbGlzdC4pXG5cbnJhbmRvbWx5IHBpY2sgYSBjaGFtcGlvbiBsaWtlIHNvIGNoYW1waW9uW25dIHdoZXJlIGl0IGNhbGxzIGEgcmFuZG9tIG51bWJlciB0aGF0IFxuaXMgaW4gdGhlIHJhbmdlIG9mIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5IG9mIGNoYW1waW9ucy5cblxudGhlbiBwYXNzIHRoZSBuZWVkZWQgZmVpbGRzIHRvIHRoZSBjb21wb25lbnQgYW5kIGRpc3BsYXkgdGhlIGNoYW1waW9uJ3MgbmFtZSxcbmFsc28gdXNlIGRhdGEgdG8gcGFyc2UgbmVlZGVkIGRhdGEgdG8gYW5vdGhlciByZXF1ZXN0IHRvIGdldCB0aGUgaW1hZ2UgdXJsIGV0Yy5cbiovXG4iXSwibmFtZXMiOlsiRmlyc3RSYW5kQ2hhbXAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJpbmRleCIsImkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fetchChamps.tsx\n");

/***/ })

});