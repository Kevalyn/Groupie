"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/csrf/route";
exports.ids = ["app/api/csrf/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcsrf%2Froute&page=%2Fapi%2Fcsrf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcsrf%2Froute.ts&appDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcsrf%2Froute&page=%2Fapi%2Fcsrf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcsrf%2Froute.ts&appDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_a657138_Desktop_Groupie_src_app_api_csrf_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/csrf/route.ts */ \"(rsc)/./src/app/api/csrf/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/csrf/route\",\n        pathname: \"/api/csrf\",\n        filename: \"route\",\n        bundlePath: \"app/api/csrf/route\"\n    },\n    resolvedPagePath: \"/Users/a657138/Desktop/Groupie/src/app/api/csrf/route.ts\",\n    nextConfigOutput,\n    userland: _Users_a657138_Desktop_Groupie_src_app_api_csrf_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/csrf/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjc3JmJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjc3JmJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY3NyZiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmE2NTcxMzglMkZEZXNrdG9wJTJGR3JvdXBpZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhNjU3MTM4JTJGRGVza3RvcCUyRkdyb3VwaWUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1E7QUFDckY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm91cGllLz8zYzI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hNjU3MTM4L0Rlc2t0b3AvR3JvdXBpZS9zcmMvYXBwL2FwaS9jc3JmL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jc3JmL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3NyZlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY3NyZi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hNjU3MTM4L0Rlc2t0b3AvR3JvdXBpZS9zcmMvYXBwL2FwaS9jc3JmL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jc3JmL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcsrf%2Froute&page=%2Fapi%2Fcsrf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcsrf%2Froute.ts&appDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/csrf/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/csrf/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_csrf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/csrf */ \"(rsc)/./src/lib/csrf.ts\");\n\n\n\n\nasync function GET() {\n    const jar = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    let token = jar.get(_lib_csrf__WEBPACK_IMPORTED_MODULE_3__.CSRF_COOKIE_NAME)?.value;\n    if (!token) {\n        token = crypto__WEBPACK_IMPORTED_MODULE_2___default().randomBytes(16).toString(\"hex\");\n        jar.set(_lib_csrf__WEBPACK_IMPORTED_MODULE_3__.CSRF_COOKIE_NAME, token, {\n            httpOnly: false,\n            sameSite: \"lax\",\n            secure: \"development\" === \"production\",\n            path: \"/\"\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jc3JmL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNKO0FBQ1g7QUFDa0I7QUFFdkMsZUFBZUk7SUFDcEIsTUFBTUMsTUFBTUoscURBQU9BO0lBQ25CLElBQUlLLFFBQVFELElBQUlFLEdBQUcsQ0FBQ0osdURBQWdCQSxHQUFHSztJQUV2QyxJQUFJLENBQUNGLE9BQU87UUFDVkEsUUFBUUoseURBQWtCLENBQUMsSUFBSVEsUUFBUSxDQUFDO1FBQ3hDTCxJQUFJTSxHQUFHLENBQUNSLHVEQUFnQkEsRUFBRUcsT0FBTztZQUMvQk0sVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLFFBQVFDLGtCQUF5QjtZQUNqQ0MsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxPQUFPaEIscURBQVlBLENBQUNpQixJQUFJLENBQUM7UUFBRVg7SUFBTTtBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3VwaWUvLi9zcmMvYXBwL2FwaS9jc3JmL3JvdXRlLnRzPzgxOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgeyBDU1JGX0NPT0tJRV9OQU1FIH0gZnJvbSBcIkAvbGliL2NzcmZcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgY29uc3QgamFyID0gY29va2llcygpO1xuICBsZXQgdG9rZW4gPSBqYXIuZ2V0KENTUkZfQ09PS0lFX05BTUUpPy52YWx1ZTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgdG9rZW4gPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIGphci5zZXQoQ1NSRl9DT09LSUVfTkFNRSwgdG9rZW4sIHtcbiAgICAgIGh0dHBPbmx5OiBmYWxzZSwgLy8geW914oCZcmUgdXNpbmcgZG91YmxlLXN1Ym1pdCB0b2tlbiB2aWEgbWV0YS9oZWFkZXJcbiAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHRva2VuIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvb2tpZXMiLCJjcnlwdG8iLCJDU1JGX0NPT0tJRV9OQU1FIiwiR0VUIiwiamFyIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwic2VjdXJlIiwicHJvY2VzcyIsInBhdGgiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/csrf/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/csrf.ts":
/*!*************************!*\
  !*** ./src/lib/csrf.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CSRF_COOKIE_NAME: () => (/* binding */ CSRF_COOKIE_NAME),\n/* harmony export */   getCsrfCookieToken: () => (/* binding */ getCsrfCookieToken),\n/* harmony export */   validateCsrfToken: () => (/* binding */ validateCsrfToken)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst CSRF_COOKIE_NAME = \"groupie_csrf\";\nfunction getCsrfCookieToken() {\n    return (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(CSRF_COOKIE_NAME)?.value ?? null;\n}\nfunction validateCsrfToken(headerToken) {\n    const cookieToken = getCsrfCookieToken();\n    if (!cookieToken || !headerToken) return false;\n    // Prevent timing attacks (ensure equal length first)\n    const a = Buffer.from(cookieToken);\n    const b = Buffer.from(headerToken);\n    if (a.length !== b.length) return false;\n    return crypto__WEBPACK_IMPORTED_MODULE_0___default().timingSafeEqual(a, b);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2NzcmYudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFFaEMsTUFBTUUsbUJBQW1CLGVBQWU7QUFFeEMsU0FBU0M7SUFDZCxPQUFPRixxREFBT0EsR0FBR0csR0FBRyxDQUFDRixtQkFBbUJHLFNBQVM7QUFDbkQ7QUFFTyxTQUFTQyxrQkFBa0JDLFdBQW9CO0lBQ3BELE1BQU1DLGNBQWNMO0lBQ3BCLElBQUksQ0FBQ0ssZUFBZSxDQUFDRCxhQUFhLE9BQU87SUFFekMscURBQXFEO0lBQ3JELE1BQU1FLElBQUlDLE9BQU9DLElBQUksQ0FBQ0g7SUFDdEIsTUFBTUksSUFBSUYsT0FBT0MsSUFBSSxDQUFDSjtJQUN0QixJQUFJRSxFQUFFSSxNQUFNLEtBQUtELEVBQUVDLE1BQU0sRUFBRSxPQUFPO0lBRWxDLE9BQU9iLDZEQUFzQixDQUFDUyxHQUFHRztBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3VwaWUvLi9zcmMvbGliL2NzcmYudHM/YjhlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBDU1JGX0NPT0tJRV9OQU1FID0gXCJncm91cGllX2NzcmZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENzcmZDb29raWVUb2tlbigpIHtcbiAgcmV0dXJuIGNvb2tpZXMoKS5nZXQoQ1NSRl9DT09LSUVfTkFNRSk/LnZhbHVlID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNzcmZUb2tlbihoZWFkZXJUb2tlbj86IHN0cmluZykge1xuICBjb25zdCBjb29raWVUb2tlbiA9IGdldENzcmZDb29raWVUb2tlbigpO1xuICBpZiAoIWNvb2tpZVRva2VuIHx8ICFoZWFkZXJUb2tlbikgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIFByZXZlbnQgdGltaW5nIGF0dGFja3MgKGVuc3VyZSBlcXVhbCBsZW5ndGggZmlyc3QpXG4gIGNvbnN0IGEgPSBCdWZmZXIuZnJvbShjb29raWVUb2tlbik7XG4gIGNvbnN0IGIgPSBCdWZmZXIuZnJvbShoZWFkZXJUb2tlbik7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gY3J5cHRvLnRpbWluZ1NhZmVFcXVhbChhLCBiKTtcbn1cbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJjb29raWVzIiwiQ1NSRl9DT09LSUVfTkFNRSIsImdldENzcmZDb29raWVUb2tlbiIsImdldCIsInZhbHVlIiwidmFsaWRhdGVDc3JmVG9rZW4iLCJoZWFkZXJUb2tlbiIsImNvb2tpZVRva2VuIiwiYSIsIkJ1ZmZlciIsImZyb20iLCJiIiwibGVuZ3RoIiwidGltaW5nU2FmZUVxdWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/csrf.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcsrf%2Froute&page=%2Fapi%2Fcsrf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcsrf%2Froute.ts&appDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fa657138%2FDesktop%2FGroupie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();