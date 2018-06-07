"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _iconSettings = require("../../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _modal = require("../../../../components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _button = require("../../../../components/button");

var _button2 = _interopRequireDefault(_button);

var _lookup = require("../../../../components/lookup");

var _lookup2 = _interopRequireDefault(_lookup);

var _menuPicklist = require("../../../../components/menu-picklist");

var _menuPicklist2 = _interopRequireDefault(_menuPicklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `~` is replaced with design-system-react at runtime
var Example = (0, _createReactClass2.default)({
  displayName: 'ModalExample',
  getInitialState: function getInitialState() {
    return {
      isOpen: false
    };
  },
  toggleOpen: function toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  render: function render() {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement("div", null, _react2.default.createElement(_button2.default, {
      label: "Open modal with menu contents",
      onClick: this.toggleOpen
    }), _react2.default.createElement(_modal2.default, {
      isOpen: this.state.isOpen,
      footer: [_react2.default.createElement(_button2.default, {
        label: "Cancel",
        onClick: this.toggleOpen
      }), _react2.default.createElement(_button2.default, {
        label: "Save",
        variant: "brand",
        onClick: this.toggleOpen
      })],
      onRequestClose: this.toggleOpen,
      title: "New Opportunity"
    }, _react2.default.createElement("section", {
      className: "slds-p-around--large"
    }, _react2.default.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, _react2.default.createElement("label", {
      className: "slds-form-element__label",
      htmlFor: "opptyName"
    }, "Opportunity Name"), _react2.default.createElement("div", {
      className: "slds-form-element__control"
    }, _react2.default.createElement("input", {
      id: "opptyName",
      className: "-input",
      type: "text",
      placeholder: "Enter name"
    }))), _react2.default.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, _react2.default.createElement("label", {
      className: "slds-form-element__label",
      htmlFor: "description"
    }, "Opportunity Description"), _react2.default.createElement("div", {
      className: "slds-form-element__control"
    }, _react2.default.createElement("textarea", {
      id: "description",
      className: "-textarea",
      placeholder: "Enter description"
    }))), _react2.default.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, _react2.default.createElement(_lookup2.default, {
      emptyMessage: "No items found",
      hasError: false,
      label: "Account",
      onChange: function onChange(newValue) {
        console.log('New search term: ', newValue);
      },
      onSelect: function onSelect(item) {
        console.log(item, ' Selected');
      },
      options: [{
        type: 'section',
        label: 'SECTION 1'
      }, {
        label: "Paddy's Pub"
      }, {
        label: 'Tyrell Corp'
      }, {
        type: 'section',
        label: 'SECTION 2'
      }, {
        label: 'Paper St. Soap Company'
      }, {
        label: 'Nakatomi Investments'
      }, {
        label: 'Acme Landscaping'
      }, {
        type: 'section',
        label: 'SECTION 3'
      }, {
        label: 'Acme Construction'
      }],
      sectionDividerRenderer: _lookup2.default.DefaultSectionDivider
    })), _react2.default.createElement(_menuPicklist2.default, {
      className: "slds-m-bottom--large",
      label: "Lead Source",
      onSelect: function onSelect(option) {
        console.log('selected: ', option.label);
      },
      options: [{
        label: 'Third Party Program',
        value: 'A0'
      }, {
        label: 'Cold Call',
        value: 'B0'
      }, {
        label: 'LinkedIn',
        value: 'C0'
      }, {
        label: 'Direct Mail',
        value: 'D0'
      }, {
        label: 'Other',
        value: 'E0'
      }],
      placeholder: "Select Lead Source",
      value: "B0"
    }), _react2.default.createElement(_menuPicklist2.default, {
      className: "slds-m-bottom--large",
      label: "Type",
      onSelect: function onSelect(option) {
        console.log('selected: ', option.label);
      },
      options: [{
        label: 'Add on Business',
        value: 'A0'
      }, {
        label: 'Courtesy',
        value: 'B0'
      }, {
        label: 'New Business',
        value: 'C0'
      }, {
        label: 'Renewal',
        value: 'D0'
      }, {
        label: 'Upgrade',
        value: 'E0'
      }],
      placeholder: "Select Opportunity Type",
      value: "C0"
    }), _react2.default.createElement("div", {
      className: "slds-form-element slds-m-bottom--large"
    }, _react2.default.createElement("label", {
      className: "slds-form-element__label",
      htmlFor: "amount"
    }, "Amount"), _react2.default.createElement("div", {
      className: "slds-form-element__control"
    }, _react2.default.createElement("input", {
      id: "amount",
      className: "-input",
      type: "text",
      placeholder: "Enter Amount"
    })))))));
  }
});
exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime