import { Directive, TemplateRef } from '@angular/core';
var QueryEntityDirective = /** @class */ (function () {
    function QueryEntityDirective(template) {
        this.template = template;
    }
    QueryEntityDirective.decorators = [
        { type: Directive, args: [{ selector: '[queryEntity]' },] },
    ];
    /** @nocollapse */
    QueryEntityDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return QueryEntityDirective;
}());
export { QueryEntityDirective };
//# sourceMappingURL=query-entity.directive.js.map