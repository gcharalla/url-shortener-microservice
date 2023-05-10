"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dns = _interopRequireDefault(require("dns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function validateUrl(req, res, next) {
  var url = req.body.url;
  try {
    var parsedUrl = new URL(url);
    var hostname = parsedUrl.hostname;
    _dns["default"].lookup(hostname, function (err) {
      if (err) {
        res.status(400).json({
          error: 'Invalid URL'
        });
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(400).json({
      error: 'Invalid URL'
    });
  }
}
var _default = validateUrl;
exports["default"] = _default;