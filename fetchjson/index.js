"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url)
    .then(function (resp) { return console.log(resp.data); })["catch"](function (error) { return console.log(error.message); });
