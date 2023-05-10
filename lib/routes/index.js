"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("../controllers/controller.url");
var _validateUrl = _interopRequireDefault(require("../middleware/validateUrl"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use(_express["default"].json());
router.use(_express["default"].urlencoded({
  extended: true
}));

// Your first API endpoint
router.get('/hello', function (req, res) {
  res.json({
    greeting: 'hello API'
  });
});
router.post('/shorturl', _validateUrl["default"], _controller.saveUrl);
router.get('/shorturl/:shortUrl', _controller.getUrl);
var _default = router;
exports["default"] = _default;