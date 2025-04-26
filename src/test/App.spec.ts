import { describe, expect } from "@jest/globals"

describe("App tests", () => {
  it("should pass", () => {
    expect(false).toBeFalsy()
  })

  it("should fail", () => {
    expect(false).toBeTruthy()
  })
})
