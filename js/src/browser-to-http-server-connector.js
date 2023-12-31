"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqBatchNewVals = exports.reqOneNewVal = exports.regIter = exports.setVal = void 0;
var uralsjs_axios_ajax_1 = require("uralsjs-axios-ajax");
var setVal = function (config, data) {
    return uralsjs_axios_ajax_1.browser.sendAjax({
        url: config.url,
        method: "post",
        body: {
            contentType: "application/json",
            data: {
                authToken: config.authToken,
                set: data
            }
        }
    })
        .then(function (r) {
        if (!r.data) {
            return {
                error: "Unexcepted error",
                details: "No data in response"
            };
        }
        else {
            var rKeys = Object.keys(r.data);
            if (rKeys.includes("id")) {
                return {
                    id: (typeof r.data.id === "number") ? r.data.id : parseInt(r.data.id)
                };
            }
            else if (rKeys.includes("error")) {
                return __assign({
                    error: r.data.error,
                }, (r.data.details ? { details: r.data.details } : {}));
            }
            else {
                return {
                    error: "Unexcepted error",
                    details: "Invalid format of response"
                };
            }
        }
    }, function (e) { return ({
        error: "Unexcepted error",
        details: JSON.stringify(e)
    }); });
};
exports.setVal = setVal;
var regIter = function (config) {
    return uralsjs_axios_ajax_1.browser.sendAjax({
        url: config.url,
        method: "post",
        body: {
            contentType: "application/json",
            data: {
                authToken: config.authToken,
                reg: true
            }
        }
    })
        .then(function (r) {
        if (!r.data) {
            return {
                error: "Unexcepted error",
                details: "No data in response"
            };
        }
        else {
            var rKeys = Object.keys(r.data);
            if (rKeys.includes("iter")) {
                return (typeof r.data.iter === "string")
                    ? {
                        iter: r.data.iter
                    }
                    : {
                        error: "Unexcepted error",
                        details: "Invalid iter format: getted value type of "
                            + (typeof r.data.iter)
                    };
            }
            else if (rKeys.includes("error")) {
                return __assign({
                    error: r.data.error,
                }, (r.data.details ? { details: r.data.details } : {}));
            }
            else {
                return {
                    error: "Unexcepted error",
                    details: "Invalid format of response"
                };
            }
        }
    }, function (e) { return ({
        error: "Unexcepted error",
        details: JSON.stringify(e)
    }); });
};
exports.regIter = regIter;
var reqOneNewVal = function (config, iter) {
    return uralsjs_axios_ajax_1.browser.sendAjax({
        url: config.url,
        method: "post",
        body: {
            contentType: "application/json",
            data: {
                authToken: config.authToken,
                req: { iter: iter, req: { oneNew: true } }
            }
        }
    })
        .then(function (r) {
        if (!r.data) {
            return {
                error: "Unexcepted error",
                details: "No data in response"
            };
        }
        else {
            var rKeys = Object.keys(r.data);
            if (rKeys.includes("val")) {
                return (typeof r.data.val === "object")
                    ? {
                        val: r.data.val
                    }
                    : {
                        error: "Unexcepted error",
                        details: "Invalid val format: getted value type of "
                            + (typeof r.data.val)
                    };
            }
            else if (rKeys.includes("error")) {
                return __assign({
                    error: r.data.error,
                }, (r.data.details ? { details: r.data.details } : {}));
            }
            else {
                return {
                    error: "Unexcepted error",
                    details: "Invalid format of response"
                };
            }
        }
    }, function (e) { return ({
        error: "Unexcepted error",
        details: JSON.stringify(e)
    }); });
};
exports.reqOneNewVal = reqOneNewVal;
var reqBatchNewVals = function (config, iter, count) {
    return uralsjs_axios_ajax_1.browser.sendAjax({
        url: config.url,
        method: "post",
        body: {
            contentType: "application/json",
            data: {
                authToken: config.authToken,
                req: { iter: iter, req: { batchNew: count } }
            }
        }
    })
        .then(function (r) {
        if (!r.data) {
            return {
                error: "Unexcepted error",
                details: "No data in response"
            };
        }
        else {
            var rKeys = Object.keys(r.data);
            if (rKeys.includes("vals")) {
                return (Array.isArray(r.data.vals))
                    ? {
                        vals: r.data.vals
                    }
                    : {
                        error: "Unexcepted error",
                        details: "Invalid val format: getted value type of "
                            + (typeof r.data.vals)
                    };
            }
            else if (rKeys.includes("error")) {
                return __assign({
                    error: r.data.error,
                }, (r.data.details ? { details: r.data.details } : {}));
            }
            else {
                return {
                    error: "Unexcepted error",
                    details: "Invalid format of response"
                };
            }
        }
    }, function (e) { return ({
        error: "Unexcepted error",
        details: JSON.stringify(e)
    }); });
};
exports.reqBatchNewVals = reqBatchNewVals;
