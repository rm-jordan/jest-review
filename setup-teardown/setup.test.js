let animals = ["elephant", "zebra", "bear", "tiger"];

describe("animals array", () => {
  it("should add another animal to end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });
});
