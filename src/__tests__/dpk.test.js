const crypto = require("crypto");
const { deterministicPartitionKey } = require("../dpk.js");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal hash for empty object when given empty object as input", () => {
    const trivialKey = deterministicPartitionKey({});
    let hash = crypto.createHash("sha3-512").update("{}").digest("hex");
    expect(trivialKey).toBe(hash);
  });
  it("Returns the literal 1 when given partitionKey as 1 in input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1" });
    expect(trivialKey).toBe("1");
  });
});
