const traverseMatrix = require(".");

describe("traverse matrix", () => {
	test("level 1", () => {
		expect(traverseMatrix([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		])).toEqual(2);
	});

	test("level 2", () => {
		expect(traverseMatrix([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
			[0, 0, 0],
		])).toEqual(4);
	});

	test("level 3", () => {
		expect(traverseMatrix([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
			[1, 0, 0],
		])).toEqual(3);
	});

	test("level 4", () => {
		expect(traverseMatrix([
			[0, 0, 0],
			[0, 1, 0],
			[1, 1, 0],
			[0, 0, 0],
		])).toEqual(1);
	});

	test("level 5", () => {
		expect(traverseMatrix([
			[0, 0, 0],
			[1, 0, 1],
			[0, 1, 0],
			[0, 0, 0],
		])).toEqual(1);
	});
});
