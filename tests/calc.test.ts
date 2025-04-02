import { add,multiply } from '../src/calc'


describe("Test CALC add", () => {
  it("should return 15 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15);
  })
})

describe("Test CALC multiply", () => {
  it("should return 8 for multiply(2, 4)", () => {
    expect(multiply(2, 4)).toBe(8);
  })
})
