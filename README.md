# iter-db-connector
connectors to iter-db servers


## Example of usage
```typescript
import { nodeToHttp as iterDbConnect } from "../src"
const config: iterDbConnect.IterDbHttpServerConfig = {
    url: "http://localhost:3000", //same url uses default in package "iter-db-http-server"
    authToken: "asdlkmsa" //same auth token uses default in package "iter-db-http-server"
}

const testScenario = async () => {
    const res1 = await iterDbConnect.setVal(config, { "testk1": "test val 1" })
    //return { id: 0 }
    const res2 = await iterDbConnect.setVal(config, { "testk2": "test val 2" })
    //return { id: 1 }
    const res3 = await iterDbConnect.regIter(config)
    //returns { iter: **some-iter** }
    const iter = res3["iter"]
    const res4 = await iterDbConnect.reqOneNewVal(config, iter)
    //returns { val: { id: 0, val: { "testk1": "test val 1" } } }
    const res5 = await iterDbConnect.reqOneNewVal(config, iter)
    //returns { val: { id: 1, val: { "testk2": "test val 2" } } }
    const res6 = await iterDbConnect.reqOneNewVal(config, iter)
    //returns { val: null }
}
testScenario()
```


## Index file
```typescript
export * as browserToHttp from "./browser-to-http-server-connector"
export * as nodeToHttp from "./node-to-http-server-connector"
```


## Api of every connector
```typescript
export type IterDbHttpServerConfig = {
    url: string,
    authToken: string
}

export const setVal = (
    config: IterDbHttpServerConfig,
    data: any
): Promise<iterResp.IterRespError | iterResp.IterRespId> => {...}

export const regIter = (
    config: IterDbHttpServerConfig,
): Promise<iterResp.IterRespError | iterResp.IterRespIter> => {...}

export const reqOneNewVal = (
    config: IterDbHttpServerConfig,
    iter: string
): Promise<iterResp.IterRespError | iterResp.IterRespVal> => {...}

export const reqBatchNewVals = (
    config: IterDbHttpServerConfig,
    iter: string,
    count: number
): Promise<iterResp.IterRespError | iterResp.IterRespVals> => {...}
```


## Author
Anatoly Starodubtsev
tostar74@mail.ru


## License
MIT