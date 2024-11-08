import { SadIfyPipe } from "./sad-ify.pipe";

describe("SadIfyPipe", () => {
	const pipe = new SadIfyPipe();

	it("create an instance", () => {
		expect(pipe).toBeTruthy();
	});

	it("should turn an empty string into ' :/'", () => {
		expect(pipe.transform("")).toBe(" :/");
	});

	it("should turn 'yay I love life!' into 'yay I love life! :/'", () => {
		expect(pipe.transform("yay I love life!")).toBe("yay I love life! :/");
	});
});
