import { iterResp } from "iter-db"
import { ResponseSchema, browser } from "uralsjs-axios-ajax"

export type IterDbHttpServerConfig = {
    url: string,
    authToken: string
}

export const setVal = (
    config: IterDbHttpServerConfig,
    data: any
): Promise<iterResp.IterRespError | iterResp.IterRespId> => {
    return browser.sendAjax({
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
        .then((r: ResponseSchema) => {
            if (!r.data) {
                return {
                    error: "Unexcepted error",
                    details: "No data in response"
                }
            } else {
                const rKeys = Object.keys(r.data)
                if (rKeys.includes("id")) {
                    return {
                        id: (typeof r.data.id === "number") ? r.data.id : parseInt(r.data.id)
                    }
                } else if (rKeys.includes("error")) {
                    return {
                        ...{
                            error: r.data.error,
                        },
                        ...(r.data.details ? { details: r.data.details } : {})
                    }
                } else {
                    return {
                        error: "Unexcepted error",
                        details: "Invalid format of response"
                    }
                }
            }
        }, (e) => ({
            error: "Unexcepted error",
            details: JSON.stringify(e)
        }))
}

export const regIter = (
    config: IterDbHttpServerConfig,
): Promise<iterResp.IterRespError | iterResp.IterRespIter> => {
    return browser.sendAjax({
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
        .then((r: ResponseSchema) => {
            if (!r.data) {
                return {
                    error: "Unexcepted error",
                    details: "No data in response"
                }
            } else {
                const rKeys = Object.keys(r.data)
                if (rKeys.includes("iter")) {
                    return (typeof r.data.iter === "string")
                        ? {
                            iter: r.data.iter
                        }
                        : {
                            error: "Unexcepted error",
                            details: "Invalid iter format: getted value type of "
                                + (typeof r.data.iter)
                        }
                } else if (rKeys.includes("error")) {
                    return {
                        ...{
                            error: r.data.error,
                        },
                        ...(r.data.details ? { details: r.data.details } : {})
                    }
                } else {
                    return {
                        error: "Unexcepted error",
                        details: "Invalid format of response"
                    }
                }
            }
        }, (e) => ({
            error: "Unexcepted error",
            details: JSON.stringify(e)
        }))
}

export const reqOneNewVal = (
    config: IterDbHttpServerConfig,
    iter: string
): Promise<iterResp.IterRespError | iterResp.IterRespVal> => {
    return browser.sendAjax({
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
        .then((r: ResponseSchema) => {
            if (!r.data) {
                return {
                    error: "Unexcepted error",
                    details: "No data in response"
                }
            } else {
                const rKeys = Object.keys(r.data)
                if (rKeys.includes("val")) {
                    return (typeof r.data.val === "object")
                        ? {
                            val: r.data.val
                        }
                        : {
                            error: "Unexcepted error",
                            details: "Invalid val format: getted value type of "
                                + (typeof r.data.val)
                        }
                } else if (rKeys.includes("error")) {
                    return {
                        ...{
                            error: r.data.error,
                        },
                        ...(r.data.details ? { details: r.data.details } : {})
                    }
                } else {
                    return {
                        error: "Unexcepted error",
                        details: "Invalid format of response"
                    }
                }
            }
        }, (e) => ({
            error: "Unexcepted error",
            details: JSON.stringify(e)
        }))
}

export const reqBatchNewVals = (
    config: IterDbHttpServerConfig,
    iter: string,
    count: number
): Promise<iterResp.IterRespError | iterResp.IterRespVals> => {
    return browser.sendAjax({
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
        .then((r: ResponseSchema) => {
            if (!r.data) {
                return {
                    error: "Unexcepted error",
                    details: "No data in response"
                }
            } else {
                const rKeys = Object.keys(r.data)
                if (rKeys.includes("vals")) {
                    return (Array.isArray(r.data.vals))
                        ? {
                            vals: r.data.vals
                        }
                        : {
                            error: "Unexcepted error",
                            details: "Invalid val format: getted value type of "
                                + (typeof r.data.vals)
                        }
                } else if (rKeys.includes("error")) {
                    return {
                        ...{
                            error: r.data.error,
                        },
                        ...(r.data.details ? { details: r.data.details } : {})
                    }
                } else {
                    return {
                        error: "Unexcepted error",
                        details: "Invalid format of response"
                    }
                }
            }
        }, (e) => ({
            error: "Unexcepted error",
            details: JSON.stringify(e)
        }))
}