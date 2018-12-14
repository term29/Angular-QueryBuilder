import { Directive, TemplateRef } from '@angular/core';
var QueryEmptyWarningDirective = /** @class */ (function () {
    function QueryEmptyWarningDirective(template) {
        this.template = template;
    }
    QueryEmptyWarningDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryEmptyWarning]' },] },
    ];
    /** @nocollapse */
    QueryEmptyWarningDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryEmptyWarningDirective;
}());
export { QueryEmptyWarningDirective };
//# sourceMappingURL=query-empty-warning.directive.js.map