"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Modelo de datos para la URL
var urlSchema = new _mongoose["default"].Schema({
  original_url: String,
  short_url: Number
});
var urlModel = _mongoose["default"].model('url', urlSchema);
exports.urlModel = urlModel;