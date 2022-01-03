"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TelefoneBrasileiroInput = function TelefoneBrasileiroInput(props) {
  var TYPES = {
    OITO: "9999-9999",
    NOVE: "99999-9999",
    SNOVE: "9 9999-9999",
    DDDOITO: "(99)9999-9999",
    DDDNOVE: "(99)99999-9999",
    DDDSNOVE: "(99)9 9999-9999",
    SDDDOITO: "(99) 9999-9999",
    SDDDNOVE: "(99) 99999-9999",
    SDDDSNOVE: "(99) 9 9999-9999"
  };
  var MAX_LENGTH = props.temDDD ? props.separaDDD ? props.separaNono ? clear(TYPES.SDDDSNOVE).length : clear(TYPES.SDDDNOVE).length : props.separaNono ? clear(TYPES.DDDSNOVE).length : clear(TYPES.DDDNOVE).length : props.separaNono ? clear(TYPES.SNOVE).length : clear(TYPES.NOVE).length;
  var onChange = props.onChange;
  var value = clear(props.value);

  if (value) {
    value = applyMask(value, TYPES[getMask(value)]);
  }

  function onLocalChange(ev) {
    var value = clear(ev.target.value);
    var mask = getMask(value);
    var nextLength = value.length;
    if (nextLength > MAX_LENGTH) return;
    value = applyMask(value, TYPES[mask]);
    ev.target.value = value;
    onChange(ev);
  }

  function getMask(value) {
    if (props.temDDD) {
      if (props.separaDDD) {
        if (props.separaNono) {
          return value.length > 10 ? "SDDDSNOVE" : "SDDDOITO";
        } else {
          return value.length > 10 ? "SDDDNOVE" : "SDDDOITO";
        }
      } else {
        if (props.separaNono) {
          return value.length > 10 ? "DDDSNOVE" : "DDDOITO";
        } else {
          return value.length > 10 ? "DDDNOVE" : "DDDOITO";
        }
      }
    } else {
      if (props.separaNono) {
        return value.length > 8 ? "SNOVE" : "OITO";
      } else {
        return value.length > 8 ? "NOVE" : "OITO";
      }
    }
  }

  function applyMask(value, mask) {
    var result = "";
    var inc = 0;
    Array.from(value).forEach(function (letter, index) {
      while (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }

      result += letter;
    });
    return result;
  }

  function clear(value) {
    return value && value.replace(/[^0-9]/g, "");
  }

  return /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
    value: value,
    onChange: onLocalChange
  }));
};

TelefoneBrasileiroInput.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
TelefoneBrasileiroInput.defaultProps = {
  temDDD: false,
  separaNono: false,
  separaDDD: false,
  value: "",
  onChange: function onChange() {}
};
var _default = TelefoneBrasileiroInput;
exports["default"] = _default;