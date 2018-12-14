/**
 * angular2-query-builder - A modernized Angular 2+ query builder based on jquery QueryBuilder
 * @version v0.4.0
 * @author Zeb Zhao
 * @link https://github.com/zebzhao/Angular-QueryBuilder#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angular2-query-builder"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["angular2-query-builder"] = factory(root["ng"]["core"], root["ng"]["forms"], root["ng"]["common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryOperatorDirective = /** @class */ (function () {
    function QueryOperatorDirective(template) {
        this.template = template;
    }
    QueryOperatorDirective = __decorate([
        core_1.Directive({ selector: '[queryOperator]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryOperatorDirective);
    return QueryOperatorDirective;
}());
exports.QueryOperatorDirective = QueryOperatorDirective;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryFieldDirective = /** @class */ (function () {
    function QueryFieldDirective(template) {
        this.template = template;
    }
    QueryFieldDirective = __decorate([
        core_1.Directive({ selector: '[queryField]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryFieldDirective);
    return QueryFieldDirective;
}());
exports.QueryFieldDirective = QueryFieldDirective;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryEntityDirective = /** @class */ (function () {
    function QueryEntityDirective(template) {
        this.template = template;
    }
    QueryEntityDirective = __decorate([
        core_1.Directive({ selector: '[queryEntity]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryEntityDirective);
    return QueryEntityDirective;
}());
exports.QueryEntityDirective = QueryEntityDirective;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QuerySwitchGroupDirective = /** @class */ (function () {
    function QuerySwitchGroupDirective(template) {
        this.template = template;
    }
    QuerySwitchGroupDirective = __decorate([
        core_1.Directive({ selector: '[querySwitchGroup]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QuerySwitchGroupDirective);
    return QuerySwitchGroupDirective;
}());
exports.QuerySwitchGroupDirective = QuerySwitchGroupDirective;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryButtonGroupDirective = /** @class */ (function () {
    function QueryButtonGroupDirective(template) {
        this.template = template;
    }
    QueryButtonGroupDirective = __decorate([
        core_1.Directive({ selector: '[queryButtonGroup]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryButtonGroupDirective);
    return QueryButtonGroupDirective;
}());
exports.QueryButtonGroupDirective = QueryButtonGroupDirective;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryInputDirective = /** @class */ (function () {
    function QueryInputDirective(template) {
        this.template = template;
    }
    Object.defineProperty(QueryInputDirective.prototype, "queryInputType", {
        /** Unique name for query input type. */
        get: function () { return this._type; },
        set: function (value) {
            // If the directive is set without a type (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!value) {
                return;
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], QueryInputDirective.prototype, "queryInputType", null);
    QueryInputDirective = __decorate([
        core_1.Directive({ selector: '[queryInput]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryInputDirective);
    return QueryInputDirective;
}());
exports.QueryInputDirective = QueryInputDirective;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryRemoveButtonDirective = /** @class */ (function () {
    function QueryRemoveButtonDirective(template) {
        this.template = template;
    }
    QueryRemoveButtonDirective = __decorate([
        core_1.Directive({ selector: '[queryRemoveButton]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryRemoveButtonDirective);
    return QueryRemoveButtonDirective;
}());
exports.QueryRemoveButtonDirective = QueryRemoveButtonDirective;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryEmptyWarningDirective = /** @class */ (function () {
    function QueryEmptyWarningDirective(template) {
        this.template = template;
    }
    QueryEmptyWarningDirective = __decorate([
        core_1.Directive({ selector: '[queryEmptyWarning]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryEmptyWarningDirective);
    return QueryEmptyWarningDirective;
}());
exports.QueryEmptyWarningDirective = QueryEmptyWarningDirective;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var QueryArrowIconDirective = /** @class */ (function () {
    function QueryArrowIconDirective(template) {
        this.template = template;
    }
    QueryArrowIconDirective = __decorate([
        core_1.Directive({ selector: '[queryArrowIcon]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], QueryArrowIconDirective);
    return QueryArrowIconDirective;
}());
exports.QueryArrowIconDirective = QueryArrowIconDirective;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(1);
exports.QueryBuilderComponent = components_1.QueryBuilderComponent;
var query_builder_module_1 = __webpack_require__(19);
exports.QueryBuilderModule = query_builder_module_1.QueryBuilderModule;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(7));
__export(__webpack_require__(5));
__export(__webpack_require__(4));
__export(__webpack_require__(8));
__export(__webpack_require__(3));
__export(__webpack_require__(6));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(11));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(2);
var query_operator_directive_1 = __webpack_require__(3);
var query_field_directive_1 = __webpack_require__(4);
var query_entity_directive_1 = __webpack_require__(5);
var query_switch_group_directive_1 = __webpack_require__(6);
var query_button_group_directive_1 = __webpack_require__(7);
var query_input_directive_1 = __webpack_require__(8);
var query_remove_button_directive_1 = __webpack_require__(9);
var query_empty_warning_directive_1 = __webpack_require__(10);
var query_arrow_icon_directive_1 = __webpack_require__(11);
var core_1 = __webpack_require__(0);
exports.CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
exports.VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return QueryBuilderComponent; }),
    multi: true
};
var QueryBuilderComponent = /** @class */ (function () {
    function QueryBuilderComponent(changeDetectorRef) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClassNames = {
            arrowIconButton: 'q-arrow-icon-button',
            arrowIcon: 'q-icon q-arrow-icon',
            removeIcon: 'q-icon q-remove-icon',
            addIcon: 'q-icon q-add-icon',
            button: 'q-button',
            buttonGroup: 'q-button-group',
            removeButton: 'q-remove-button',
            switchGroup: 'q-switch-group',
            switchLabel: 'q-switch-label',
            switchRadio: 'q-switch-radio',
            rightAlign: 'q-right-align',
            transition: 'q-transition',
            collapsed: 'q-collapsed',
            treeContainer: 'q-tree-container',
            tree: 'q-tree',
            row: 'q-row',
            connector: 'q-connector',
            rule: 'q-rule',
            ruleSet: 'q-ruleset',
            invalidRuleSet: 'q-invalid-ruleset',
            emptyWarning: 'q-empty-warning',
            fieldControl: 'q-field-control',
            fieldControlSize: 'q-control-size',
            entityControl: 'q-entity-control',
            entityControlSize: 'q-control-size',
            operatorControl: 'q-operator-control',
            operatorControlSize: 'q-control-size',
            inputControl: 'q-input-control',
            inputControlSize: 'q-control-size'
        };
        this.defaultOperatorMap = {
            string: ['=', '!=', 'contains', 'like'],
            number: ['=', '!=', '>', '>=', '<', '<='],
            time: ['=', '!=', '>', '>=', '<', '<='],
            date: ['=', '!=', '>', '>=', '<', '<='],
            category: ['=', '!=', 'in', 'not in'],
            boolean: ['=']
        };
        this.data = { condition: 'and', rules: [] };
        this.allowRuleset = true;
        this.allowCollapse = false;
        this.emptyMessage = 'A ruleset cannot be empty. Please add a rule or remove it all together.';
        this.config = { fields: {} };
        this.defaultTemplateTypes = [
            'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'
        ];
        this.defaultEmptyList = [];
        this.inputContextCache = new Map();
        this.operatorContextCache = new Map();
        this.fieldContextCache = new Map();
        this.entityContextCache = new Map();
        this.removeButtonContextCache = new Map();
        // ----------END----------
        this.getDisabledState = function () {
            return _this.disabled;
        };
    }
    // ----------OnInit Implementation----------
    QueryBuilderComponent.prototype.ngOnInit = function () { };
    // ----------OnChanges Implementation----------
    QueryBuilderComponent.prototype.ngOnChanges = function (changes) {
        var config = this.config;
        var type = typeof config;
        if (type === 'object') {
            this.fields = Object.keys(config.fields).map(function (value) {
                var field = config.fields[value];
                field.value = field.value || value;
                return field;
            });
            if (config.entities) {
                this.entities = Object.keys(config.entities).map(function (value) {
                    var entity = config.entities[value];
                    entity.value = entity.value || value;
                    return entity;
                });
            }
            else {
                this.entities = null;
            }
            this.operatorsCache = {};
        }
        else {
            throw new Error("Expected 'config' must be a valid object, got " + type + " instead.");
        }
    };
    // ----------Validator Implementation----------
    QueryBuilderComponent.prototype.validate = function (control) {
        var errors = {};
        var ruleErrorStore = [];
        var hasErrors = false;
        if (!this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data)) {
            errors.empty = 'Empty rulesets are not allowed.';
            hasErrors = true;
        }
        this.validateRulesInRuleset(this.data, ruleErrorStore);
        if (ruleErrorStore.length) {
            errors.rules = ruleErrorStore;
            hasErrors = true;
        }
        return hasErrors ? errors : null;
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "value", {
        // ----------ControlValueAccessor Implementation----------
        get: function () {
            return this.data;
        },
        set: function (value) {
            // When component is initialized without a formControl, null is passed to value
            this.data = value || { condition: 'and', rules: [] };
            this.handleDataChange();
        },
        enumerable: true,
        configurable: true
    });
    QueryBuilderComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    QueryBuilderComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChangeCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.registerOnTouched = function (fn) {
        var _this = this;
        this.onTouchedCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.detectChanges();
    };
    QueryBuilderComponent.prototype.findTemplateForRule = function (rule) {
        var type = this.getInputType(rule.field, rule.operator);
        if (type) {
            var queryInput = this.findQueryInput(type);
            if (queryInput) {
                return queryInput.template;
            }
            else {
                if (this.defaultTemplateTypes.indexOf(type) === -1) {
                    console.warn("Could not find template for field with type: " + type);
                }
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.findQueryInput = function (type) {
        var templates = this.parentInputTemplates || this.inputTemplates;
        return templates.find(function (item) { return item.queryInputType === type; });
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        if (this.operatorsCache[field]) {
            return this.operatorsCache[field];
        }
        var operators = this.defaultEmptyList;
        var fieldObject = this.config.fields[field];
        if (this.config.getOperators) {
            return this.config.getOperators(field, fieldObject);
        }
        var type = fieldObject.type;
        if (fieldObject && fieldObject.operators) {
            operators = fieldObject.operators;
        }
        else if (type) {
            operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
            if (operators.length === 0) {
                console.warn("No operators found for field '" + field + "' with type " + fieldObject.type + ". " +
                    "Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.");
            }
            if (fieldObject.nullable) {
                operators = operators.concat(['is null', 'is not null']);
            }
        }
        else {
            console.warn("No 'type' property found on field: '" + field + "'");
        }
        // Cache reference to array object, so it won't be computed next time and trigger a rerender.
        this.operatorsCache[field] = operators;
        return operators;
    };
    QueryBuilderComponent.prototype.getFields = function (entity) {
        if (this.entities && entity) {
            return this.fields.filter(function (field) {
                return field && field.entity === entity;
            });
        }
        else {
            return this.fields;
        }
    };
    QueryBuilderComponent.prototype.getInputType = function (field, operator) {
        if (this.config.getInputType) {
            return this.config.getInputType(field, operator);
        }
        var type = this.config.fields[field].type;
        switch (operator) {
            case 'is null':
            case 'is not null':
                return null; // No displayed component
            case 'in':
            case 'not in':
                return type === 'category' || type === 'boolean' ? 'multiselect' : type;
            default:
                return type;
        }
    };
    QueryBuilderComponent.prototype.getOptions = function (field) {
        if (this.config.getOptions) {
            return this.config.getOptions(field);
        }
        return this.config.fields[field].options || this.defaultEmptyList;
    };
    QueryBuilderComponent.prototype.getClassNames = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
        var classNames = args.map(function (id) { return clsLookup[id] || _this.defaultClassNames[id]; }).filter(function (c) { return !!c; });
        return classNames.length ? classNames.join(' ') : null;
    };
    QueryBuilderComponent.prototype.getDefaultField = function (entity) {
        if (!entity) {
            return null;
        }
        else if (entity.defaultField !== undefined) {
            return this.getDefaultValue(entity.defaultField);
        }
        else {
            var entityFields = this.fields.filter(function (field) {
                return field && field.entity === entity.value;
            });
            if (entityFields && entityFields.length) {
                return entityFields[0];
            }
            else {
                console.warn("No fields found for entity '" + entity.name + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.getDefaultOperator = function (field) {
        if (field && field.defaultOperator !== undefined) {
            return this.getDefaultValue(field.defaultOperator);
        }
        else {
            var operators = this.getOperators(field.value);
            if (operators && operators.length) {
                return operators[0];
            }
            else {
                console.warn("No operators found for field '" + field.value + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.addRule = function (parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRule) {
            this.config.addRule(parent);
        }
        else {
            var field = this.fields[0];
            parent.rules = parent.rules.concat([{
                    field: field.value,
                    operator: this.getDefaultOperator(field),
                    value: this.getDefaultValue(field.defaultValue),
                    entity: field.entity
                }]);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRule = function (rule, parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.removeRule) {
            this.config.removeRule(rule, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== rule; });
        }
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.removeButtonContextCache.delete(rule);
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.addRuleSet = function (parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRuleSet) {
            this.config.addRuleSet(parent);
        }
        else {
            parent.rules = parent.rules.concat([{ condition: 'and', rules: [] }]);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRuleSet = function (ruleset, parent) {
        if (this.disabled) {
            return;
        }
        ruleset = ruleset || this.data;
        parent = parent || this.parentValue;
        if (this.config.removeRuleSet) {
            this.config.removeRuleSet(ruleset, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== ruleset; });
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.transitionEnd = function (e) {
        this.treeContainer.nativeElement.style.maxHeight = null;
    };
    QueryBuilderComponent.prototype.toggleCollapse = function () {
        var _this = this;
        this.computedTreeContainerHeight();
        setTimeout(function () {
            _this.data.collapsed = !_this.data.collapsed;
        }, 100);
    };
    QueryBuilderComponent.prototype.computedTreeContainerHeight = function () {
        var nativeElement = this.treeContainer.nativeElement;
        if (nativeElement && nativeElement.firstElementChild) {
            nativeElement.style.maxHeight = (nativeElement.firstElementChild.clientHeight + 8) + 'px';
        }
    };
    QueryBuilderComponent.prototype.changeCondition = function (value) {
        if (this.disabled) {
            return;
        }
        this.data.condition = value;
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeOperator = function (rule) {
        if (this.disabled) {
            return;
        }
        if (this.config.coerceValueForOperator) {
            rule.value = this.config.coerceValueForOperator(rule.operator, rule.value, rule);
        }
        else {
            rule.value = this.coerceValueForOperator(rule.operator, rule.value, rule);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.coerceValueForOperator = function (operator, value, rule) {
        var inputType = this.getInputType(rule.field, operator);
        if (inputType === 'multiselect' && !Array.isArray(value)) {
            return [value];
        }
        return value;
    };
    QueryBuilderComponent.prototype.changeInput = function () {
        if (this.disabled) {
            return;
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeField = function (fieldValue, rule) {
        if (this.disabled) {
            return;
        }
        // JCD fixes model's sticky prior field value for fields
        // in different entities having the same name.
        rule.field = fieldValue;
        var field = this.config.fields[fieldValue];
        if (field && field.defaultValue !== undefined) {
            rule.value = this.getDefaultValue(field.defaultValue);
        }
        else {
            delete rule.value;
        }
        rule.operator = this.getDefaultOperator(field);
        // Create new context objects so templates will automatically update
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.getInputContext(rule);
        this.getFieldContext(rule);
        this.getOperatorContext(rule);
        this.getEntityContext(rule);
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeEntity = function (entityValue, rule) {
        if (this.disabled) {
            return;
        }
        var entity = this.entities.find(function (e) { return e.value === entityValue; });
        var defaultField = this.getDefaultField(entity);
        if (defaultField) {
            this.changeField(defaultField.value, rule);
        }
        else {
            this.handleTouched();
            this.handleDataChange();
        }
    };
    QueryBuilderComponent.prototype.getDefaultValue = function (defaultValue) {
        switch (typeof defaultValue) {
            case 'function':
                return defaultValue();
            default:
                return defaultValue;
        }
    };
    QueryBuilderComponent.prototype.getOperatorTemplate = function () {
        var t = this.parentOperatorTemplate || this.operatorTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getFieldTemplate = function () {
        var t = this.parentFieldTemplate || this.fieldTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getEntityTemplate = function () {
        var t = this.parentEntityTemplate || this.entityTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getArrowIconTemplate = function () {
        var t = this.parentArrowIconTemplate || this.arrowIconTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getButtonGroupTemplate = function () {
        var t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getSwitchGroupTemplate = function () {
        var t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getRemoveButtonTemplate = function () {
        var t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getEmptyWarningTemplate = function () {
        var t = this.parentEmptyWarningTemplate || this.emptyWarningTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getQueryItemClassName = function (local) {
        var cls = this.getClassNames('row', 'connector', 'transition');
        cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
        if (local.invalid) {
            cls += ' ' + this.getClassNames('invalidRuleSet');
        }
        return cls;
    };
    QueryBuilderComponent.prototype.getButtonGroupContext = function () {
        if (!this.buttonGroupContext) {
            this.buttonGroupContext = {
                addRule: this.addRule.bind(this),
                addRuleSet: this.allowRuleset && this.addRuleSet.bind(this),
                removeRuleSet: this.allowRuleset && this.parentValue && this.removeRuleSet.bind(this),
                getDisabledState: this.getDisabledState,
                $implicit: this.data
            };
        }
        return this.buttonGroupContext;
    };
    QueryBuilderComponent.prototype.getRemoveButtonContext = function (rule) {
        if (!this.removeButtonContextCache.has(rule)) {
            this.removeButtonContextCache.set(rule, {
                removeRule: this.removeRule.bind(this),
                getDisabledState: this.getDisabledState,
                $implicit: rule
            });
        }
        return this.removeButtonContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getFieldContext = function (rule) {
        if (!this.fieldContextCache.has(rule)) {
            this.fieldContextCache.set(rule, {
                onChange: this.changeField.bind(this),
                getFields: this.getFields.bind(this),
                getDisabledState: this.getDisabledState,
                fields: this.fields,
                $implicit: rule
            });
        }
        return this.fieldContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getEntityContext = function (rule) {
        if (!this.entityContextCache.has(rule)) {
            this.entityContextCache.set(rule, {
                onChange: this.changeEntity.bind(this),
                getDisabledState: this.getDisabledState,
                entities: this.entities,
                $implicit: rule
            });
        }
        return this.entityContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getSwitchGroupContext = function () {
        return {
            onChange: this.changeCondition.bind(this),
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getArrowIconContext = function () {
        return {
            getDisabledState: this.getDisabledState,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getEmptyWarningContext = function () {
        return {
            getDisabledState: this.getDisabledState,
            message: this.emptyMessage,
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getOperatorContext = function (rule) {
        if (!this.operatorContextCache.has(rule)) {
            this.operatorContextCache.set(rule, {
                onChange: this.changeOperator.bind(this),
                getDisabledState: this.getDisabledState,
                operators: this.getOperators(rule.field),
                $implicit: rule
            });
        }
        return this.operatorContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getInputContext = function (rule) {
        if (!this.inputContextCache.has(rule)) {
            this.inputContextCache.set(rule, {
                onChange: this.changeInput.bind(this),
                getDisabledState: this.getDisabledState,
                options: this.getOptions(rule.field),
                field: this.config.fields[rule.field],
                $implicit: rule
            });
        }
        return this.inputContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.checkEmptyRuleInRuleset = function (ruleset) {
        var _this = this;
        if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
            return true;
        }
        else {
            return ruleset.rules.some(function (item) {
                if (item.rules) {
                    return _this.checkEmptyRuleInRuleset(item);
                }
                else {
                    return false;
                }
            });
        }
    };
    QueryBuilderComponent.prototype.validateRulesInRuleset = function (ruleset, errorStore) {
        var _this = this;
        if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
            ruleset.rules.forEach(function (item) {
                if (item.rules) {
                    return _this.validateRulesInRuleset(item, errorStore);
                }
                else if (item.field) {
                    var field = _this.config.fields[item.field];
                    if (field && field.validator && field.validator.apply) {
                        var error = field.validator(item, ruleset);
                        if (error != null) {
                            errorStore.push(error);
                        }
                    }
                }
            });
        }
    };
    QueryBuilderComponent.prototype.handleDataChange = function () {
        this.changeDetectorRef.markForCheck();
        if (this.onChangeCallback) {
            this.onChangeCallback();
        }
        if (this.parentChangeCallback) {
            this.parentChangeCallback();
        }
    };
    QueryBuilderComponent.prototype.handleTouched = function () {
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
        if (this.parentTouchedCallback) {
            this.parentTouchedCallback();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QueryBuilderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QueryBuilderComponent.prototype, "allowRuleset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QueryBuilderComponent.prototype, "allowCollapse", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], QueryBuilderComponent.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "classNames", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "operatorMap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "parentValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QueryBuilderComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_arrow_icon_directive_1.QueryArrowIconDirective)
    ], QueryBuilderComponent.prototype, "parentArrowIconTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.QueryList)
    ], QueryBuilderComponent.prototype, "parentInputTemplates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_operator_directive_1.QueryOperatorDirective)
    ], QueryBuilderComponent.prototype, "parentOperatorTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_field_directive_1.QueryFieldDirective)
    ], QueryBuilderComponent.prototype, "parentFieldTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_entity_directive_1.QueryEntityDirective)
    ], QueryBuilderComponent.prototype, "parentEntityTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_switch_group_directive_1.QuerySwitchGroupDirective)
    ], QueryBuilderComponent.prototype, "parentSwitchGroupTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_button_group_directive_1.QueryButtonGroupDirective)
    ], QueryBuilderComponent.prototype, "parentButtonGroupTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_remove_button_directive_1.QueryRemoveButtonDirective)
    ], QueryBuilderComponent.prototype, "parentRemoveButtonTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", query_empty_warning_directive_1.QueryEmptyWarningDirective)
    ], QueryBuilderComponent.prototype, "parentEmptyWarningTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], QueryBuilderComponent.prototype, "parentChangeCallback", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], QueryBuilderComponent.prototype, "parentTouchedCallback", void 0);
    __decorate([
        core_1.ViewChild('treeContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], QueryBuilderComponent.prototype, "treeContainer", void 0);
    __decorate([
        core_1.ContentChild(query_button_group_directive_1.QueryButtonGroupDirective),
        __metadata("design:type", query_button_group_directive_1.QueryButtonGroupDirective)
    ], QueryBuilderComponent.prototype, "buttonGroupTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_switch_group_directive_1.QuerySwitchGroupDirective),
        __metadata("design:type", query_switch_group_directive_1.QuerySwitchGroupDirective)
    ], QueryBuilderComponent.prototype, "switchGroupTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_field_directive_1.QueryFieldDirective),
        __metadata("design:type", query_field_directive_1.QueryFieldDirective)
    ], QueryBuilderComponent.prototype, "fieldTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_entity_directive_1.QueryEntityDirective),
        __metadata("design:type", query_entity_directive_1.QueryEntityDirective)
    ], QueryBuilderComponent.prototype, "entityTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_operator_directive_1.QueryOperatorDirective),
        __metadata("design:type", query_operator_directive_1.QueryOperatorDirective)
    ], QueryBuilderComponent.prototype, "operatorTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_remove_button_directive_1.QueryRemoveButtonDirective),
        __metadata("design:type", query_remove_button_directive_1.QueryRemoveButtonDirective)
    ], QueryBuilderComponent.prototype, "removeButtonTemplate", void 0);
    __decorate([
        core_1.ContentChild(query_empty_warning_directive_1.QueryEmptyWarningDirective),
        __metadata("design:type", query_empty_warning_directive_1.QueryEmptyWarningDirective)
    ], QueryBuilderComponent.prototype, "emptyWarningTemplate", void 0);
    __decorate([
        core_1.ContentChildren(query_input_directive_1.QueryInputDirective),
        __metadata("design:type", core_1.QueryList)
    ], QueryBuilderComponent.prototype, "inputTemplates", void 0);
    __decorate([
        core_1.ContentChild(query_arrow_icon_directive_1.QueryArrowIconDirective),
        __metadata("design:type", query_arrow_icon_directive_1.QueryArrowIconDirective)
    ], QueryBuilderComponent.prototype, "arrowIconTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], QueryBuilderComponent.prototype, "value", null);
    QueryBuilderComponent = __decorate([
        core_1.Component({
            selector: 'query-builder',
            template: __webpack_require__(15),
            styles: [__webpack_require__(16)],
            providers: [exports.CONTROL_VALUE_ACCESSOR, exports.VALIDATOR]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], QueryBuilderComponent);
    return QueryBuilderComponent;
}());
exports.QueryBuilderComponent = QueryBuilderComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getClassNames('switchRow')\">\r\n  <ng-template #defaultArrowIcon>\r\n    <i [ngClass]=\"getClassNames('arrowIcon')\"></i>\r\n  </ng-template>\r\n\r\n  <a *ngIf=\"allowCollapse\" (click)=\"toggleCollapse()\" [ngClass]=\"getClassNames('arrowIconButton', data.collapsed ? 'collapsed' : null)\">\r\n    <ng-container *ngIf=\"getArrowIconTemplate() as template; else defaultArrowIcon\">\r\n      <ng-container *ngTemplateOutlet=\"template; context: getArrowIconContext()\"></ng-container>\r\n    </ng-container>\r\n  </a>\r\n\r\n  <ng-container *ngIf=\"getButtonGroupTemplate() as template; else defaultButtonGroup\">\r\n    <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\r\n      <ng-container *ngTemplateOutlet=\"template; context: getButtonGroupContext()\"></ng-container>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-template #defaultButtonGroup>\r\n    <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\r\n      <button type=\"button\" (click)=\"addRule()\" [ngClass]=\"getClassNames('button')\" [disabled]=disabled>\r\n        <i [ngClass]=\"getClassNames('addIcon')\"></i> Rule\r\n      </button>\r\n      <button type=\"button\" (click)=\"addRuleSet()\" [ngClass]=\"getClassNames('button')\" *ngIf=\"allowRuleset\" [disabled]=disabled>\r\n        <i [ngClass]=\"getClassNames('addIcon')\"></i> Ruleset\r\n      </button>\r\n      <ng-container *ngIf=\"!!parentValue && allowRuleset\">\r\n        <button type=\"button\" (click)=\"removeRuleSet()\" [ngClass]=\"getClassNames('button', 'removeButton')\" [disabled]=disabled>\r\n          <i [ngClass]=\"getClassNames('removeIcon')\"></i>\r\n        </button>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-container *ngIf=\"getSwitchGroupTemplate() as template; else defaultSwitchGroup\">\r\n    <ng-container *ngTemplateOutlet=\"template; context: getSwitchGroupContext()\"></ng-container>\r\n  </ng-container>\r\n\r\n  <ng-template #defaultSwitchGroup>\r\n    <div [ngClass]=\"getClassNames('switchGroup', 'transition')\" *ngIf=\"data\">\r\n      <div [ngClass]=\"getClassNames('switchControl')\">\r\n        <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" [disabled]=disabled value=\"and\"\r\n          #andOption/>\r\n        <label (click)=\"changeCondition(andOption.value)\" [ngClass]=\"getClassNames('switchLabel')\">AND</label>\r\n      </div>\r\n      <div [ngClass]=\"getClassNames('switchControl')\">\r\n        <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" [disabled]=disabled value=\"or\"\r\n          #orOption/>\r\n        <label (click)=\"changeCondition(orOption.value)\" [ngClass]=\"getClassNames('switchLabel')\">OR</label>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<div #treeContainer (transitionend)=\"transitionEnd($event)\" [ngClass]=\"getClassNames('treeContainer', data.collapsed ? 'collapsed' : null)\">\r\n  <ul [ngClass]=\"getClassNames('tree')\" *ngIf=\"data && data.rules\">\r\n    <ng-container *ngFor=\"let rule of data.rules\">\r\n      <ng-container *ngIf=\"{ruleset: !!rule.rules, invalid: !config.allowEmptyRulesets && rule.rules && rule.rules.length === 0} as local\">\r\n        <li [ngClass]=\"getQueryItemClassName(local)\">\r\n          <ng-container *ngIf=\"!local.ruleset\">\r\n\r\n            <ng-container *ngIf=\"getRemoveButtonTemplate() as template; else defaultRemoveButton\">\r\n              <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\r\n                <ng-container *ngTemplateOutlet=\"template; context: getRemoveButtonContext(rule)\"></ng-container>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <ng-template #defaultRemoveButton>\r\n              <div [ngClass]=\"getClassNames('removeButtonSize', 'rightAlign')\">\r\n                <button type=\"button\" [ngClass]=\"getClassNames('button', 'removeButton')\" (click)=\"removeRule(rule, data)\" [disabled]=disabled>\r\n                  <i [ngClass]=\"getClassNames('removeIcon')\"></i>\r\n                </button>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <div *ngIf=\"entities?.length > 0\" class=\"q-inline-block-display\">\r\n              <ng-container *ngIf=\"getEntityTemplate() as template; else defaultEntity\">\r\n                <ng-container *ngTemplateOutlet=\"template; context: getEntityContext(rule)\"></ng-container>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <ng-template #defaultEntity>\r\n              <div [ngClass]=\"getClassNames('entityControlSize')\">\r\n                <select [ngClass]=\"getClassNames('entityControl')\" [(ngModel)]=\"rule.entity\" (ngModelChange)=\"changeEntity($event, rule)\"\r\n                  [disabled]=\"disabled\">\r\n                  <option *ngFor=\"let entity of entities\" [ngValue]=\"entity.value\">\r\n                    {{entity.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"getFieldTemplate() as template; else defaultField\">\r\n              <ng-container *ngTemplateOutlet=\"template; context: getFieldContext(rule)\"></ng-container>\r\n            </ng-container>\r\n\r\n            <ng-template #defaultField>\r\n              <div [ngClass]=\"getClassNames('fieldControlSize')\">\r\n                <select [ngClass]=\"getClassNames('fieldControl')\" [(ngModel)]=\"rule.field\" (ngModelChange)=\"changeField($event, rule)\" [disabled]=\"disabled\">\r\n                  <option *ngFor=\"let field of getFields(rule.entity)\" [ngValue]=\"field.value\">\r\n                    {{field.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"getOperatorTemplate() as template; else defaultOperator\">\r\n              <ng-container *ngTemplateOutlet=\"template; context: getOperatorContext(rule)\"></ng-container>\r\n            </ng-container>\r\n\r\n            <ng-template #defaultOperator>\r\n              <div [ngClass]=\"getClassNames('operatorControlSize')\">\r\n                <select [ngClass]=\"getClassNames('operatorControl')\" [(ngModel)]=\"rule.operator\" (ngModelChange)=\"changeOperator(rule)\" [disabled]=\"disabled\">\r\n                  <option *ngFor=\"let operator of getOperators(rule.field)\" [ngValue]=\"operator\">\r\n                    {{operator}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"findTemplateForRule(rule) as template; else defaultInput\">\r\n              <ng-container *ngTemplateOutlet=\"template; context: getInputContext(rule)\"></ng-container>\r\n            </ng-container>\r\n\r\n            <ng-template #defaultInput>\r\n              <div [ngClass]=\"getClassNames('inputControlSize')\" [ngSwitch]=\"getInputType(rule.field, rule.operator)\">\r\n                <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'string'\" type=\"text\">\r\n                <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'number'\" type=\"number\">\r\n                <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'date'\" type=\"date\">\r\n                <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'time'\" type=\"time\">\r\n                <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'category'\">\r\n                  <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\r\n                    {{opt.name}}\r\n                  </option>\r\n                </select>\r\n                <ng-container *ngSwitchCase=\"'multiselect'\">\r\n                  <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                    multiple>\r\n                    <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\r\n                      {{opt.name}}\r\n                    </option>\r\n                  </select>\r\n                </ng-container>\r\n                <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\"\r\n                  *ngSwitchCase=\"'boolean'\" type=\"checkbox\">\r\n              </div>\r\n            </ng-template>\r\n\r\n          </ng-container>\r\n          <query-builder *ngIf=\"local.ruleset\" [data]=\"rule\" [disabled]=\"disabled\" [parentTouchedCallback]=\"parentTouchedCallback || onTouchedCallback\"\r\n            [parentChangeCallback]=\"parentChangeCallback || onChangeCallback\" [parentInputTemplates]=\"parentInputTemplates || inputTemplates\"\r\n            [parentOperatorTemplate]=\"parentOperatorTemplate || operatorTemplate\" [parentFieldTemplate]=\"parentFieldTemplate || fieldTemplate\"\r\n            [parentEntityTemplate]=\"parentEntityTemplate || entityTemplate\" [parentSwitchGroupTemplate]=\"parentSwitchGroupTemplate || switchGroupTemplate\"\r\n            [parentButtonGroupTemplate]=\"parentButtonGroupTemplate || buttonGroupTemplate\" [parentRemoveButtonTemplate]=\"parentRemoveButtonTemplate || removeButtonTemplate\"\r\n            [parentEmptyWarningTemplate]=\"parentEmptyWarningTemplate || emptyWarningTemplate\" [parentArrowIconTemplate]=\"parentArrowIconTemplate || arrowIconTemplate\"\r\n            [parentValue]=\"data\" [classNames]=\"classNames\" [config]=\"config\" [allowRuleset]=\"allowRuleset\" [allowCollapse]=\"allowCollapse\"\r\n            [emptyMessage]=\"emptyMessage\" [operatorMap]=\"operatorMap\">\r\n          </query-builder>\r\n\r\n          <ng-container *ngIf=\"getEmptyWarningTemplate() as template; else defaultEmptyWarning\">\r\n            <ng-container *ngIf=\"local.invalid\">\r\n              <ng-container *ngTemplateOutlet=\"template; context: getEmptyWarningContext()\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultEmptyWarning>\r\n            <p [ngClass]=\"getClassNames('emptyWarning')\" *ngIf=\"local.invalid\">\r\n              {{emptyMessage}}\r\n            </p>\r\n          </ng-template>\r\n        </li>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ul>\r\n</div>\r\n"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(17);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host {\n  display: block;\n  width: 100%; }\n  :host .q-icon {\n    font-style: normal;\n    font-size: 12px; }\n  :host .q-remove-icon::before {\n    content: '\\274C'; }\n  :host .q-arrow-icon-button {\n    float: left;\n    margin: 4px 6px 4px 0;\n    transform: rotate(90deg);\n    transition: linear 0.25s transform;\n    cursor: pointer; }\n    :host .q-arrow-icon-button.q-collapsed {\n      transform: rotate(0); }\n  :host .q-arrow-icon::before {\n    content: '\\25B6'; }\n  :host .q-add-icon {\n    color: #555; }\n    :host .q-add-icon::before {\n      content: '\\2795'; }\n  :host .q-remove-button {\n    color: #B3415D;\n    width: 31px; }\n  :host .q-switch-group, :host .q-button-group {\n    font-family: \"Lucida Grande\", Tahoma, Verdana, sans-serif;\n    overflow: hidden; }\n  :host .q-right-align {\n    float: right; }\n  :host .q-button {\n    margin-left: 8px;\n    padding: 0 8px;\n    background-color: white; }\n    :host .q-button:disabled {\n      display: none; }\n  :host .q-control-size {\n    display: inline-block;\n    vertical-align: top;\n    padding-right: 10px; }\n  :host .q-input-control, :host .q-operator-control, :host .q-field-control, :host .q-entity-control {\n    display: inline-block;\n    padding: 5px 8px;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    width: auto; }\n    :host .q-input-control:disabled, :host .q-operator-control:disabled, :host .q-field-control:disabled, :host .q-entity-control:disabled {\n      border-color: transparent; }\n  :host .q-operator-control, :host .q-field-control, :host .q-entity-control, :host .q-input-control:not([type='checkbox']) {\n    min-height: 32px;\n    -webkit-appearance: none; }\n  :host .q-switch-label, :host .q-button {\n    float: left;\n    margin-bottom: 0;\n    font-size: 14px;\n    line-height: 30px;\n    font-weight: normal;\n    text-align: center;\n    text-shadow: none;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-sizing: border-box; }\n    :host .q-switch-label:hover, :host .q-button:hover {\n      cursor: pointer;\n      background-color: #F0F0F0; }\n  :host .q-switch-label {\n    background-color: #e4e4e4;\n    padding: 0 8px; }\n  :host .q-switch-radio {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    width: 1px;\n    border: 0;\n    overflow: hidden; }\n    :host .q-switch-radio:checked + .q-switch-label {\n      border: 1px solid #619ed7;\n      background: white;\n      color: #3176b3; }\n    :host .q-switch-radio:disabled + .q-switch-label {\n      display: none; }\n    :host .q-switch-radio:checked:disabled + .q-switch-label {\n      display: initial;\n      color: initial;\n      cursor: default;\n      border-color: transparent; }\n  :host .q-invalid-ruleset {\n    border: 1px solid rgba(179, 65, 93, 0.5) !important;\n    background: rgba(179, 65, 93, 0.1) !important; }\n  :host .q-empty-warning {\n    color: #8d252e;\n    text-align: center; }\n  :host .q-ruleset {\n    border: 1px solid #CCC; }\n  :host .q-rule {\n    border: 1px solid #CCC;\n    background: white; }\n  :host .q-transition {\n    -webkit-transition: all 0.1s ease-in-out;\n    -moz-transition: all 0.1s ease-in-out;\n    -ms-transition: all 0.1s ease-in-out;\n    -o-transition: all 0.1s ease-in-out;\n    transition: all 0.1s ease-in-out; }\n  :host .q-tree-container {\n    width: 100%;\n    overflow: hidden;\n    transition: ease-in 0.25s max-height; }\n    :host .q-tree-container.q-collapsed {\n      max-height: 0 !important; }\n  :host .q-tree {\n    list-style: none;\n    margin: 4px 0 2px; }\n  :host .q-row {\n    padding: 6px 8px;\n    margin-top: 6px; }\n  :host .q-connector {\n    position: relative; }\n    :host .q-connector::before {\n      top: -5px;\n      border-width: 0 0 2px 2px; }\n    :host .q-connector::after {\n      border-width: 0 0 0 2px;\n      top: 50%; }\n    :host .q-connector::before, :host .q-connector::after {\n      content: '';\n      left: -12px;\n      border-color: #CCC;\n      border-style: solid;\n      width: 9px;\n      height: calc(50% + 6px);\n      position: absolute; }\n    :host .q-connector:last-child::after {\n      content: none; }\n  :host .q-inline-block-display {\n    display: inline-block;\n    vertical-align: top; }\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var forms_1 = __webpack_require__(2);
var components_1 = __webpack_require__(1);
var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                components_1.QueryBuilderComponent,
                components_1.QueryInputDirective,
                components_1.QueryOperatorDirective,
                components_1.QueryFieldDirective,
                components_1.QueryEntityDirective,
                components_1.QueryButtonGroupDirective,
                components_1.QuerySwitchGroupDirective,
                components_1.QueryRemoveButtonDirective,
                components_1.QueryEmptyWarningDirective,
                components_1.QueryArrowIconDirective
            ],
            exports: [
                components_1.QueryBuilderComponent,
                components_1.QueryInputDirective,
                components_1.QueryOperatorDirective,
                components_1.QueryFieldDirective,
                components_1.QueryEntityDirective,
                components_1.QueryButtonGroupDirective,
                components_1.QuerySwitchGroupDirective,
                components_1.QueryRemoveButtonDirective,
                components_1.QueryEmptyWarningDirective,
                components_1.QueryArrowIconDirective
            ]
        })
    ], QueryBuilderModule);
    return QueryBuilderModule;
}());
exports.QueryBuilderModule = QueryBuilderModule;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map