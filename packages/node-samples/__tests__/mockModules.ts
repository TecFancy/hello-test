import axios from "axios";

import { getUser } from "../src";
import defaultExport, { foo, bar } from "../src/fooBarBaz";

jest.mock("axios");

jest.mock("../src/fooBarBaz", () => {
  const originalModule = jest.requireActual("../src/fooBarBaz");

  // 模拟 foo 变量和默认导出的函数
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

describe("Promise Request", () => {
  test("模拟异步请求返回值", async () => {
    const input = "Olive";
    const output = { name: input, email: `${input.toLowerCase()}@foxmail.com` };

    (axios.post as jest.Mock).mockResolvedValue({ data: output });

    const result = await getUser({ name: input });
    expect(result?.data).toEqual(output);
  });

  test('模拟异步请求内部实现', async () => {
    const input = "Olive";
    const output = { name: input, email: `${input.toLowerCase()}@foxmail.com` };

    (axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: output })
    );

    const result = await getUser({ name: "Olive" });
    expect(result?.data).toBe(output);
  })

  test("模拟部分模块", () => {
    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe("mocked baz");
    expect(defaultExport).toHaveBeenCalled();
    expect(foo).toBe("mocked foo");
    expect(bar).toBe("bar");
  });
});
