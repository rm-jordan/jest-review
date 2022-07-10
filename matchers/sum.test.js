const sum = require("./sum");

// it("should add 1 + 2 to equal 3", () => {
//   const result = sum(1, 2);
//   expect(result).toBe(3);
// });

// test using more than one matcher

describe("", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// truthy falsy values
// normally dont stack these matchers for a similar outcome

describe("truthy or falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.2999);
  });
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingLists = ["milk", "tissue", "oranges", "apples", "broccoli"];
  expect(shoppingLists).toContain("milk");
});

// Exceptions

function compileAndroidCode() {
  throw new Error("you are using the wrong SDK");
}

describe("exceptions", () => {
  it("compiling goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
