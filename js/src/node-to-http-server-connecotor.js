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
var uralsjs_axios_ajax_1 = require("uralsjs-axios-ajax");
var sendSet = function (config, data) {
    return uralsjs_axios_ajax_1.node.sendAjax({
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
            if (r.data.id) {
                return {
                    id: (typeof r.data.id === "number") ? r.data.id : parseInt(r.data.id)
                };
            }
            else if (r.data.error) {
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
var sendRegIter = function (config) {
    return uralsjs_axios_ajax_1.node.sendAjax({
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
            if (r.data.iter) {
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
            else if (r.data.error) {
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
var sendReqOneNewVal = function (config, iter) {
    return uralsjs_axios_ajax_1.node.sendAjax({
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
            if (r.data.val) {
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
            else if (r.data.error) {
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
var sendReqBatchNewVals = function (config, iter, count) {
    return uralsjs_axios_ajax_1.node.sendAjax({
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
            if (r.data.vals) {
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
            else if (r.data.error) {
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
