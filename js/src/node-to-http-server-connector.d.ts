import { iterResp } from "iter-db";
export type IterDbHttpServerConfig = {
    url: string;
    authToken: string;
};
export declare const setVal: (config: IterDbHttpServerConfig, data: any) => Promise<iterResp.IterRespError | iterResp.IterRespId>;
export declare const regIter: (config: IterDbHttpServerConfig) => Promise<iterResp.IterRespError | iterResp.IterRespIter>;
export declare const reqOneNewVal: (config: IterDbHttpServerConfig, iter: string) => Promise<iterResp.IterRespError | iterResp.IterRespVal>;
export declare const reqBatchNewVals: (config: IterDbHttpServerConfig, iter: string, count: number) => Promise<iterResp.IterRespError | iterResp.IterRespVals>;
