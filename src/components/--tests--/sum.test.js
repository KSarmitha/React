import { sum } from "../../utils/sum";

test("Sum of two numbers", () => {
    const result = sum(20,19);

    expect(result).toBe(39);
})