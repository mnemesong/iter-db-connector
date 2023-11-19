import { nodeToHttp as iterDbConnect } from "../src"
import * as assert from "assert"

const config: iterDbConnect.IterDbHttpServerConfig = {
    url: "http://localhost:3000", //same url uses default in package "iter-db-http-server"
    authToken: "asdlkmsa" //same auth token uses default in package "iter-db-http-server"
}

//make a new empty database for this test
const testScenario = async () => {
    const res1 = await iterDbConnect.setVal(config, { "testk1": "test val 1" })
    console.log("res1: ", res1)
    assert.ok(Object.keys(res1).includes("id"))
    assert.ok(parseInt(res1["id"]) === 0)
    const res2 = await iterDbConnect.setVal(config, { "testk2": "test val 2" })
    console.log("res2: ", res2)
    assert.ok(Object.keys(res2).includes("id"))
    assert.ok(parseInt(res2["id"]) === 1)
    const res3 = await iterDbConnect.regIter(config)
    console.log("res3: ", res3)
    assert.ok(Object.keys(res3).includes("iter"))
    const iter = res3["iter"]
    const res4 = await iterDbConnect.reqOneNewVal(config, iter)
    console.log("res4: ", res4)
    assert.ok(res4["val"])
    assert.deepEqual(res4["val"], { id: 0, val: { "testk1": "test val 1" } })
    const res5 = await iterDbConnect.reqOneNewVal(config, iter)
    console.log("res5: ", res5)
    assert.ok(res5["val"])
    assert.deepEqual(res5["val"], { id: 1, val: { "testk2": "test val 2" } })
    const res6 = await iterDbConnect.reqOneNewVal(config, iter)
    console.log("res6: ", res6)
    assert.equal(res6["val"], null)
    console.log("Success")
}

testScenario()