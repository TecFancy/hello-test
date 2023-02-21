/**
 * @description 测试异步代码
 */

import { fetchData } from "../src";

describe("测试异步代码 - Promise", () => {
  const returnValue = "Hello";
  const errMsg = "Error Msg~";

  test(`Promise 1.1 -> 返回值为字符串 '${returnValue}'`, () => {
    return fetchData().then((data) => {
      expect(data).toBe(returnValue);
    });
  });

  test(`Promise 1.2 -> 返回值为字符串 '${returnValue}'`, () => {
    return expect(fetchData()).resolves.toBe("Hello");
  });

  test(`Promise 2.1 -> 返回值为字符串 '${returnValue}'`, async () => {
    const result = await fetchData();
    expect(result).toBe("Hello");
  });

  test(`Promise 2.2 -> 返回值为字符串 '${returnValue}' ---- async、await 和 .resolve 结合使用`, async () => {
    await expect(fetchData()).resolves.toBe("Hello");
  });

  test("Promise 3.0 -> 测试抛出错误", async () => {
    expect.assertions(3); // 几次断言就写几
    try {
      await fetchData(errMsg);
    } catch (err) {
      expect(err).toMatch(errMsg); // 完全匹配
      expect(err).toMatch(/^Error/); // 正则匹配
      expect(err).toContain("Msg"); // 部分匹配
    }
  });

  test("Promise 3.1 -> 测试抛出错误", () => {
    expect.assertions(1);
    return expect(fetchData(errMsg)).rejects.toMatch(errMsg);
  });

  test("Promise 3.2 -> 测试抛出错误", async () => {
    expect.assertions(1);
    await expect(fetchData(errMsg)).rejects.toMatch(errMsg);
  });
});
