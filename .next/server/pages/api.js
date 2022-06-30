"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api = async (req, res)=>{
    const data = {
        title: "API",
        description: "API description",
        url: "https://api.github.com/users/octocat",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: {
            "name": "octocat",
            "blog": "https://octodex.github.com/",
            "public_repos": 2,
            "public_gists": 1,
            "followers": 100,
            "following": 0,
            "created_at": "2011-01-26T19:10:09Z",
            "updated_at": "2011-01-26T19:10:09Z"
        }
    };
    res.json(data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(520));
module.exports = __webpack_exports__;

})();