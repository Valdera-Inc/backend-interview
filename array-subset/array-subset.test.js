const arraySubset = require(".");

describe("array-subset", () => {
	test("level 1 (correctly identifies subset)", () => {
		expect(
			arraySubset(
				[1, 4, 19, 3, 277],
				[4, 3],
			),
		).toEqual(true);
	});

	test("level 2 (correctly identifies non-subset)", () => {
		expect(
			arraySubset(
				[1, 4, 19, 3, 277],
				[4, 20],
			),
		).toEqual(false);
	});

	test("level 3 (negatives)", () => {
		expect(
			arraySubset(
				[1, 4, 19, 3, 277],
				[4, -19],
			),
		).toEqual(false);
	});

	test("level 4 (out of order)", () => {
		expect(
			arraySubset(
				[1, 4, 34],
				[4, 1],
			),
		).toEqual(true);
	});

	test("level 5 (child is longer, subset)", () => {
		expect(
			arraySubset(
				[1, 4],
				[4, 4, 4],
			),
		).toEqual(true);
	});

	test("level 5 (child is longer, non-subset)", () => {
		expect(
			arraySubset(
				[1, 4],
				[4, 4, 2],
			),
		).toEqual(false);
	});
});
