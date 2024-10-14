import { openClickboard, handleClickCopy } from "./clipboard";

describe("open clip board", () => {
  it("open clip board", () => {
    expect(openClickboard({})).toBe(undefined);
    expect(openClickboard({ value: undefined })).toBe(undefined);
    expect(openClickboard({ value: "" })).toBeFalsy(undefined);
    expect(openClickboard({ value: "aaa" })).toBeFalsy();
    expect(handleClickCopy(true)).toBe(undefined);
    expect(handleClickCopy(false)).toBe(undefined);
    expect(handleClickCopy("")).toBeFalsy();
    expect(handleClickCopy("aaa")).toBeFalsy();
  });
});
